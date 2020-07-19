const initialState = {
  topics: [],
};

function topics(state = initialState, action) {
  switch (action.type) {
    case 'SET_TOPICS':
      return {
        ...state,
        topics: action.payload
      };
    case 'UPDATE_TOPIC':
      const topics = [...state.topics];
      let topicIndex = topics.findIndex(t => t.id === action.payload.id);
      topics[topicIndex] = action.payload;
      return {
        ...state,
        topics
      };
    case 'ADD_TOPIC':
      return {
        ...state,
        topics: [ ...state.topics, action.payload ]
      };
    case 'DELETE_TOPIC':
      const newTopics = [ ...state.topics ].filter(t => t.id !== action.payload);
      return {
        ...state,
        topics: newTopics
      };
    default:
      return state;
  }
}

export default topics;
