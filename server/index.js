const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const eventRoutes = require('./routes/events.js')

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.use('/events', eventRoutes);

mongoose.connect(process.env.EVENTS_DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`)))
  .catch((err) => console.log(err.message));
