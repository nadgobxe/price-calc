import React from "react";
import PCFirstPage from "../Components/PriceCalculator/PCFirstPage";
import { useEffect, useState } from "react";

export default function PriceCalculator() {

    const [move, setMove] = useState('');
    const [colAddress, setColAddress] = useState('');

    return (
        <>
            <h1>The Price Calculator, sir!</h1>
            <PCFirstPage />
        </>
    )
}