// Action pour charger les employés
export const LOAD_EMPLOYEES = 'LOAD_EMPLOYEES';

/**
 * Charge les employés depuis l'état Redux.
 *
 * @returns {Function} Fonction de thunk qui dispatch l'action.
 */
export function loadEmployees() {
  return (dispatch, getState) => {
    // Récupère les employés de l'état actuel
    const employees = getState().employees;

    // Envoie l'action avec le type et les employés
    dispatch({ type: LOAD_EMPLOYEES, employees });
  };
}
