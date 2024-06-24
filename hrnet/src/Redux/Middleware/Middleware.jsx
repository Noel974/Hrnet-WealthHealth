import { ADD_EMPLOYEE } from "../Action/Ajout";
import { LOAD_EMPLOYEES } from "../Action/load";

const storageMiddleware = store => next => action => {
  if (action.type === ADD_EMPLOYEE) {
    const state = store.getState();
    const employees = [...state.employees, action.employee];
    localStorage.setItem('employees', JSON.stringify(employees));
  } else if (action.type === LOAD_EMPLOYEES) {
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    action.employees = employees;
  }
  return next(action);
};

export default storageMiddleware;