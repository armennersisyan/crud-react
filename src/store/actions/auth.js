import API from '../../utils/api'
import { NotificationManager } from 'react-notifications';

export function loginUserSuccess(payload) {
  return {
    type: 'LOGIN',
    payload,
  };
}

export function setCompanies(payload) {
  return {
    type: 'SET_COMPANIES',
    payload,
  };
}

export function signUserPending(status) {
  return {
    type: 'PENDING',
    status,
  };
}

export function logoutUserSuccess(payload) {
  localStorage.removeItem('user');
  return {
    type: 'LOGOUT',
    payload,
  };
}

export function registerUserRequest(payload) {
  return async function action(dispatch) {
    dispatch(signUserPending(true));
    let response;
    try {
      response = await API.post('users/register', {
        ...payload,
        companyId: Number(payload.company),
        avatarUrl: 'https://ca.slack-edge.com/T013US0Q0HE-U01578HQXEZ-9bc7ee959b7c-512'
      });
      NotificationManager.success('You have registered successfully!', 'Congratulations!');
    } catch (error) {
      NotificationManager.error('Please check your details', 'Oops!');
    } finally {
      dispatch(signUserPending(false));
    }
    return response;
  }
}

export function loginUserRequest(payload) {
  return async function action(dispatch) {
    dispatch(signUserPending(true));
    let response;
    try {
      response = await API.post('users/login', {
        ...payload,
      });
      localStorage.setItem('auth-token', response.data.token);
      dispatch(loginUserSuccess(response.data));
    } catch (error) {
      NotificationManager.error('Invalid email or password!', 'Oops!');
    } finally {
      dispatch(signUserPending(false));
    }
    return response;
  }
}

export function getUserRequest(token) {
  return async function action(dispatch) {
    dispatch(signUserPending(true));
    try {
      let response = await API.get('users', {
        headers: {
          token
        },
      });
      dispatch(loginUserSuccess(response.data));
      return response;
    } catch (error) {
      return error
    } finally {
      dispatch(signUserPending(false));
    }
  }
}

export function getCompaniesRequest() {
  return async function action(dispatch) {
    try {
      let response = await API.get('companies');
      dispatch(setCompanies(response.data));
      return response;
    } catch (error) {
      return error
    }
  }
}
