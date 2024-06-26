import { ADD_EMPLOYEE } from "../Action/Ajout";
import { LOAD_EMPLOYEES } from "../Action/Load";

const initialState = {
    employees: []
  };
  
  const EmployeeReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_EMPLOYEE:
        return {
          ...state,
          employees: [...state.employees, action.employee]
        };
      case LOAD_EMPLOYEES:
        console.log('Loading employees:', action.employees);
        return {
          ...state,
          employees: action.employees
        };
      default:
        return state;
    }
  };
  export default EmployeeReducer;