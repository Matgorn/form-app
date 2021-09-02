const dbHandler = require('../tests/db.js');
const Event = require('../models/event.js');
const { getEvents, createEvent } = require('./events.js');

beforeAll(async () => {
    await dbHandler.connect()
});

afterEach(async () => {
    await dbHandler.clearDatabase()
});

afterAll(async () => {
    await dbHandler.closeDatabase()
});

const mockedRouteHandler = async (eventData) => {
  let testEvent
  let errors

  try {
    testEvent = await createEvent(eventData);
  } catch (err) {
    errors = err
  }

  return {
    testEvent,
    errors
  };
}

describe('Controller functions working correctly', () => {
  it ('Has a module', async () => {
    expect(createEvent).toBeDefined();
  });

  it ('Successfully adds new valid Event', async() => {
    const { testEvent, errors } = await mockedRouteHandler({
      firstName: 'testName',
      lastName: 'testLastName',
      eMail: 'testEmail@email.com',
      eventDate: '2000-01-01'
    });

    const event = await Event.findById(testEvent._id);

    expect(event).toHaveProperty('firstName', 'testName');
    expect(event).toHaveProperty('lastName', 'testLastName');
    expect(event).toHaveProperty('eMail', 'testEmail@email.com');
    expect(event).toHaveProperty('eventDate');
    expect(event).toHaveProperty('_id');
    expect(errors).toBe(undefined);
  });

  it('Fails if some value isn\' provided', async () => {
    const { testEvent, errors } = await mockedRouteHandler({
      firstName: '',
      lastName: 'testLastName',
      eMail: 'testEmail@email.com',
      eventDate: '2000-01-01'
    });

    expect(testEvent).toBe(undefined);
    expect(errors).toHaveProperty('firstName', 'Please enter your first name');
    expect(errors).toHaveProperty('lastName', '');
    expect(errors).toHaveProperty('eMail', '');
    expect(errors).toHaveProperty('eventDate', '');
    
  });

  it('Returns correct error messages for not provided values', async () => {
    const { testEvent, errors } = await mockedRouteHandler({
      firstName: '',
      lastName: '',
      eMail: '',
      eventDate: ''
    });

    expect(testEvent).toBe(undefined);
    expect(errors).toHaveProperty('firstName', 'Please enter your first name');
    expect(errors).toHaveProperty('lastName', 'Please enter your last name');
    expect(errors).toHaveProperty('eMail', 'Please enter an email');
    expect(errors).toHaveProperty('eventDate', 'Please set event date');
  });

  it('Returns correct error messages for not valid email', async () => {
    const { errors } = await mockedRouteHandler({
      eMail: 'testNotValidEmail',
    });

    expect(errors).toHaveProperty('eMail', 'Please enter a valid email');
  });

  it('Gets correct list of events', async () => {
    const event1 = new Event({
      firstName: 'testName',
      lastName: 'testLastName',
      eMail: 'testEmail@email.com',
      eventDate: '2000-01-01'
    });

    await event1.save();

    const event2 = new Event({
      firstName: 'testName2',
      lastName: 'testLastName2',
      eMail: 'testEmail2@email.com',
      eventDate: '2000-01-02'
    });

    await event2.save();

    const events = await getEvents();

    expect(events).toHaveLength(2);
    expect(events).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ firstName: 'testName' }),
        expect.objectContaining({ firstName: 'testName2' })
      ])
    )

  });

  it('Gets empty array if no records in database', async () => {
    const events = await getEvents();

    expect(events).toStrictEqual([])
  });
});