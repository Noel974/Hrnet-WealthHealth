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

  // Met à jour la valeur d'entrée lorsque la date de naissance change
  useEffect(() => {
    if (!dateOfBirth) {
      setDateInputValue("");
    } else {
      setDateInputValue(dateOfBirth); // Assurez-vous que l'état initial correspond à la date de naissance fournie
    }
  }, [dateOfBirth]);

  /**
   * Gère le focus sur le champ de date de naissance.
   * Définit une date par défaut si aucune date de naissance n'est fournie.
   *
   * @param {object} e - L'événement de focus.
   */
  const handleDateFocus = (e) => {
    if (!dateOfBirth) {
      e.target.value = ""; // Date par défaut
      setDateInputValue("1980-01-01");
    }
  };

  /**
   * Met à jour l'état de la date de naissance lorsque la valeur change.
   *
   * @param {object} e - L'événement de changement.
   */
  const handleDateChange = (e) => {
    setDateOfBirth(e.target.value);
    setDateInputValue(e.target.value);
  };

  // Propriétés personnalisées pour gérer la saisie du clavier pour la date de naissance
  const dateInputProps = {
    onKeyDown: (e) => {
      if (e.key === "Enter") {
        // Met à jour la date de naissance avec la valeur actuelle lorsque "Entrée" est pressée
        setDateOfBirth(dateInputValue);
      }
    },
  };

  // Propriétés personnalisées pour gérer la saisie du clavier pour la date de début
  const startDateInputProps = {
    onKeyDown: (e) => {
      if (e.key === "Enter") {
        // Met à jour la date de début avec la valeur actuelle lorsque "Entrée" est pressée
        setStartDate(startDate);
      }
    },
  };

  return (
    <material.Grid container spacing={2} role="form">
      {/* Champ pour le prénom de l'employé */}
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

      {/* Champ pour le nom de famille de l'employé */}
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

      {/* Champ pour la date de naissance de l'employé */}
      <material.Grid item xs={12} sm={6}>
        <material.TextField
          id="date-of-birth"
          label="Date of Birth"
          type="date"
          variant="outlined"
          value={dateInputValue}
          onFocus={handleDateFocus}
          onChange={handleDateChange}
          InputLabelProps={{ shrink: true }} // L'étiquette se rétracte toujours
          fullWidth
          inputProps={dateInputProps} // Utilisation des propriétés personnalisées
          aria-label="Date of Birth"
        />
      </material.Grid>

      {/* Champ pour la date de début d'emploi de l'employé */}
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
          inputProps={startDateInputProps} // Utilisation des propriétés personnalisées
          aria-label="Start Date"
        />
      </material.Grid>

      {/* Sélecteur pour le département de l'employé */}
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
