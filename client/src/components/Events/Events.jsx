import { memo, useCallback, useEffect, useState } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { Grid } from '@material-ui/core';

import { getEvents as getEventsAction } from '../../store/events/actions';

import Event from './Event/Event';

const Events = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { events, error } = useSelector((state) => state, shallowEqual);
  const getEvents = useCallback(() => getEventsAction());
  const dispatch = useDispatch();
  console.log('render events', isLoading);
  useEffect(async () => {
    await dispatch(getEvents());

    if (isLoading) {
      setIsLoading(false);
    }
  }, []);

  if (error?.error) {
    return <div>Error: {error?.error}</div>;
  } else if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <h1>Events</h1>
        <Grid container spacing={4}>
          {events?.map((eventProps, idx) => (
            <Event key={idx} {...eventProps} />
          ))}
        </Grid>
      </>
    );
  }
};

export default memo(Events);
