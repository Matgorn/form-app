import { useCallback, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getEventById } from '../../store/event/actions';
import Form from '../../components/Form';
import { getEventWithValidDate } from '../../store/event/reducer';
import { Button, Container } from '@material-ui/core';

const EditEvent = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data: event, isLoading, error } = useSelector(getEventWithValidDate, shallowEqual);

  const handleGoBackButtonClick = useCallback(() => {
    navigate(-1);
  });

  useEffect(() => {
    dispatch(getEventById(eventId));
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  } else if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <Container maxWidth="sm">
        <Form initialValues={event} eventId={event._id} />
        <Button variant="outlined" onClick={handleGoBackButtonClick}>
          Go Back
        </Button>
      </Container>
    );
  }
};

export default EditEvent;
