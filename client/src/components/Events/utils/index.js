import moment from 'moment';
import * as api from '../../../api';

export const getEvents = async (apiCall) => {
  try {
    const { data } = await apiCall();
    console.log(data)

    if (data) {
      return data;
    }
  } catch (err) {
    return { error: err };
  };
};

export const fetchEvents = async ({ setIsLoaded, setEvents, setError }) => {
  const fetchedEvents = await getEvents(api.fetchEvents);

  if (fetchedEvents.error) {
    setIsLoaded(true);
    setError(fetchedEvents.error)
  }

  if (fetchedEvents) {
    const result = fetchedEvents.map(event => ({
      ...event,
      eventDate: moment(event.eventDate).format('YYYY-MM-DD')
    }));

    setIsLoaded(true);
    setEvents(result)
  };
};
