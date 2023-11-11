import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import Admin from './pages/Admin';
import {Route, Routes} from 'react-router-dom';
import PriceCalc from './pages/PriceCalc';
import Contact from './pages/Contact';


export default function App() {

  const [menu, setMenu] = useState([
    { name: 'HomePage', path: '/', component: HomePage },
    { name: 'Price Calculator', path: '/price-calc', component: PriceCalc },
    { name: 'Contact', path: '/contact', component: Contact },
  ]);

  const handleMenu = (newMenu) => {
    setMenu(prevMenu => [...prevMenu, newMenu])
  }

  return (
    <>
      <div className="px-20">
      <NavBar menu={menu} />
      <div className='p-10'>
      <Routes>
      {menu.map(menuItem => (
            <Route key={menuItem.path} path={menuItem.path} element={React.createElement(menuItem.component)} />
          ))}
        </Routes>
      </div>
      </div>
    </>
  )
}
