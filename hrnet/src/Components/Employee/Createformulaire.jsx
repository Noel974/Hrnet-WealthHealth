import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Typography, Box, Card, CardContent, Grid, Button } from '@mui/material';
import { ajoutsEmployee } from '../../Redux/Action/Ajout';
import { useDispatch } from 'react-redux';
import FormEmployee from '../../Outils/Formulaire/FormEmployee';
import FormAddress from '../../Outils/Formulaire/FormAddress';
import FormSave from '../../Outils/Formulaire/FormSave';
import { Modal } from 'modaleon';

function CreateFormulaire() {
  // State management for form fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [startDate, setStartDate] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [zipCode, setZipCode] = useState('');

  // State management for modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  // Handlers for dropdown changes
  const handleStateChange = (event) => setSelectedState(event.target.value);
  const handleDepartmentChange = (event) => setSelectedDepartment(event.target.value);

  // Date validation function
  const isDateValid = () => {
    if (new Date(dateOfBirth) >= new Date(startDate)) {
      window.alert('La date de naissance doit être antérieure à la date de début.');
      return false;
    }
    return true;
  };

  // Save employee handler
  const saveEmployee = () => {
    // Form validation
    if (!firstName || !lastName || !dateOfBirth || !startDate || !selectedDepartment || !street || !city || !selectedState || !zipCode) {
      window.alert('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    // Date validation
    if (!isDateValid()) {
      return;
    }

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

    dispatch(ajoutsEmployee(employee));
    setIsModalOpen(true);
  };

  // Reset form fields
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

  // Close modal and reset form
  const handleCloseModal = () => {
    resetForm();
    setIsModalOpen(false);
  };

  return (
    <main className='main'>
      <Container maxWidth="md">
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography sx={{ fontSize: 45 }} component="h1">
            Hrnet
          </Typography>
          <Box mb={2}>
            <NavLink to="/list-Employee" className="lien" aria-label="View Current Employees">
              View Current Employees
            </NavLink>
          </Box>
          <Grid style={{ border: '4px solid #5a7008' }}>
            <Grid item xs={12}>
              <Card className="form-card">
                <CardContent>
                  <Typography component="h2" sx={{ fontSize: 25, marginBottom: 5 }}>
                    Create Employee
                  </Typography>
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
                </CardContent>
              </Card>
              <Card className="form-card">
                <CardContent>
                  <Typography variant="h3" sx={{ fontSize: 20, marginBottom: 5 }}>Address</Typography>
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
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <FormSave saveEmployee={saveEmployee} />
        </Box>
      </Container>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <Typography>Employé sauvegardé avec succès!</Typography>
        <Button variant="contained" color="success" onClick={handleCloseModal}>OK</Button>
      </Modal>
    </main>
  );
}

export default CreateFormulaire;
