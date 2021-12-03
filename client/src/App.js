import React, { useState, useCallback, memo } from 'react';
import { Container, Grow, Button } from '@material-ui/core';

import { Events, Form, Modal } from './components';
import { onSubmit } from './utils';

const App = () => {
  const [updateEvents, setUpdateEvents] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleButtonClick = useCallback(() => {
    setModalOpen((prevState) => !prevState);
  });

  const handleModalClose = useCallback(() => setModalOpen(false));

  return (
    <Container maxWidth="lg">
      <Grow in>
        <Container maxWidth="sm">
          <Modal isOpen={modalOpen} handleModalClose={handleModalClose}>
            <Form
              setUpdateEvents={setUpdateEvents}
              onSubmit={onSubmit}
              handleModalClose={handleModalClose}
            />
          </Modal>
          <Button variant="contained" color="primary" onClick={handleButtonClick}>
            Add Event
          </Button>
          <Events updateEvents={updateEvents} setUpdateEvents={setUpdateEvents} />
        </Container>
      </Grow>
    </Container>
  );
};

export default memo(App);
