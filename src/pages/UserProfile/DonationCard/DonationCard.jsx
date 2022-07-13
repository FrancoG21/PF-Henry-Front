import React from "react";
import styles from "./styles.css";
import moment from 'moment'
import Swal from "sweetalert2";
import { ContainerDonation, Sub } from "./StyledDonationCard";

export default function DonationCard({ amount, date, type }) {

  let dateFormat = moment(amount.date).format('DD/MM/YYYY')

  const popUp1 = () => {
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

  return (
    <ContainerDonation>
      {/* {console.log('amount',amount)}
    {console.log('date',date)}
    {console.log('type',type)} */}
      {type === "regular_payment" ? <Sub>Donación única</Sub> : type === "suscripcion " ? <Sub>Donación Suscripcion</Sub> : null}
      {/* <div>{JSON.stringify(amount)}</div>  */}
      <Sub>Fecha: {dateFormat}</Sub>
      <Sub>Monto: ${amount}</Sub>
      <p></p>
      {type === "suscripcion " ? <ButtonPago onClick={popUp1}>Cancelar Suscripcion</ButtonPago> : null}
    </ContainerDonation>)
}
