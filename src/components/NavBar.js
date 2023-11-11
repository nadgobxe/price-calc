import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCity } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {

    const {menu, setMenu} = useState('')

  return (
    <>
      <div className="mx-8 mt-8 container flex flex-row">
        <div className="basis-1/4">
          <FontAwesomeIcon
            className="text-green-500 text-3xl font-bold"
            icon={faCity}
          />
        </div>
        <div className="basis-1/2">Menu</div>
      </div>
    </>
  );
}
