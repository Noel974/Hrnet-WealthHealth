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

// Interface pour les propriétés d'un composant Modal dans React
interface ModalProps {
  // Détermine si le modal est affiché ou non
  isOpen: boolean;

  // Fonction appelée pour fermer le modal
  onClose: () => void;

  // Contenu à afficher dans le modal
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // Si la modal n'est pas ouverte, ne rend rien

  return (
    <div className="modal-overlay">
      <div className="modal-content">
      <button className="modal-close" onClick={onClose}>
          × {/* Bouton de fermeture avec un "X" */}
        </button>
        <div className='body'>
          {children} {/* Affiche le contenu spécifié par les enfants */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
