import { ADD_EMPLOYEE } from "../Action/Ajout";
import { LOAD_EMPLOYEES } from "../Action/load";

const initialState = {
    employees: []
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_EMPLOYEE:
        return {
          ...state,
          employees: [...state.employees, action.employee]
        };
      case LOAD_EMPLOYEES:
        return {
          ...state,
          employees: action.employees
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  