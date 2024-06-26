export const LOAD_EMPLOYEES = 'LOAD_EMPLOYEES';

export function loadEmployees() {
  return (dispatch, getState) => {
    const employees = getState().employees;
    dispatch({ type: LOAD_EMPLOYEES, employees });
  };
}