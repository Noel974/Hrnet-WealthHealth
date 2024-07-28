// Importation des fonctions pour créer un store Redux et appliquer des middlewares
import { applyMiddleware, createStore } from 'redux';
// Importation du middleware Redux Thunk pour gérer les actions asynchrones
import { thunk } from 'redux-thunk';
// Importation du réducteur des employés
import EmployeeReducer from '../Reducer/Reducer';

// Création du store Redux avec le réducteur et le middleware thunk
const store = createStore(
  EmployeeReducer,// Le réducteur qui gère l'état des employés
   applyMiddleware(thunk)// Application du middleware thunk pour les actions asynchrones
);

export default store;

