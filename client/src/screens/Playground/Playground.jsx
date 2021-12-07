import React, { useCallback, useEffect, useState, useReducer } from 'react';
import { useTitle } from 'react-use';
import { Field, Form, Formik } from 'formik';
import classNames from 'classnames';

import './playground.sass';

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: (state.count = 0) };
    default:
      return { count: state.count };
  }
};

const Playground = ({ onSubmit }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useTitle("Let's play");
  const [blue, setBlue] = useState(false);
  const [bold, setBold] = useState(false);
  const [cursive, setCursive] = useState(false);
  const handleFormSubmit = useCallback((values) => () => {
    console.log(values);
    onSubmit(values);
  });

  const handleColorButtonClick = useCallback(() => {
    setBlue((prev) => !prev);
  });

  const handleBoldButtonClick = useCallback(() => {
    setBold((prev) => !prev);
  });

  const handleCursiveButtonClick = useCallback(() => {
    setCursive((prev) => !prev);
  });

  const handleIncrementButton = useCallback(() => {
    dispatch({ type: 'increment' });
  });

  const handleDecrementButton = useCallback(() => {
    dispatch({ type: 'decrement' });
  });

  const handleResetButton = useCallback(() => {
    dispatch({ type: 'reset' });
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('Tick');
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <div>
      <Formik
        initialValues={{
          first: '',
          second: '',
          third: ''
        }}>
        {({ values }) => (
          <Form>
            <label htmlFor="first">First Field</label>
            <Field id="first" name="first" />

            <label htmlFor="second">Second Field</label>
            <Field type="email" id="second" name="second" />

            <label htmlFor="third">Third Field</label>
            <Field type="date" id="third" name="third" />

            <button onClick={handleFormSubmit(values)} type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>

      <p
        className={classNames({
          btn: true,
          blue: blue,
          bold: bold,
          cursive: cursive
        })}>
        Classnames presentation
      </p>
      <button onClick={handleColorButtonClick}>Blue: {blue ? 'true' : 'false'}</button>
      <button onClick={handleBoldButtonClick}>Bold: {bold ? 'true' : 'false'}</button>
      <button onClick={handleCursiveButtonClick}>Cursive: {cursive ? 'true' : 'false'}</button>

      <h1>Counter: {state.count}</h1>
      <button onClick={handleIncrementButton}>Increment</button>
      <button onClick={handleDecrementButton}>Decrement</button>
      <button onClick={handleResetButton}>Reset</button>
    </div>
  );
};

export default Playground;
