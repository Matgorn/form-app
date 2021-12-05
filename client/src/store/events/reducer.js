import { GET_EVENTS_ERROR, GET_EVENTS_SUCCESS } from './actionTypes';
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
    default:
      return state;
  }
}

export default eventsReducer;
