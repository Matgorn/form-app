import React, { useCallback, memo, useContext } from 'react';
import { Card, CardContent, Typography, Grid, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { deleteEvent } from '../../../../../store/events/actions';

import { SomeContext } from '../../../Events';

const Post = ({ firstName, lastName, eMail, eventDate, _id }) => {
  const { contextValue } = useContext(SomeContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteButtonClick = useCallback(() => {
    dispatch(deleteEvent(_id));
  });

  const handleEditButtonClick = useCallback(() => {
    navigate(`/events/edit/${_id}`);
  });

  return (
    <Grid item xs={6}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            {contextValue}
          </Typography>
          <Typography variant="h5" component="h2">
            {firstName} {lastName}
          </Typography>
          <Typography color="textSecondary">{eMail}</Typography>
          <Typography variant="body2" component="p">
            {eventDate}
          </Typography>
          <Button onClick={handleDeleteButtonClick} variant="outlined">
            Delete
          </Button>
          <Button onClick={handleEditButtonClick} variant="outlined">
            Edit
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default memo(Post);
