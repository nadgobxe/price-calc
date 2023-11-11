import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCity } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

export default function NavBar({ menu }) {
  return (
    <>
      <div className="mx-8 mt-8 container flex flex-row">
        <div className="basis-1/4">
          <FontAwesomeIcon
            className="text-green-500 text-3xl font-bold"
            icon={faCity}
          />
        </div>
        <nav className="basis-1/2 flex flex-row content-center justify-start">
          <ul className="basis-1/2 flex flex-row content-center justify-around">
            {menu.map((item) => (
              <li key={item.path}>
                <NavLink to={item.path}>{item.name}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
