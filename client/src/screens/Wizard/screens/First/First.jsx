import { TextField } from '@material-ui/core';
import { Button } from '@mui/material';
import { Field, FieldArray } from 'formik';
import { useCallback } from 'react';
import { useNavigate } from 'react-router';

import Adress from './components/Adress';

const First = () => {
  const navigate = useNavigate();

  const handleNextButtonClick = useCallback(() => {
    navigate('/wizard/second');
  });

  return (
    <div>
      <Field fullWidth name="firstQuestion" label="First Question" variant="outlined">
        {({ field, meta }) => (
          <TextField
            fullWidth
            label="First Question"
            variant="outlined"
            error={meta.touched && Boolean(meta.error)}
            helperText={meta.touched && meta.error}
            {...field}
          />
        )}
      </Field>
      <FieldArray
        name="adresses"
        render={(arrayHelpers) => (
          <div>
            {arrayHelpers.form.values.adresses.map((_, index) => (
              <div key={index}>
                {' '}
                <Adress index={index} />
                <Button type="button" onClick={() => arrayHelpers.remove(index)}>
                  -
                </Button>
                <Button type="button" onClick={() => arrayHelpers.insert(index, '')}>
                  +
                </Button>
              </div>
            ))}
          </div>
        )}
      />
      <Button variant="outlined" fullWidth onClick={handleNextButtonClick} type="button">
        Next
      </Button>
    </div>
  );
};

export default First;
