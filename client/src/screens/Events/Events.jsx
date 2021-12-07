import React, { useState, useCallback, memo, createContext } from 'react';
import { Container, Button, Grow } from '@material-ui/core';

import { Events } from './components';
import { Modal, Form } from '../../components';

export const SomeContext = createContext();

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
          <SomeContext.Provider value={{ contextValue: 'Some shared value' }}>
            <Modal isOpen={modalOpen} handleModalClose={handleModalClose}>
              <Form handleModalClose={handleModalClose} createForm />
            </Modal>
            <Button variant="contained" color="primary" onClick={handleButtonClick}>
              Add Event
            </Button>
            <Events />
          </SomeContext.Provider>
        </Container>
      </Grow>
    </Container>
  );
};

export default memo(Home);
