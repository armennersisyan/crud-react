const initialState = {
  user: null,
  isPending: false,
  companies: [],
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
    case 'SET_COMPANIES':
      return {
        ...state,
        companies: action.payload,
      };
    default:
      return state;
  }
}

export default auth;
