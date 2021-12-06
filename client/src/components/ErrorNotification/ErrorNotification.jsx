import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

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
      <div className="fancy-error-class">
        <button onClick={handleClose}>Close Error</button>
        <span>{error}</span>
      </div>
    </Modal>
  );
};

export default ErrorNotification;
