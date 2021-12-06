import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getEventById } from '../../store/events/actions';
import Form from '../../components/Form';

const EditEvent = () => {
  const { eventId } = useParams();
  const dispatch = useDispatch();
  const { data: events, isLoading, error } = useSelector((state) => state?.events, shallowEqual);

  useEffect(() => {
    dispatch(getEventById(eventId));
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  } else if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return <Form initialValues={events[0]} eventId={events[0]._id} />;
  }
};

export default EditEvent;
