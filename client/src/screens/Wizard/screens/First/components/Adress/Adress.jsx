/* eslint-disable */
import { Field } from 'formik';
import { TextField } from '@material-ui/core';

const Adress = ({ index }) => {
  return (
    <div key={index}>
      <Field fullWidth name={`adresses[${index}].city`} label="City">
        {({ field, meta }) => (
          <TextField
            fullWidth
            label="City"
            variant="outlined"
            error={meta.touched && Boolean(meta.error)}
            helperText={meta.touched && meta.error}
            {...field}
          />
        )}
      </Field>
      <Field fullWidth name={`adresses[${index}].zipCode`} label="Zip Code">
      {({ field, meta}) => (
          <TextField
            fullWidth
            label="Zip Code"
            variant="outlined"
            error={meta.touched && Boolean(meta.error)}
            helperText={meta.touched && meta.error}
            {...field}
          />
        )}
      </Field>
      <Field fullWidth name={`adresses[${index}].street`} label="Street">
      {({ field, meta }) => (
          <TextField
            fullWidth
            label="Street"
            variant="outlined"
            error={meta.touched && Boolean(meta.error)}
            helperText={meta.touched && meta.error}
            {...field}
          />
        )}
      </Field>
    </div>
  );
};

export default Adress;
