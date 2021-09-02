const handleErrors = require('./handleErrors.js');

describe('Handles errors correctly', () => {
  it('Returns empty values if no errors', () => {
    const errors = handleErrors({ message: '' });

    expect(errors).toHaveProperty('firstName', '');
    expect(errors).toHaveProperty('lastName', '');
    expect(errors).toHaveProperty('eMail', '');
    expect(errors).toHaveProperty('eventDate', '');
  });

  it('Returns correct values if error occured', () => {
    const errors = handleErrors({ message: 'Event validation failed', errors: {
      lastName: {
        properties: {
          path: 'lastName',
          message: 'test lastName error message'
        }
      }
    }});

    expect(errors).toHaveProperty('firstName', '');
    expect(errors).toHaveProperty('lastName', 'test lastName error message');
    expect(errors).toHaveProperty('eMail', '');
    expect(errors).toHaveProperty('eventDate', '');
  });

  it('Returns correct values if error occured with mutliple fields', () => {
    const errors = handleErrors({ message: 'Event validation failed', errors: {
      lastName: {
        properties: {
          path: 'lastName',
          message: 'test lastName error message'
        }
      },
      firstname: {
        properties: {
          path: 'firstName',
          message: 'test firstName error message'
        }
      },
      eventDate: {
        properties: {
          path: 'eventDate',
          message: 'test eventDate error message'
        }
      }
    }});

    expect(errors).toHaveProperty('firstName', 'test firstName error message');
    expect(errors).toHaveProperty('lastName', 'test lastName error message');
    expect(errors).toHaveProperty('eMail', '');
    expect(errors).toHaveProperty('eventDate', 'test eventDate error message');
  });
});