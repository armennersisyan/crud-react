import API from "../../utils/api";

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
    } catch (error) {
      return response;
    }
  }
}
