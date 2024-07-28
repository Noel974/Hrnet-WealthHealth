import * as material from "@mui/material";
import React, { useEffect, useState } from "react";
import departments from "../../assets/data/Departement.json";

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
  handleDepartmentChange,
}) {
  const [dateInputValue, setDateInputValue] = useState("");

  useEffect(() => {
    if (!dateOfBirth) {
      setDateInputValue("");
    }
  }, [dateOfBirth]);

  const handleDateFocus = (e) => {
    if (!dateOfBirth) {
      e.target.value = "1980-01-01";
      setDateInputValue("1980-01-01");
    }
  };

  const handleDateChange = (e) => {
    setDateOfBirth(e.target.value);
    setDateInputValue(e.target.value);
  };

  return (
    <material.Grid container spacing={2} role="form">
      <material.Grid item xs={12} sm={6}>
        <material.TextField
          id="first-name"
          label="First Name"
          variant="outlined"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          fullWidth
          aria-label="First Name"
        />
      </material.Grid>
      <material.Grid item xs={12} sm={6}>
        <material.TextField
          id="last-name"
          label="Last Name"
          variant="outlined"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          fullWidth
          aria-label="Last Name"
        />
      </material.Grid>
      <material.Grid item xs={12} sm={6}>
        <material.TextField
          id="date-of-birth"
          label="Date of Birth"
          type="date"
          variant="outlined"
          value={dateInputValue}
          onFocus={handleDateFocus}
          onChange={handleDateChange}
          InputLabelProps={{ shrink: true }}
          fullWidth
          inputProps={{
            onKeyDown: (e) => {
              // Gérez la saisie au clavier ici (par exemple, validez avec la touche "Entrée")
              if (e.key === "Enter") {
                // Mettez à jour la date de naissance avec la valeur actuelle
                setDateOfBirth(dateInputValue);
              }
            },
          }}
          aria-label="Date of Birth"
        />
      </material.Grid>
      <material.Grid item xs={12} sm={6}>
        <material.TextField
          id="start-date"
          label="Start Date"
          type="date"
          variant="outlined"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          InputLabelProps={{ shrink: true }}
          fullWidth
          inputProps={{
            onKeyDown: (e) => {
              // Gérez la saisie au clavier ici (par exemple, validez avec la touche "Entrée")
              if (e.key === "Enter") {
                // Mettez à jour la date de naissance avec la valeur actuelle
                setDateOfBirth(dateInputValue);
              }
            },
          }}
          aria-label="Date de naissance"
        />
      </material.Grid>
      <material.Grid item xs={12}>
        <material.FormControl variant="outlined" fullWidth>
          <material.InputLabel id="department-label">Department</material.InputLabel>
          <material.Select
            labelId="department-label"
            id="department"
            value={selectedDepartment}
            onChange={handleDepartmentChange}
            label="Department"
            aria-label="Select Department"
          >
            <material.MenuItem value="" disabled aria-disabled="true">
              <em>Select Department</em>
            </material.MenuItem>
            {departments.map((dept) => (
              <material.MenuItem key={dept.id} value={dept.name}>
                {dept.name}
              </material.MenuItem>
            ))}
          </material.Select>
        </material.FormControl>
      </material.Grid>
    </material.Grid>
  );
}

export default FormEmployee;
