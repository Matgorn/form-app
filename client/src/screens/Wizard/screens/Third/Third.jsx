/* eslint-disable */

import { Checkbox, FormControlLabel, FormGroup, TextField } from '@material-ui/core';
import { Button, FormHelperText } from '@mui/material';
import { Field } from 'formik';
import { useCallback } from 'react';
import { useNavigate } from 'react-router';

const Third = () => {
  const navigate = useNavigate();
  const handlePreviousButtonClick = useCallback(() => {
    navigate('/wizard/second');
  });

  return (
    <div>
      <Field fullWidth name="thirdQuestion">
        {({ field, meta }) => (
          <TextField
            fullWidth
            label="Third Question"
            variant="outlined"
            error={meta.touched && Boolean(meta.error)}
            helperText={meta.touched && meta.error}
            {...field}
          />
        )}
      </Field>
      <Field name="birthDate">
        {({ field, meta }) => (
          <TextField
            fullWidth
            type="date"
            label="Birth Date"
            variant="outlined"
            margin="normal"
            InputLabelProps={{
              shrink: true
            }}
            error={meta.touched && Boolean(meta.error)}
            helperText={meta.touched && meta.error}
            {...field}
          />
        )}
      </Field>
      <Field name="newsletter" type="checkbox">
        {({ field, meta }) => (
          <FormGroup>
          {console.log(meta)}
          <FormControlLabel
            control={<Checkbox {...field} />}
            label="I agree to receive email."
          />
          {(meta.touched && meta.error) && <FormHelperText error>{meta.error}</FormHelperText>}
          </FormGroup>
        )}
      </Field>

      <Button variant="outlined" fullWidth onClick={handlePreviousButtonClick} type="button">
        Previous
      </Button>
      <Button fullWidth variant="outlined" type="submit">
        Submit
      </Button>
    </div>
  );
};

export default Third;
