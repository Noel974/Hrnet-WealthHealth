import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import EmployeeReducer from '../Reducer/Reducer'

const store = createStore(
  EmployeeReducer,
   applyMiddleware(thunk)
);

export default store;
