import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home';
import NavMenu from './Components/NavMenu';
import PriceCalculator from './Pages/PriceCalculator';

function App() {
  return (
    <>
    <NavMenu></NavMenu>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/price-calculator" element={<PriceCalculator/>} />
    </Routes>
    </>
  );
}

export default App;
