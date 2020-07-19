import API from "../../utils/api";
import { NotificationManager } from 'react-notifications';

export function setTopics(payload) {
  return {
    type: 'SET_TOPICS',
    payload,
  };
}

export function updateTopic(payload) {
  return {
    type: 'UPDATE_TOPIC',
    payload,
  };
}

export function addTopic(payload) {
  return {
    type: 'ADD_TOPIC',
    payload,
  };
}

export function deleteTopic(payload) {
  return {
    type: 'DELETE_TOPIC',
    payload,
  };
}

export function getTopicsRequest() {
  return async function action(dispatch) {
    const token = localStorage.getItem('auth-token');
    if (!token) return;
    let response;
    try {
      response = await API.get('topics', {
        headers: {
          token
        },
      });
      dispatch(setTopics(response.data));
    } catch (error) {
      return response;
    }
  }
}

export function voteTopicRequest(id, type) {
  return async function action(dispatch) {
    const token = localStorage.getItem('auth-token');
    if (!token) return;
    let response;
    try {
      response = await API.post(`topics/${id}/voting`, { type },
        { headers: {
          token
        },
      });
      dispatch(updateTopic(response.data))
    } catch (error) {
      return response;
    }
  }
}

export function addTopicRequest(title) {
  return async function action(dispatch) {
    const token = localStorage.getItem('auth-token');
    if (!token) return;
    let response;
    try {
      response = await API.post('topics', { title },
        { headers: {
          token
        },
      });
      NotificationManager.success('You\'ve added a new Topic', title);
      dispatch(addTopic(response.data));
    } catch (error) {
      return response;
    }
  }
}

export function deleteTopicRequest(id) {
  return async function action(dispatch) {
    const token = localStorage.getItem('auth-token');
    if (!token) return;
    dispatch(deleteTopic(id));
    let response;
    try {
      response = await API.delete(`topics/${id}`,
        { headers: {
          token
        },
      });
      NotificationManager.success('You\'ve deleted a topic', 'Deleted');
    } catch (error) {
      return response;
    }
  }
}
