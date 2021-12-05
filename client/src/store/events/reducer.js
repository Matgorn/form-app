import { GET_EVENTS_ERROR, GET_EVENTS_SUCCESS } from './actionTypes';

const initialState = {
  data: [],
  error: null,
  isLoading: true
};

function eventsReducer(events = initialState, action) {
  const { type, payload, error } = action;

  switch (type) {
    case GET_EVENTS_SUCCESS:
      return {
        ...events,
        data: payload,
        isLoading: false
      };
    case GET_EVENTS_ERROR:
      return {
        ...events,
        error,
        isLoading: false
      };
    default:
      return events;
  }
}

export default eventsReducer;
