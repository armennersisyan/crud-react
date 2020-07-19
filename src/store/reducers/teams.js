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
          firstName: 'Name2',
          lastName: 'Lname',
          avatarUrl: ''
        },
        {
          firstName: 'Name3',
          lastName: 'Lname',
          avatarUrl: ''
        },
        {
          firstName: 'Name4',
          lastName: 'Lname',
          avatarUrl: ''
        },
        {
          firstName: 'Name5',
          lastName: 'Lname',
          avatarUrl: ''
        },
      ]
    },
    {
      id: 2,
      name: 'Online Shop',
      topic: 'E-commerce',
      project: 'Shop',
      members: [
        {
          firstName: 'Namea',
          lastName: 'Lnameaaaa',
          avatarUrl: 'https://ca.slack-edge.com/T013US0Q0HE-U01578HQXEZ-9bc7ee959b7c-512'
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
