import React from "react";

export default function PCFirstPage() {

    const handleSubmit = () => {
        console.log("Happy To servce");
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <select>
                    <option> Select What you are moving? </option>
                </select>
                <input type="text" id="colAddress"></input>
                <input type="text" id="delAddress"></input>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}