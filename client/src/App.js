import React, { memo } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './screens/Home';
import EditEvent from './screens/EditEvent/EditEvent';

import { ErrorNotification } from './components';

const App = () => {
  return (
    <div className="app">
      <ErrorNotification />
      <Routes>
        <Route path="/" element={<Navigate to="/events" />} />
        <Route path="/events" element={<Home />} />
        <Route path="/events/edit/:eventId" element={<EditEvent />} />
      </Routes>
    </div>
  );
};

export default memo(App);
