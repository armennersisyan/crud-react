import { combineReducers } from 'redux';
import auth from './auth';
import teams from './teams';
import topics from './topics';
import projects from './projects';
import layout from './layout';

export default combineReducers({
  auth,
  teams,
  topics,
  projects,
  layout,
});
