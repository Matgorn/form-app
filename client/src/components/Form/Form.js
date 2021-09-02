import React, { useState } from 'react';
import { Paper, Button } from '@material-ui/core';
import { Form as FormWrapper } from 'react-final-form';

import DefaultField from './DefaultField/DefaultField';

import useStyles from './styles';

const Form = ({ onSubmit, setUpdateEvents }) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const classes = useStyles();

  const required = (value) => (value ? undefined : "Required");
  const mustBeEmail = (value) => (/.+@.+\..+/g.test(value) ? undefined : 'Provide valid email');
  const mustBeDateFormat = (value) => /\d{4}-\d{2}-\d{2}/g.test(value) ? undefined : 'Enter valid date'
  const composeValidators = (...validators) => (value) => validators.reduce((error, validator) => error || validator(value), undefined);

  return (
    <Paper className={classes.paper}>
      <FormWrapper
        onSubmit={(values) => onSubmit({ values, setShowSuccessMessage, setUpdateEvents })}
        render={({ handleSubmit, form, submitting, pristine }) => (
          <form onSubmit={handleSubmit}>
            <DefaultField 
              className={classes.field}
              name='firstName'
              validate={required}
              label='First Name'
            />

            <DefaultField 
              className={classes.field}
              name='lastName'
              validate={required}
              label='Last Name'
            />

            <DefaultField 
              className={classes.field}
              name='eMail'
              validate={composeValidators(required, mustBeEmail)}
              label='Email'
            />

            <DefaultField 
              className={classes.field}
              name='eventDate'
              validate={composeValidators(required, mustBeDateFormat)}
              type='date'
              margin='normal'
            />

            <div>
              <Button className={classes.field} fullWidth type="submit" variant="contained" color='primary' disabled={submitting}>
                Submit
              </Button>
              <Button
                className={`${classes.field} reset-button`}
                fullWidth
                variant='contained'
                color='secondary'
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}
              >
                Reset
              </Button>
            </div>
          </form>
        )}
      >
      </FormWrapper>
      {showSuccessMessage && <div data-testid="success-message" className="success-message">Event has been added</div>}
    </Paper>
  );
};

export default Form;
