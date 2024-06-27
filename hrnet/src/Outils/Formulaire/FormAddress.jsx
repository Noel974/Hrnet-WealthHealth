import React from 'react';
import { TextField, Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import states from '../../assets/data/Etat.json';

function FormAddress({ street, setStreet, city, setCity, selectedState, handleStateChange, zipCode, setZipCode }) {
  return (
    <Grid container spacing={2} role="form">
      <Grid item xs={12} sm={6}>
        <TextField
          id="street"
          label="Street"
          variant="outlined"
          value={street}
          onChange={e => setStreet(e.target.value)}
          fullWidth
          aria-label="Street"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="city"
          label="City"
          variant="outlined"
          value={city}
          onChange={e => setCity(e.target.value)}
          fullWidth
          aria-label="City"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl variant="outlined" fullWidth>
          <InputLabel id="state-label">State</InputLabel>
          <Select
            labelId="state-label"
            id="state"
            value={selectedState}
            onChange={handleStateChange}
            label="State"
            aria-label="Select State"
          >
            <MenuItem value="" disabled aria-disabled="true">
              <em>Select State</em>
            </MenuItem>
            {states.map(state => (
              <MenuItem key={state.abbreviation} value={state.abbreviation}>
                {state.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="zip-code"
          label="Zip Code"
          type="number"
          variant="outlined"
          value={zipCode}
          onChange={e => setZipCode(e.target.value)}
          fullWidth
          aria-label="Zip Code"
        />
      </Grid>
    </Grid>
  );
}

export default FormAddress;
