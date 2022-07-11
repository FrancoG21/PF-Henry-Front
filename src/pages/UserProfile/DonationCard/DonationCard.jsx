import React, { useEffect } from "react";
import styles from "./styles.css";

export default function DonationCard(amount, date, type) {
  

  return (<div className="cardContainer"> 
    {console.log('amount',amount)}
    {console.log('date',date)}
    {console.log('type',type)} 
    {amount.type === 'unique' ? <h3>Donación única</h3> : amount.type==='suscription' ? <h3>Donación suscripcion</h3> :null}    
     {/* <div>{JSON.stringify(amount)}</div>  */}
    <p>Fecha: {amount.date}</p>
    <p>Monto: ${amount.amount}</p>    
  </div>)
}
