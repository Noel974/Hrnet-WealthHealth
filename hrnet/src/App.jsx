import React from 'react';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import Routex from './Routes/Routex';

import { BrowserRouter } from 'react-router-dom';

import './Style/App.css';
function App() {
  return (
   <BrowserRouter>
    <Nav/>
    <Routex/>
    <Footer />
   </BrowserRouter> 
  );
}

export default App;
