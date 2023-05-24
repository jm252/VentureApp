import React from 'react';
import styles from './App.css';

import { BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./Home"
import RegistrationI from './RegistrationI';


const App = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='RegistrationI' element={<RegistrationI />} />
    </Routes>
   </BrowserRouter>
  )
};

export default App;
