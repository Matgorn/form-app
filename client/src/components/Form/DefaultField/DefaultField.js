import React from 'react';
import { TextField } from '@material-ui/core';
import { Field } from 'react-final-form';

const DefaultField = ({ name, validate, label, type = 'text' }) => {
  return (
    <Field name={name} validate={validate}>
      {({ input, meta }) => (
        <div>
          <TextField 
            {...input} 
            fullWidth
            id="outlined-basic" 
            label={label} 
            variant="outlined" 
            type={type}
            style={{ margin: '10px 0'}}
            error={(meta.error || meta.submitError) && meta.touched}
            helperText={(meta.error || meta.submitError) && meta.touched && (meta.error || meta.submitError)}
          />
        </div>
      )}
    </Field>
  )
};

export default DefaultField;
