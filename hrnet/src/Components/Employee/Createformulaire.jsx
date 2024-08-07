import * as material from '@mui/material';
import { Modal } from 'modaleon';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import FormAddress from '../../Outils/Formulaire/FormAddress';
import FormEmployee from '../../Outils/Formulaire/FormEmployee';
import FormSave from '../../Outils/Formulaire/FormSave';
import { ajoutsEmployee } from '../../Redux/Action/Ajout';

function CreateFormulaire() {
  // Gestion des états pour les champs de formulaire
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [startDate, setStartDate] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [zipCode, setZipCode] = useState('');

  // Gestion de l'état pour la visibilité de la modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Initialisation du dispatcher pour envoyer des actions Redux
  const dispatch = useDispatch();

  // Gestionnaire de changement pour la liste déroulante d'état
  const handleStateChange = (event) => setSelectedState(event.target.value);

  // Gestionnaire de changement pour la liste déroulante de département
  const handleDepartmentChange = (event) => setSelectedDepartment(event.target.value);

  // Fonction de validation de la date
  const isDateValid = () => {
    if (new Date(dateOfBirth) >= new Date(startDate)) {
      window.alert('La date de naissance doit être antérieure à la date de début.');
      return false;
    }
    return true;
  };

  // Gestionnaire pour sauvegarder l'employé
  const saveEmployee = () => {
    // Validation du formulaire
    if (!firstName || !lastName || !dateOfBirth || !startDate || !selectedDepartment || !street || !city || !selectedState || !zipCode) {
      window.alert('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    // Validation de la date
    if (!isDateValid()) {
      return;
    }

    // Création de l'objet employé
    const employee = {
      firstName,
      lastName,
      dateOfBirth,
      startDate,
      department: selectedDepartment,
      street,
      city,
      state: selectedState,
      zipCode,
    };

    // Envoi de l'action Redux pour ajouter l'employé
    dispatch(ajoutsEmployee(employee));
    // Affichage de la modal de confirmation
    setIsModalOpen(true);
  };

  // Réinitialiser les champs du formulaire
  const resetForm = () => {
    setFirstName('');
    setLastName('');
    setDateOfBirth('');
    setStartDate('');
    setSelectedDepartment('');
    setStreet('');
    setCity('');
    setSelectedState('');
    setZipCode('');
  };

  // Fermer la modal et réinitialiser le formulaire
  const handleCloseModal = () => {
    resetForm();
    setIsModalOpen(false);
  };

  return (
    <main className='main'>
      <material.Container maxWidth="md">
        <material.Box sx={{ mt: 4, textAlign: 'center' }}>
          <material.Typography sx={{ fontSize: 45 }} component="h1">
            Hrnet
          </material.Typography>
          <material.Box mb={2}>
            <NavLink to="/list-Employee" className="lien" aria-label="View Current Employees">
              View Current Employees
            </NavLink>
          </material.Box>
          <material.Grid style={{ border: '4px solid #5a7008' }}>
            <material.Grid item xs={12}>
              <material.Card className="form-card">
                <material.CardContent>
                  <material.Typography component="h2" sx={{ fontSize: 25, marginBottom: 5 }}>
                    Create Employee
                  </material.Typography>
                  <form noValidate autoComplete="off">
                    <FormEmployee
                      firstName={firstName}
                      setFirstName={setFirstName}
                      lastName={lastName}
                      setLastName={setLastName}
                      dateOfBirth={dateOfBirth}
                      setDateOfBirth={setDateOfBirth}
                      startDate={startDate}
                      setStartDate={setStartDate}
                      selectedDepartment={selectedDepartment}
                      handleDepartmentChange={handleDepartmentChange}
                    />
                  </form>
                </material.CardContent>
              </material.Card>
              <material.Card className="form-card">
                <material.CardContent>
                  <material.Typography variant="h3" sx={{ fontSize: 20, marginBottom: 5 }}>Address</material.Typography>
                  <FormAddress
                    street={street}
                    setStreet={setStreet}
                    city={city}
                    setCity={setCity}
                    selectedState={selectedState}
                    handleStateChange={handleStateChange}
                    zipCode={zipCode}
                    setZipCode={setZipCode}
                  />
                </material.CardContent>
              </material.Card>
            </material.Grid>
          </material.Grid>
          <FormSave saveEmployee={saveEmployee} />
        </material.Box>
      </material.Container>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <material.Card>
          <material.Typography>Employé sauvegardé avec succès!</material.Typography>
        </material.Card>
        <material.Box sx={{justifyContent: 'center' , display:'flex' , margin:'10px'}}>
          <material.Button variant="contained" color="success" onClick={handleCloseModal}>OK</material.Button>
        </material.Box>
      </Modal>
    </main>
  );
}

export default CreateFormulaire;
