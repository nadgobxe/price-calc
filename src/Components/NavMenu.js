import React from "react";
import {NavLink} from "react-router-dom"
import '../Styles/nav.css'

export default function NavMenu() {
    return (
        <>
            <nav>
                <ul>
                    <li><NavLink to="/" className={ ({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink'}>Home</NavLink></li>
                    <li><NavLink to="/price-calculator" className={ ({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink'}>Price Calculator</NavLink></li>
                </ul>
            </nav>
        </>
    )
}