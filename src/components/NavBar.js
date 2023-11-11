import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function NavBar() {

    return (
        <>
            <div className="mx-8 mt-8 container flex flex-row">
                <div className="basis-1/4">Logo</div>
                <div className="basis-1/2">Menu</div>

            </div>
        </>
    )
}