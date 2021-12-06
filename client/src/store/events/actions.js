import {
  GET_EVENTS_SUCCESS,
  GET_EVENTS_ERROR,
  DELETE_EVENT,
  CREATE_EVENT,
  UPDATE_EVENT
} from './actionTypes';

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

export const createEvent = (eventData) => async (dispatch) => {
  try {
    const newEvent = await EventsService.createEvent(eventData);

    dispatch({
      type: CREATE_EVENT,
      payload: { newEvent: newEvent.data }
    });
  } catch (err) {
    console.log(err);
  }
};
/*eslint-disable*/
export const updateEvent = (eventId, eventData) => async (dispatch) => {
  try {
    const res = await EventsService.updateEvent(eventId, eventData);

    dispatch({
      type: UPDATE_EVENT,
      payload: [],
      error: 'Some error'
    });

    return Promise.reject(err);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteEvent = (eventId) => async (dispatch) => {
  try {
    await EventsService.deleteEvent(eventId);

    dispatch({
      type: DELETE_EVENT,
      payload: { eventId }
    });
  } catch (err) {
    console.log(err);
  }
};
