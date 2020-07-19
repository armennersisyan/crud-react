const initialState = {
  projects: [],
};

function projects(state = initialState, action) {
  switch (action.type) {
    case 'SET_PROJECTS':
      return {
        ...state,
        projects: action.payload,
      };
    case 'UPDATE_PROJECT':
      const projects = [...state.projects];
      let topicIndex = projects.findIndex(p => p.id === action.payload.id);
      projects[topicIndex] = action.payload;
      return {
        ...state,
        projects
      };
    default:
      return state;
  }
}

export default projects;
