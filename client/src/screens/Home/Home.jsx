import React, { useState, useCallback } from 'react';
import { Container, Button } from '@material-ui/core';

import { Events, Form, Modal } from '../../components';

const Home = () => {
  const [updateEvents, setUpdateEvents] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleButtonClick = useCallback(() => {
    setModalOpen((prevState) => !prevState);
  });

  const handleModalClose = useCallback(() => setModalOpen(false));

  return (
    <Container maxWidth="sm">
      <Modal isOpen={modalOpen} handleModalClose={handleModalClose}>
        <Form setUpdateEvents={setUpdateEvents} handleModalClose={handleModalClose} />
      </Modal>
      <Button variant="contained" color="primary" onClick={handleButtonClick}>
        Add Event
      </Button>
      <Events updateEvents={updateEvents} setUpdateEvents={setUpdateEvents} />
    </Container>
  );
};

export default Home;
