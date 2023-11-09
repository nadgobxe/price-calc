import React from "react";
import { useState, useRef, useEffect } from "react";

export default function PCFirstPage({ addNewMove, move, myMove }) {
  const [moveType, setMoveType] = useState("");
  const [colAddress, setColAddress] = useState("");
  const [delAddress, setDelAddress] = useState("");

  const autoCompleteRefCollection = useRef();
  const autoCompleteRefDelivery = useRef();
  const inputRefCollection = useRef();
  const inputRefDelivery = useRef();

   // Add a state to hold the calculated distance
   const [distance, setDistance] = useState("");

   // ... existing useEffect hook
 
   const calculateDistance = () => {
     const service = new window.google.maps.DistanceMatrixService();
     service.getDistanceMatrix(
       {
         origins: [colAddress],
         destinations: [delAddress],
         travelMode: 'DRIVING',
        //  unitSystem: google.maps.UnitSystem.IMPERIAL, // Set to use imperial units
       },
       (response, status) => {
         if (status === 'OK') {
           const result = response.rows[0].elements[0];
           if (result.status === 'OK') {
             setDistance(Math.round(parseInt(result.distance.text, 10) / 1.609344));
             // This will set the distance state
           }
         }
       }
     );
   };
 
   useEffect(() => {

     // Call calculateDistance when both addresses are set
     if (colAddress && delAddress) {
       calculateDistance();
     }
   }, [colAddress, delAddress]); // Dependency array
 

  const options = {
    componentRestrictions: { country: "gb" },
    fields: ["address_components", "geometry", "icon", "name", "formatted_address"],
    types: ["geocode"]
  };
  useEffect(() => {
    autoCompleteRefCollection.current = new window.google.maps.places.Autocomplete(
      inputRefCollection.current,
      options
    );
    
    autoCompleteRefDelivery.current = new window.google.maps.places.Autocomplete(
        inputRefDelivery.current,
        options
      );

      autoCompleteRefCollection.current.addListener("place_changed", async function () {
        const place = await autoCompleteRefCollection.current.getPlace();
        if (place.formatted_address) {
            setColAddress(place.formatted_address);
          }
      
       });

       autoCompleteRefDelivery.current.addListener("place_changed", async function () {
        const place = await autoCompleteRefDelivery.current.getPlace();
        if (place.formatted_address) {
            setDelAddress(place.formatted_address);
          }
      
       });

  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    addNewMove(moveType, colAddress, delAddress);

    setMoveType("");
    setColAddress("");
    setDelAddress("");
  };

  console.log("myMove: " + myMove);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <select value={moveType} onChange={(e) => setMoveType(e.target.value)}>
          <option> Select What you are moving? </option>
          {myMove &&
            myMove.map((moveT) => (
              <option key={moveT.id} value={moveT.type}>
                {moveT.type}{" "}
              </option>
            ))}
        </select>

        <input
          type="text"
          ref={inputRefCollection}
          id="colAddress"
          value={colAddress}
          onChange={(e) => setColAddress(e.target.value)}
        />
        <input
          type="text"
          ref={inputRefDelivery}
          id="delAddress"
          value={delAddress}
          onChange={(e) => setDelAddress(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
      {move.map((listmove) => (
        <li key={listmove.id} value={listmove.id}>
          {" "}
          {listmove.moveType} and {listmove.colAddress} and{" "}
          {listmove.delAddress}
        </li>
      ))}
      {distance && <p>Distance: {distance}</p>}
    </>
  );
}

//https://www.youtube.com/watch?v=BL2XVTqz9Ek
