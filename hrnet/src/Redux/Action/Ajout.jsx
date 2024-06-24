export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';

export function ajoutsEmployee(employee) {
  return { type: ADD_EMPLOYEE, employee };
}


