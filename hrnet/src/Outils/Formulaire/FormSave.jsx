import * as material from '@mui/material';
import React from 'react';

/**
 * Composant de formulaire pour enregistrer un employé.
 * @param {Object} props - Propriétés du composant.
 * @param {Function} props.saveEmployee - Fonction de rappel pour enregistrer l'employé.
 * @returns {JSX.Element} - Composant rendu.
 */
function FormSave({ saveEmployee }) {
  const handleSave = () => {
    console.log('Tentative d\'enregistrement de l\'employé...');
    saveEmployee();
  };

  return (
    <material.Box sx={{ mt: 2, textAlign: 'center' }}>
      <material.Button
        variant="contained"
        color="primary"
        onClick={handleSave}
        aria-label="Enregistrer l'employé"
      >
        Enregistrer
      </material.Button>
    </material.Box>
  );
}

export default FormSave;

