import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCity } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

export default function NavBar({menu}) {

  return (
    <>
      <div className="mx-8 mt-8 container flex flex-row">
        <div className="basis-1/4">
          <FontAwesomeIcon
            className="text-green-500 text-3xl font-bold"
            icon={faCity}
          />
        </div>
        <div className="basis-1/2 flex flex-row content-center justify-around">
            {menu && menu.map((menuItem) => (
                <NavLink to={`/${menuItem.replace(/\s+/g, '').toLowerCase()}`} key={menuItem}>
                {menuItem}
              </NavLink>
            ) )}
        </div>
      </div>
    </>
  );
}
