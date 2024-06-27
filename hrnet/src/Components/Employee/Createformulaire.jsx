import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Typography, Box, Card, CardContent, Grid } from '@mui/material';
import { ajoutsEmployee } from '../../Redux/Action/Ajout';
import { useDispatch } from 'react-redux';
import FormEmployee from '../../Outils/Formulaire/FormEmployee';
import FormAddress from '../../Outils/Formulaire/FormAddress';
import FormActions from '../../Outils/Formulaire/FormSave';

function CreateFormulaire() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [startDate, setStartDate] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [zipCode, setZipCode] = useState('');

  const dispatch = useDispatch();

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
  };

  const saveEmployee = () => {
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
    console.log('Employee saved');
  };

  return (
    <main className='main'>
      <Container component="main" maxWidth="md">
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography component="h1" variant="h4" gutterBottom>
            Hrnet
          </Typography>
          <Box mb={2}>
            <NavLink to="/list-Employee" className="nav-link" aria-label="View Current Employees">
              View Current Employees
            </NavLink>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Card className="form-card">
                <CardContent>
                  <Typography component="h2" variant="h5" gutterBottom>
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
            </Grid>
            <Grid item xs={12}>
              <Card className="form-card">
                <CardContent>
                  <Typography variant="h6">Address</Typography>
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
          <FormActions saveEmployee={saveEmployee} />
        </Box>
      </Container>
    </main>
  );
}

export default CreateFormulaire;
