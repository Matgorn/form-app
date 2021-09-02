const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Please enter your first name'],
  },
  lastName: {
    type: String,
    required: [true, 'Please enter your last name']
  },
  eMail: {
    type: String,
    required: [true, 'Please enter an email'],
    match: [/.+\@.+\..+/, 'Please enter a valid email'],
  },
  eventDate: {
    type: Date,
    required: [true, 'Please set event date'],
  },
}); 

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
