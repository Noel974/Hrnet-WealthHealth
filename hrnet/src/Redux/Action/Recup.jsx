export const LOAD_EMPLOYEES = 'LOAD_EMPLOYEES';

export function loadEmployees() {
  const employees = JSON.parse(localStorage.getItem('employees')) || [];
  return { type: LOAD_EMPLOYEES, employees };
}
