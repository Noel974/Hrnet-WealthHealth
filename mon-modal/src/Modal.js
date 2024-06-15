import React from 'react';

const Modal = ({ visible, onClose }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="modal-close" onClick={onClose}>
          &times;
        </span>
        <h2>Employee Created</h2>
      </div>
    </div>
  );
};

export default Modal;
