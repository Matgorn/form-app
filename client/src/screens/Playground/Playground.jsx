import React, { useCallback, useState } from 'react';
import { useTitle } from 'react-use';
import { Field, Form, Formik } from 'formik';
import classNames from 'classnames';

import './playground.sass';

const Playground = ({ onSubmit }) => {
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
    </div>
  );
};

export default Playground;
