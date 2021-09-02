import React, { useEffect, useState } from 'react';

import Event from './Event/Event';
import { fetchEvents } from './utils';
import { Grid } from '@material-ui/core';

const Events = ({ setUpdateEvents, updateEvents }) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents({ setIsLoaded, setEvents, setError });
    setUpdateEvents(false);
  }, [updateEvents, setUpdateEvents])

  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <>
        <h1>Events</h1>
        <Grid container spacing={4}>
          {events.map((eventProps, idx) => (
            <Event key={idx} {...eventProps}  />
          ))}
        </Grid>
      </>
    );
  };
};

export default Events;
