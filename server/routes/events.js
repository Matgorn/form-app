const { Router } = require('express');

const { getEvents, createEvent, deleteEvent, getEventById, updateEvent } = require('../controllers/events.js');

const router = Router();

router.get('/', async (req, res) => {
  try {
    const events = await getEvents();

    res.status(200).json(events);
  } catch (err) {
    res.status(404).json({ message: err.message });
  };
});

router.get('/:eventId', async (req, res) => {
  try {
    const event = await getEventById(req.params.eventId);

    res.status(200).json(event);
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
});

router.delete('/:eventId', async (req, res) => {
  try {
    await deleteEvent(req.params.eventId);

    res.status(201).json({ message: `Event ${req.params.eventId} successfully deleted`})
  } catch(errors) {
    res.status(409).json({ errors })
  }
});

router.put('/:eventId', async (req, res) => {
  try {
    const updatedEvent = await updateEvent(req.params.eventId, req.body)

    res.status(201).json(updatedEvent)
  } catch (errors) {
    res.status(409).json({ errors })
  }
})

router.post('/', async (req, res) => {
  const event = req.body;

  try {
    const newEvent = await createEvent(event)

    res.status(201).json(newEvent);
  } catch (errors) {    
    res.status(409).json({ errors });
  };
});

module.exports = router;
