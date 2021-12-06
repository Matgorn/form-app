import { createSelector } from 'reselect';
import Immutable from 'seamless-immutable';
import { getValidDateFormat } from '../../utils';

import {
  CREATE_EVENT,
  DELETE_EVENT,
  GET_EVENTS_ERROR,
  GET_EVENTS_SUCCESS,
  UPDATE_EVENT
} from './actionTypes';

const initialState = Immutable({
  data: [],
  error: null,
  isLoading: true
});

export default function eventsReducer(state = initialState, action) {
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
    case UPDATE_EVENT:
      return state.merge({
        data: state.data.map((event) => {
          if (event._id === payload._id) {
            return {
              ...event,
              ...payload
            };
          } else {
            return event;
          }
        })
      });
    case DELETE_EVENT:
      return state.merge({
        data: state.data.filter(({ _id }) => _id !== payload.eventId)
      });
    default:
      return state;
  }
}

const getEvents = (state) => state.events;

export const getEventsWithValidDate = createSelector([getEvents], (events) => {
  const formattedEvents = events.data.map((event) => ({
    ...event,
    eventDate: getValidDateFormat(event.eventDate)
  }));

  return {
    ...events,
    data: formattedEvents
  };
});
