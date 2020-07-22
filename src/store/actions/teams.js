import API from "../../utils/api";

export function setTeams(payload) {
  return {
    type: 'SET_TEAMS',
    payload,
  };
}

export function getTeamsRequest() {
  return async function action(dispatch) {
    const token = localStorage.getItem('auth-token');
    if (!token) return;
    let response;
    try {
      response = await API.get('teams', {
        headers: {
          token
        },
      });
      dispatch(setTeams(response.data))
    } catch (error) {
      return response;
    }
  }
}
