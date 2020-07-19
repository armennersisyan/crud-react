const initialState = {
  sidebar: true,
};

function layout(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_SIDEBAR':
      return {
        sidebar: !state.sidebar,
      };
    default:
      return state;
  }
}

export default layout;
