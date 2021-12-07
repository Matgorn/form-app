import { TextField } from '@material-ui/core';
import { Button } from '@mui/material';
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
      <Field fullWidth name="thirdQuestion" label="Third Question" variant="outlined">
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
