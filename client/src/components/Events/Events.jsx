import { memo, useCallback, useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { Grid } from '@material-ui/core';
import { getEvents as getEventsAction } from '../../store/events/actions';

import Event from './Event/Event';
import { getEventsWithValidDate } from '../../store/events/reducer';

const Events = () => {
  const { data: eventsList, isLoading, error } = useSelector(getEventsWithValidDate, shallowEqual);
  const getEvents = useCallback(() => getEventsAction());
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvents());
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  } else if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <h1>Events</h1>
        <Grid container spacing={4}>
          {eventsList?.map((eventProps) => (
            <Event key={eventProps?._id} {...eventProps} />
          ))}
        </Grid>
      </>
    );
  }
};

export default memo(Events);
