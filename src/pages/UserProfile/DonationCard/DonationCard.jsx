import React from "react";
import styles from "./styles.css";
import moment from 'moment'

export default function DonationCard({amount, date, type}) {
  
   let dateFormat = moment(amount.date).format('DD/MM/YYYY')

  return (<div className="cardContainer"> 
    {/* {console.log('amount',amount)}
    {console.log('date',date)}
    {console.log('type',type)} */} 
    {type === "regular_payment" ? <h3>Donación única</h3> : type==="suscripcion " ? <h3>Donación suscripcion</h3> :null}    
     {/* <div>{JSON.stringify(amount)}</div>  */}
    <p>Fecha: {dateFormat}</p>
    <p>Monto: ${amount}</p> 
    {type==="suscripcion " ? <button>cancelar suscripcion</button> : null}   
  </div>)
}
