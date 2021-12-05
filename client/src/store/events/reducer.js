import { GET_EVENTS_SUCCESS } from './actionTypes';

const initialState = [];

function eventsReducer(events = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_EVENTS_SUCCESS:
      return payload;
    default:
      return events;
  }
}

export default eventsReducer;
