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

module.exports.getEvents = async () => {
  try {
    const events = await Event.find();

    return events
  } catch (err) {
    throw err
  }
}