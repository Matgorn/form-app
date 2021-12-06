import React, { useState, useCallback } from 'react';
import { Container, Button, Grow } from '@material-ui/core';

import { Events, Form, Modal } from '../../components';

const Home = () => {
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
            <Form handleModalClose={handleModalClose} />
          </Modal>
          <Button variant="contained" color="primary" onClick={handleButtonClick}>
            Add Event
          </Button>
          <Events />
        </Container>
      </Grow>
    </Container>
  );
};

export default Home;
