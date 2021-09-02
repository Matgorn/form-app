const { Router } = require('express');

const { getEvents, createEvent } = require('../controllers/events.js');

const router = Router();

router.get('/', async (req, res) => {
  try {
    const events = await getEvents();

    res.status(200).json(events);
  } catch (err) {
    res.status(404).json({ message: error.message });
  };
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
