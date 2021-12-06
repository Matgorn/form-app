import React, { useCallback } from 'react';
import { Card, CardContent, Typography, Grid, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { deleteEvent } from '../../../store/events/actions';

const Post = ({ firstName, lastName, eMail, eventDate, _id }) => {
  const dispatch = useDispatch();

  const handleButtonClick = useCallback(() => {
    dispatch(deleteEvent(_id));
  });

  return (
    <Grid item xs={6}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            {firstName} {lastName}
          </Typography>
          <Typography color="textSecondary">{eMail}</Typography>
          <Typography variant="body2" component="p">
            {eventDate}
          </Typography>
          <Button onClick={handleButtonClick} variant="outlined">
            Delete
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Post;
