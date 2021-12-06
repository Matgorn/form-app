import { SET_ERROR } from '../error/actionTypes';
import { UPDATE_EVENT, GET_EVENT_BY_ID } from './actionTypes';

import * as EventsService from '../../services/events';

export const getEventById = (eventId) => async (dispatch) => {
  try {
    const res = await EventsService.getEventById(eventId);

    console.log(res.data);

    dispatch({
      type: GET_EVENT_BY_ID,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: SET_ERROR,
      error: err
    });
  }
};

export const updateEvent = (eventId, eventData) => async (dispatch) => {
  try {
    const res = await EventsService.updateEvent(eventId, eventData);

    dispatch({
      type: UPDATE_EVENT,
      payload: res.data
    });

    return Promise.reject(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
