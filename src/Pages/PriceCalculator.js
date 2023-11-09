import React from "react";
import PCFirstPage from "../Components/PriceCalculator/PCFirstPage";
import { useEffect, useState } from "react";

export default function PriceCalculator() {

    const [move, setMove] = useState([
        {id: 1, moveType: "House", colAddress: "NN2 6EE", delAddress: "NN5 5BY"}
    ]);

    const [myMove, setMyMove] = useState(
        [
           {id: 1, type: "House Move"},
           {id: 2, type: "Single Item"},
           {id: 3, type: "Piano Move"},
        ]
    )

    function addNewMove(moveType, colAddress, delAddress) {
        setMove(prevMove => [...prevMove, {moveType, colAddress, delAddress}])
    }

    return (
        <>
            <h1>The Price Calculator, sir!</h1>
            <PCFirstPage addNewMove={addNewMove} move={move} myMove={myMove}/>
        </>
    )
}