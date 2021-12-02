const { Router } = require('express');

const { getEvents, createEvent, deleteEvent } = require('../controllers/events.js');

const router = Router();

router.get('/', async (req, res) => {
  try {
    const events = await getEvents();

    res.status(200).json(events);
  } catch (err) {
    res.status(404).json({ message: error.message });
  };
});

router.delete('/:eventId', async (req, res) => {
  try {
    await deleteEvent(req.params.eventId);

    res.status(201).json({ message: `Event ${req.params.eventId} successfully deleted`})
  } catch(errors) {
    res.status(409).json({ errors })
  }
});

router.post('/', async (req, res) => {
  const event = req.body;

  try {
    const { newEvent } = await createEvent(event)

    res.status(201).json(newEvent);
  } catch (errors) {    
    res.status(409).json({ errors });
  };
});

module.exports = router;
