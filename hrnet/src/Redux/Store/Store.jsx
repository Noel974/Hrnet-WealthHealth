import { createStore } from 'redux';
import employeeReducer from '../Reducer/Reduxer';

const store = createStore(employeeReducer);

export default store;
