import * as material from '@mui/material';
import React from 'react';
import states from '../../assets/data/Etat.json';

function FormAddress({ street, setStreet, city, setCity, selectedState, handleStateChange, zipCode, setZipCode }) {
  return (
    <material.Grid container spacing={2} role="form">
      <material.Grid item xs={12} sm={6}>
        <material.TextField
          id="street"
          label="Street"
          variant="outlined"
          value={street}
          onChange={e => setStreet(e.target.value)}
          fullWidth
          aria-label="Street"
        />
      </material.Grid>
      <material.Grid item xs={12} sm={6}>
        <material.TextField
          id="city"
          label="City"
          variant="outlined"
          value={city}
          onChange={e => setCity(e.target.value)}
          fullWidth
          aria-label="City"
        />
      </material.Grid>
      <material.Grid item xs={12} sm={6}>
        <material.FormControl variant="outlined" fullWidth>
          <material.InputLabel id="state-label">State</material.InputLabel>
          <material.Select
            labelId="state-label"
            id="state"
            value={selectedState}
            onChange={handleStateChange}
            label="State"
            aria-label="Select State"
          >
            <material.MenuItem value="" disabled aria-disabled="true">
              <em>Select State</em>
            </material.MenuItem>
            {states.map(state => (
              <material.MenuItem key={state.abbreviation} value={state.abbreviation}>
                {state.name}
              </material.MenuItem>
            ))}
          </material.Select>
        </material.FormControl>
      </material.Grid>
      <material.Grid item xs={12} sm={6}>
        <material.TextField
          id="zip-code"
          label="Zip Code"
          type="number"
          variant="outlined"
          value={zipCode}
          onChange={e => setZipCode(e.target.value)}
          fullWidth
          aria-label="Zip Code"
        />
      </material.Grid>
    </material.Grid>
  );
}

export default FormAddress;
