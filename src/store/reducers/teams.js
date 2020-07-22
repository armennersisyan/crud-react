const initialState = {
  teams: [],
};

function teams(state = initialState, action) {
  switch (action.type) {
    case 'SET_TEAMS':
      return {
        ...state,
        teams: action.payload
      };
    default:
      return state;
  }
}

export default teams;
