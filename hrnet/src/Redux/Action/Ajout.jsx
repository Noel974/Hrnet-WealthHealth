/**
 * Type d'action pour ajouter un employé.
 */
export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';

/**
 * Crée une action pour ajouter un employé au store Redux.
 *
 * @param {Object} employee - Les détails de l'employé à ajouter.
 * @returns {Object} Action avec le type et les données de l'employé.
 */
export function ajoutsEmployee(employee) {
  return { type: ADD_EMPLOYEE, employee };
}
