import Immutable from 'seamless-immutable';

const initState = Immutable({
  error: null
});

const errorReducer = (state = initState, action) => {
  const { error } = action;

  if (error) {
    state.merge({
      error
    });
  }

  return state;
};

export default errorReducer;
