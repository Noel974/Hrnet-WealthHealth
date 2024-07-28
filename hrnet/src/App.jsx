import React from 'react';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';
import Routex from './Routes/Routex';

// Importation du BrowserRouter depuis react-router-dom pour la gestion des routes
import { BrowserRouter } from 'react-router-dom';

// Importation du Provider pour intégrer Redux avec React
import { Provider } from 'react-redux';

// Importation du store Redux configuré
import store from './Redux/Store/Store';

import './Style/App.css';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Nav />
        <Routex />
        <Footer />
      </Provider>
    </BrowserRouter>
  );
}

export default App;