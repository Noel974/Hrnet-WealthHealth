// Importation des types d'action
import { ADD_EMPLOYEE } from "../Action/Ajout";
import { LOAD_EMPLOYEES } from "../Action/Load";

// État initial du réducteur
const initialState = {
  employees: [] // Liste vide d'employés
};

/**
 * Réducteur pour gérer les actions liées aux employés.
 *
 * @param {Object} state - L'état actuel du réducteur.
 * @param {Object} action - L'action dispatchée.
 * @returns {Object} Le nouvel état après avoir appliqué l'action.
 */
const EmployeeReducer = (state = initialState, action) => {
  switch (action.type) {
    // Ajoute un nouvel employé à la liste des employés
    case ADD_EMPLOYEE:
      return {
        ...state, // Copie de l'état actuel
        employees: [...state.employees, action.employee] // Ajoute le nouvel employé
      };

    // Charge les employés dans l'état
    case LOAD_EMPLOYEES:
      console.log('Loading employees:', action.employees); // Affiche les employés chargés dans la console
      return {
        ...state, // Copie de l'état actuel
        employees: action.employees // Remplace la liste des employés par ceux chargés
      };

    // Retourne l'état inchangé par défaut
    default:
      return state;
  }
};

export default EmployeeReducer; // Exportation du réducteur
