import { Field } from 'formik';
import { Button } from '@mui/material';
import { useCallback } from 'react';
import { useNavigate } from 'react-router';
import { TextField } from '@material-ui/core';

const Second = () => {
  const navigate = useNavigate();

  const handleNextButtonClick = useCallback(() => {
    navigate('/wizard/third');
  });

  const handlePreviousButtonClick = useCallback(() => {
    navigate('/wizard/first');
  });

  return (
    <div>
      <Field fullWidth name="secondQuestion" label="Second Question" variant="outlined">
        {({ field, meta }) => (
          <TextField
            fullWidth
            label="Second Question"
            variant="outlined"
            error={meta.touched && Boolean(meta.error)}
            helperText={meta.touched && meta.error}
            {...field}
          />
        )}
      </Field>
      <Button variant="outlined" fullWidth onClick={handlePreviousButtonClick} type="button">
        Previous
      </Button>
      <Button variant="outlined" fullWidth onClick={handleNextButtonClick} type="button">
        Next
      </Button>
    </div>
  );
};

export default Second;
