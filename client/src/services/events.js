import api from '../api';

export const getEvents = () => api.get('/events');

export const createEvent = (eventData) => api.post('/events', eventData);

export const deleteEvent = (eventId) => api.delete(`/events/${eventId}`);

export const updateEvent = (eventId, eventData) => api.put(`/events/${eventId}`, eventData);
