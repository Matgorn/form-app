import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Button } from '@material-ui/core';

import { Modal } from '..';

const ErrorNotification = () => {
  const { isOpen, error } = useSelector((state) => state.error);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleClose() {
    dispatch({ type: 'HIDE_ERROR' });
  }

  useEffect(() => {
    if (error) {
      navigate('/');
    }
  }, [error]);

  return (
    <Modal handleModalClose={handleClose} isOpen={isOpen}>
      <Container className="fancy-error-class">
        <h3>{error}</h3>
        <Button variant="outlined" onClick={handleClose}>
          Close Error
        </Button>
      </Container>
    </Modal>
  );
};

export default ErrorNotification;
