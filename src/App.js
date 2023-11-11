import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import NavBar from './components/NavBar';
import Admin from './pages/Admin';
import {Route, Routes} from 'react-router-dom';


export default function App() {

  const [menu, setMenu] = useState(
    [
      'Home',
      'Price Calculator',
      'Contact'
    ]
  )

  const handleMenu = (newMenu) => {
    setMenu(newMenu)
  }

  return (
    <>
      <div className="px-20">
      <NavBar menu={menu} />
      <Routes>
        <Route></Route>
      </Routes>
      </div>
    </>
  )
}
