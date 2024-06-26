import React, { ReactNode } from 'react';
import './Modal.css';
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}
declare const Modal: React.FC<ModalProps>;
export default Modal;
