import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

const Post = ({ firstName, lastName, eMail, eventDate }) => (
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
      </CardContent>
    </Card>
  </Grid>
);

export default Post;
