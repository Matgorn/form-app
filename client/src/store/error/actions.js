import { SET_ERROR } from './actionTypes';

export function setError(error) {
  return {
    type: SET_ERROR,
    error: error
  };
}
