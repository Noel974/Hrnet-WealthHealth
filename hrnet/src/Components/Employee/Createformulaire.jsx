import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { TextField, MenuItem, Button, Container, Typography, Box, FormControl, InputLabel, Select, Card, CardContent, Grid } from '@mui/material';

import departments from '../../assets/data/Departement.json'; 
import states from '../../assets/data/Etat.json';

import { ajoutsEmployee } from '../../Redux/Action/Ajout';
import { useDispatch } from 'react-redux';

function Createformulaire() {
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
        <NavLink to="/list-Employee" className="nav-link">       
          View Current Employees
        </NavLink>
        </Box>
        <Grid>
          <Grid item sm={12}>
            <Card className="form-card">
              <CardContent>
                <Typography component="h2" variant="h5" gutterBottom>
                  Create Employee
                </Typography>
                <form noValidate autoComplete="off">
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="first-name"
                        label="First Name"
                        variant="outlined"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="last-name"
                        label="Last Name"
                        variant="outlined"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="date-of-birth"
                        label="Date of Birth"
                        type="date"
                        variant="outlined"
                        value={dateOfBirth}
                        onChange={e => setDateOfBirth(e.target.value)}
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="start-date"
                        label="Start Date"
                        type="date"
                        variant="outlined"
                        value={startDate}
                        onChange={e => setStartDate(e.target.value)}
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl variant="outlined" fullWidth>
                        <InputLabel id="department-label">Department</InputLabel>
                        <Select
                          labelId="department-label"
                          id="department"
                          maxRows={4}
                          value={selectedDepartment}
                          onChange={handleDepartmentChange}
                          label="Department"
                        >
                          <MenuItem value="">
                            <em>Select Department</em>
                          </MenuItem>
                          {departments.map(dept => (
                            <MenuItem key={dept.id} value={dept.name}>
                              {dept.name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={12}>
          <Card className="form-card">
  <CardContent>
    <Typography variant="h6">Address</Typography>
    <Box mb={2}>
      <TextField 
        id="street"
        label="Street"
        variant="outlined"
        value={street}
        onChange={e => setStreet(e.target.value)}
        fullWidth
      />
    </Box>
    <Box mb={2}>
      <TextField
        id="city"
        label="City"
        variant="outlined"
        value={city}
        onChange={e => setCity(e.target.value)}
        fullWidth
      />
    </Box>
    <Box mb={2}>
      <FormControl variant="outlined" fullWidth>
        <InputLabel id="state-label">State</InputLabel>
        <Select
          labelId="state-label"
          id="state"
          value={selectedState}
          onChange={handleStateChange}
          label="State"
        >
          <MenuItem value="">
            <em>Select State</em>
          </MenuItem>
          {states.map(state => (
            <MenuItem key={state.abbreviation} value={state.abbreviation}>
              {state.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
    <TextField
      id="zip-code"
      label="Zip Code"
      type="number"
      variant="outlined"
      value={zipCode}
      onChange={e => setZipCode(e.target.value)}
      fullWidth
    />
  </CardContent>
</Card>

          </Grid>
        </Grid>
        <Box sx={{ mt: 2, textAlign: 'center' }}>
          <Button variant="contained" color="primary" onClick={saveEmployee}>
            Save
          </Button>
        </Box>
      </Box>
    </Container>
    </main>

  );
}

export default Createformulaire;
