import React, { useState } from 'react';
import { Container, Grow } from '@material-ui/core';

import Events from './components/Events/Events';
import Form from './components/Form/Form';
import { onSubmit } from './utils';

const App = () => {
  const [updateEvents, setUpdateEvents] = useState(false);

  return (
    <Container maxWidth="lg">
      <Grow in>
        <Container maxWidth='sm'>
          <Form setUpdateEvents={setUpdateEvents} onSubmit={onSubmit} />
          <Events updateEvents={updateEvents} setUpdateEvents={setUpdateEvents} />
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
