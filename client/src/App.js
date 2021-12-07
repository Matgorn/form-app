import React, { memo } from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';

import { Events, EventEdit, Wizard } from './screens';
import { First, Second, Third } from './screens/Wizard/screens';

import { ErrorNotification } from './components';

import './app.sass';
import { Tab } from '@mui/material';

const App = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="app">
      <Box sx={{ width: '100%', marginBottom: '2em' }}>
        <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
          <Tab LinkComponent={Link} to="/events" label="Events" />
          <Tab LinkComponent={Link} to="/wizard" label="Wizard" />
        </Tabs>
      </Box>
      <ErrorNotification />
      <Routes>
        <Route path="/" element={<Navigate to="/events" />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/edit/:eventId" element={<EventEdit />} />
        <Route path="wizard" element={<Wizard />}>
          <Route path="first" element={<First />} />
          <Route path="second" element={<Second />} />
          <Route path="third" element={<Third />} />
        </Route>
      </Routes>
    </div>
  );
};

export default memo(App);
