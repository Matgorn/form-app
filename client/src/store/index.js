import { combineReducers } from 'redux';
import events from './events/reducer';
import event from './event/reducer';
import error from './error/reducer';

export default combineReducers({
  events,
  event,
  error
});
