const initialState = {
  user: null,
  isPending: false,
};

function auth(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
      };
    case 'PENDING':
      return {
        ...state,
        isPending: action.status,
      };
    default:
      return state;
  }
}

export default auth;
