import React, { useCallback } from 'react';
import { Field, Form, Formik } from 'formik';

const Playground = ({ onSubmit }) => {
  const handleFormSubmit = useCallback((values) => () => {
    console.log(values);
    onSubmit(values);
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
    </div>
  );
};

export default Playground;
