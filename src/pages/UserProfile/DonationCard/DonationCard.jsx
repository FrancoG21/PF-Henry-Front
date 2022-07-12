import React from "react";
import styles from "./styles.css";
import moment from 'moment'
import Swal from "sweetalert2";

export default function DonationCard({amount, date, type}) {
  
   let dateFormat = moment(amount.date).format('DD/MM/YYYY')

   const popUp1 = ()=>{
    Swal.fire({
      title: "Cancelar suscripcion",     
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Aceptar",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('Apretaste para cancelar suscripcion');
      }
    });
  }

  return (<div className="cardContainer"> 
    {/* {console.log('amount',amount)}
    {console.log('date',date)}
    {console.log('type',type)} */} 
    {type === "regular_payment" ? <h3>Donación única</h3> : type==="suscripcion " ? <h3>Donación suscripcion</h3> :null}    
     {/* <div>{JSON.stringify(amount)}</div>  */}
    <p>Fecha: {dateFormat}</p>
    <p>Monto: ${amount}</p> 
    <p></p>
    {type==="suscripcion " ? <button onClick={popUp1}>cancelar suscripcion</button> : null}   
  </div>)
}
