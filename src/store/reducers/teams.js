const initialState = {
  teams: [
    {
      id: 1,
      name: 'Editor',
      topic: 'Hooks',
      project: 'Canvas',
      members: [
        {
          firstName: 'Name',
          lastName: 'Lname',
          avatarUrl: 'https://ca.slack-edge.com/T013US0Q0HE-U01578HQXEZ-9bc7ee959b7c-512'
        },
        {
          firstName: 'Name',
          lastName: 'Lname',
          avatarUrl: ''
        },
        {
          firstName: 'Name',
          lastName: 'Lname',
          avatarUrl: ''
        },
        {
          firstName: 'Name',
          lastName: 'Lname',
          avatarUrl: ''
        },
        {
          firstName: 'Name',
          lastName: 'Lname',
          avatarUrl: ''
        },
      ]
    },
  ],
};

function teams(state = initialState, action) {
  switch (action.type) {
    case 'SET_TEAMS':
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default teams;
