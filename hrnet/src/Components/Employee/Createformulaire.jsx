import React, { useState } from 'react';
import departments from '../../assets/data/Departement.json'; 
import states from '../../assets/data/Etat.json';


function Createformulaire() {
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedState, setSelectedState] = useState('');

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
  };

  const saveEmployee = () => {
    // Logique pour sauvegarder l'employé
    console.log('Employee saved');
  };

  return (
    <main className="main-form">
      <div className="formulaire">
        <h2>Create Employee</h2>
        <form>
          <div className="form-left">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" />

            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" />

            <label htmlFor="date-of-birth">Date of Birth</label>
            <input id="date-of-birth" type="date" />

            <label htmlFor="start-date">Start Date</label>
            <input id="start-date" type="date" />

            <div>
              <label htmlFor="department">Department</label>
              <select 
                name="department" 
                id="department" 
                value={selectedDepartment} 
                onChange={handleDepartmentChange}
              >
                <option value="">Select Department</option>
                {departments.map(dept => (
                  <option key={dept.id} value={dept.name}>{dept.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-right">
            <fieldset className="address">
              <legend>Address</legend>
              <label htmlFor="street">Street</label>
              <input id="street" type="text" />
              <label htmlFor="city">City</label>
              <input id="city" type="text" />
              <label htmlFor="state">State</label>
              <select name="state" id="state" value={selectedState} onChange={handleStateChange}>
                  <option value="">Select State</option>
                  {states.map(state => (
                    <option key={state.abbreviation} value={state.abbreviation}>
                      {state.name}
                    </option>
                  ))}
              </select>
              <label htmlFor="zip-code">Zip Code</label>
              <input id="zip-code" type="number" />
            </fieldset>
          </div>
        </form>
        <button onClick={saveEmployee}>Save</button>
      </div>
    </main>
  );
}

export default Createformulaire;
