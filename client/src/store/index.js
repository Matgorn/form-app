import { combineReducers } from 'redux';
import events from './events/reducer';
import error from './error/reducer';

export default combineReducers({
  events,
  error
});
