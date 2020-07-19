import API from "../../utils/api";

export function setProjects(payload) {
  return {
    type: 'SET_PROJECTS',
    payload,
  };
}

export function updateProject(payload) {
  return {
    type: 'UPDATE_PROJECT',
    payload,
  };
}

export function voteProjectRequest(id, type) {
  return async function action(dispatch) {
    const token = localStorage.getItem('auth-token');
    if (!token) return;
    let response;
    try {
      response = await API.post(`projects/${id}/voting`, { type },
        { headers: {
            token
          },
        });
      dispatch(updateProject(response.data))
    } catch (error) {
      return response;
    }
  }
}

export function getProjectsRequest() {
  return async function action(dispatch) {
    const token = localStorage.getItem('auth-token');
    if (!token) return;
    let response;
    try {
      response = await API.get('projects', {
        headers: {
          token
        },
      });
      dispatch(setProjects(response.data))
    } catch (error) {
      return response;
    }
  }
}
