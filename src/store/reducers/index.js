import { combineReducers } from 'redux';
import auth from './auth';
import teams from './teams';
import topics from './topics';

export default combineReducers({
  auth,
  teams,
  topics,
});
