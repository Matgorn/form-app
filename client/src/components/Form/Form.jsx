import React from 'react';
import { Paper, Button, TextField } from '@material-ui/core';
import { useFormik } from 'formik';
import * as yup from 'yup';

import useStyles from './styles';
import { useDispatch } from 'react-redux';

import { createEvent } from '../../store/events/actions';

const validationSchema = yup.object({
  firstName: yup.string('Enter your first name').required('This field is required'),
  lastName: yup.string('Enter your last name').required('This field is required'),
  eMail: yup
    .string('Enter your first name')
    .email('Enter a valid email')
    .required('This field is required'),
  eventDate: yup.date('Enter valid date').required('This field is required')
});

const Form = ({ handleModalClose }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    handleReset,
    errors,
    touched,
    values,
    isSubmitting
  } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      eMail: '',
      eventDate: ''
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(createEvent(values));
      handleModalClose();
      handleReset();
    }
  });

  return (
    <Paper className={classes.paper}>
      <form onSubmit={handleSubmit}>
        <TextField
          className={classes.field}
          fullWidth
          name="firstName"
          label="First Name"
          variant="outlined"
          value={values.firstName}
          onChange={handleChange}
          error={touched.firstName && Boolean(errors.firstName)}
          helperText={touched.firstName && errors.firstName}
          onBlur={handleBlur}
        />

        <TextField
          className={classes.field}
          name="lastName"
          fullWidth
          label="Last Name"
          variant="outlined"
          value={values.lastName}
          onChange={handleChange}
          error={touched.lastName && Boolean(errors.lastName)}
          helperText={touched.lastName && errors.lastName}
          onBlur={handleBlur}
        />

        <TextField
          className={classes.field}
          name="eMail"
          fullWidth
          label="Email"
          variant="outlined"
          value={values.eMail}
          onChange={handleChange}
          error={touched.eMail && Boolean(errors.eMail)}
          helperText={touched.eMail && errors.eMail}
          onBlur={handleBlur}
        />

        <TextField
          className={classes.field}
          name="eventDate"
          fullWidth
          type="date"
          margin="normal"
          variant="outlined"
          value={values.eventDate}
          onChange={handleChange}
          error={touched.eventDate && Boolean(errors.eventDate)}
          helperText={touched.eventDate && errors.eventDate}
          onBlur={handleBlur}
        />

        <div>
          <Button
            className={classes.field}
            fullWidth
            type="submit"
            variant="contained"
            color="primary">
            Submit
          </Button>
          <Button
            className={`${classes.field} reset-button`}
            fullWidth
            variant="contained"
            color="secondary"
            type="button"
            onClick={handleReset}
            disabled={isSubmitting}>
            Reset
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default Form;
