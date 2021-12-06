import { HIDE_ERROR, SET_ERROR } from './actionTypes';

export const setError = (error) => ({ type: SET_ERROR, error });

export const hideError = () => ({ type: HIDE_ERROR });
