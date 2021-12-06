import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getEventById } from '../../store/event/actions';
import Form from '../../components/Form';
import { getEventWithValidDate } from '../../store/event/reducer';

const EditEvent = () => {
  const { eventId } = useParams();
  const dispatch = useDispatch();
  const { data: event, isLoading, error } = useSelector(getEventWithValidDate, shallowEqual);

  useEffect(() => {
    dispatch(getEventById(eventId));
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  } else if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return <Form initialValues={event} eventId={event._id} />;
  }
};

export default EditEvent;
