const Event = require('../models/event.js');
const handleErrors = require('../handlers/handleErrors.js')

module.exports.createEvent = async (event) => {
  const newEvent = new Event(event);

  try {
    await newEvent.save();

    return newEvent;
  } catch(err) {
    const errors = handleErrors(err);

    throw errors;
  }
};

module.exports.deleteEvent = async (eventId) => {
  try {
    return Event.findByIdAndDelete(eventId);
  } catch(err) {
    throw err
  }
};

module.exports.getEventById = async (eventId) => {
  try {
    const event = await Event.findById(eventId);

    return event;
  } catch (err) {
    throw err
  }
}

module.exports.updateEvent = async (eventId, eventData) => {
  try {
    await Event.findByIdAndUpdate(eventId, eventData);
    const updatedEvent = Event.findById(eventId)

    return updatedEvent;
  } catch (err) {
    throw err;
  }
}

module.exports.getEvents = async () => {
  try {
    const events = await Event.find();

    return events
  } catch (err) {
    throw err
  }
}