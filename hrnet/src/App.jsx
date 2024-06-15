import React from 'react';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import Routex from './Routes/Routex';

import { BrowserRouter } from 'react-router-dom';

import store from './Redux/Store/Store';

import { Provider } from 'react-redux';

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
