import { LOAD_EMPLOYEES } from '../Action/Recup';
import { ADD_EMPLOYEE } from '../Action/Ajout';

const initialState = {
  employees: JSON.parse(localStorage.getItem('employees')) || []
};

function employeeReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_EMPLOYEE: {
      const newEmployees = [...state.employees, action.employee];
      localStorage.setItem('employees', JSON.stringify(newEmployees));  
      return {
        ...state,
        employees: newEmployees
      };
    }
    case LOAD_EMPLOYEES:
      return {
        ...state,
        employees: action.employees
      };
    default:
      return state;
  }
}

export default employeeReducer;
