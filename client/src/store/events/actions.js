import { GET_EVENTS_SUCCESS, GET_EVENTS_ERROR } from './actionTypes';

import * as EventsService from '../../services/events';

const getEventsSuccess = (results) => ({
  type: GET_EVENTS_SUCCESS,
  payload: results
});

const getEventsError = (error) => ({
  type: GET_EVENTS_ERROR,
  payload: null,
  error
});

export const getEvents = () => async (dispatch) => {
  try {
    const res = await EventsService.getEvents();

    dispatch(getEventsSuccess(res.data));
  } catch (err) {
    dispatch(getEventsError(err));
  }
};
