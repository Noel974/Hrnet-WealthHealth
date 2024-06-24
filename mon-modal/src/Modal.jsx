import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Modal Title</DialogTitle>
      <DialogContent>
        {children}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
