import { createSelector } from 'reselect';
import Immutable from 'seamless-immutable';

import { getValidDateFormat } from '../../utils';

import { GET_EVENT_BY_ID, UPDATE_EVENT } from './actionTypes';

const initialState = Immutable({
  data: {},
  isLoading: true
});

export default function eventReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_EVENT_BY_ID:
      return state.merge({
        data: payload,
        isLoading: false
      });
    case UPDATE_EVENT:
      return state.merge({
        data: payload
      });
    default:
      return state;
  }
}

const getEvent = (state) => state.event;

export const getEventWithValidDate = createSelector([getEvent], (event) => {
  if (event?.data?.eventDate) {
    const normalizedDate = getValidDateFormat(event?.data?.eventDate);

    return {
      ...event,
      data: {
        ...event?.data,
        eventDate: normalizedDate
      }
    };
  }

  return event;
});
