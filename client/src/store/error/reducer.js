import Immutable from 'seamless-immutable';
import { HIDE_ERROR } from './actionTypes';

const initState = Immutable({
  error: null,
  isOpen: false
});

const errorReducer = (state = initState, action) => {
  const { type, error } = action;

  if (error) {
    return state.merge({
      error,
      isOpen: true
    });
  } else if (type === HIDE_ERROR) {
    return state.merge({
      error: null,
      isOpen: false
    });
  }

  return state;
};

export default errorReducer;
