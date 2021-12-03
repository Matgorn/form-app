import { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';

import './style.sass';

const Modal = ({ children, handleModalClose, isOpen }) => {
  const portalRoot = document.createElement('div');
  const root = document.getElementById('root');
  portalRoot.setAttribute('id', 'portal-root');

  const preventModalClose = useCallback((e) => e.stopPropagation());

  useEffect(() => {
    document.body.insertBefore(portalRoot, root.nextSibling);

    return () => document.body.removeChild(portalRoot);
  }, [portalRoot, children]);

  const modalContainer = isOpen && (
    <div onClick={handleModalClose} className="modal-backdrop">
      <div onClick={preventModalClose} className="modal-container">
        {children}
      </div>
    </div>
  );

  return createPortal(modalContainer, portalRoot);
};

export default Modal;
