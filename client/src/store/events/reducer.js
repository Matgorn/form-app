import { CREATE_EVENT, DELETE_EVENT, GET_EVENTS_ERROR, GET_EVENTS_SUCCESS } from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  data: [],
  error: null,
  isLoading: true
});

function eventsReducer(state = initialState, action) {
  const { type, payload, error } = action;

  switch (type) {
    case GET_EVENTS_SUCCESS:
      return state.merge({
        data: payload,
        isLoading: false
      });
    case GET_EVENTS_ERROR:
      return state.merge({
        error,
        isLoading: false
      });
    case CREATE_EVENT:
      return state.merge({
        data: state.data.concat([payload.newEvent])
      });
    case DELETE_EVENT:
      return state.merge({
        data: state.data.filter(({ _id }) => _id !== payload.eventId)
      });
    default:
      return state;
  }
}

export default eventsReducer;
