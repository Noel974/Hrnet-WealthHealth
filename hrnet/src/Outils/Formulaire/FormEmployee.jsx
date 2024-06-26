import React from 'react';
import { TextField, Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import departments from '../../assets/data/Departement.json';

function FormEmployee({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  dateOfBirth,
  setDateOfBirth,
  startDate,
  setStartDate,
  selectedDepartment,
  handleDepartmentChange
}) {
  return (
    <Grid container spacing={2} role="form">
      <Grid item xs={12} sm={6}>
        <TextField
          id="first-name"
          label="First Name"
          variant="outlined"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          fullWidth
          aria-label="First Name"
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
          aria-label="Last Name"
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
          aria-label="Date of Birth"
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
          aria-label="Start Date"
        />
      </Grid>
      <Grid item xs={12}>
        <FormControl variant="outlined" fullWidth>
          <InputLabel id="department-label">Department</InputLabel>
          <Select
            labelId="department-label"
            id="department"
            value={selectedDepartment}
            onChange={handleDepartmentChange}
            label="Department"
            aria-label="Select Department"
          >
            <MenuItem value="" disabled aria-disabled="true">
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
  );
}

export default FormEmployee;
