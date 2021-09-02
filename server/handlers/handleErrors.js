module.exports = (err) => {
  const errors = {
    firstName: '',
    lastName: '',
    eMail: '',
    eventDate: ''
  };

  if (err.message.includes('Event validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  };

  return errors;
};
