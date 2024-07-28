import React, { ReactNode } from 'react';
import './Modal.css';
/**
 * Composant de fenêtre modale.
 * @param {Object} props - Propriétés du composant.
 * @param {boolean} props.isOpen - Indique si la modal est ouverte.
 * @param {Function} props.onClose - Fonction de rappel pour fermer la modal.
 * @param {ReactNode} props.children - Éléments enfants à afficher dans la modal.
 * @returns {JSX.Element|null} - Composant rendu ou null si la modal n'est pas ouverte.
 */
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}
declare const Modal: React.FC<ModalProps>;
export default Modal;
