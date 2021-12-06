import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getEventById } from '../../store/events/actions';
import Form from '../../components/Form';
import { getEventsWithValidDate } from '../../store/events/reducer';

const EditEvent = () => {
  const { eventId } = useParams();
  const dispatch = useDispatch();
  const { data: eventsList, isLoading, error } = useSelector(getEventsWithValidDate, shallowEqual);

  useEffect(() => {
    dispatch(getEventById(eventId));
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  } else if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return <Form initialValues={eventsList[0]} eventId={eventsList[0]._id} />;
  }
};

export default EditEvent;
