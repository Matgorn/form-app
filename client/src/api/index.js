import axios from 'axios';

const url = 'http://localhost:8000/events';

export const createEvent = (newEvent) => axios.post(url, newEvent);
export const fetchEvents = () => axios.get(url);
