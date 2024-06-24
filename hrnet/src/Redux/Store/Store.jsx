import { createStore, applyMiddleware } from 'redux';
import Reducer from '../Reducer/Reducer'
import  storageMiddleware  from '../Middleware/Middleware';

const store = createStore(
    Reducer,
  applyMiddleware(storageMiddleware)
);

export default store;
