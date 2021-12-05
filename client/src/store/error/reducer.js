const initState = {
  error: null
};

const errorReducer = (state = initState, action) => {
  const { error } = action;

  if (error) {
    return {
      error
    };
  }

  return state;
};

export default errorReducer;
