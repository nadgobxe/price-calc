import React from "react";
import {NavLink} from "react-router-dom"

export default function NavMenu() {
    return (
        <>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/price-calculator" className={ ({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink'}>Price Calculator</NavLink></li>
                </ul>
            </nav>
        </>
    )
}