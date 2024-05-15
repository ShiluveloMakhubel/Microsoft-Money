import React from 'react';

const DeleteAccountModal = ({ onClose, onDelete }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <p>Are you sure you want to delete this account?</p>
        <button onClick={onDelete}>Delete</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default DeleteAccountModal;
