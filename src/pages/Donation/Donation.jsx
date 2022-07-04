import React from "react";
import axios from "axios";
import { useState } from "react";
import "./Donation.module.css";

export default function Donation() {
  const [url, setUrl] = useState("");
  const precios = ["100", "200", "500", "1000", "2500", "5000"]
  const urlBase = useState(state => state.urlFront)

  function realizarPagoUnico(e) {
    axios.post('/payment', {
      unit_price: Number(e.target.value),
      failure: `${urlBase}/donation/failure`,
      success: `${urlBase}/donation/success`
    }).then(r => setUrl(r.data.url))
  }

  function realizarPagoSub(e) {
    axios.post('/payment/subscription', {
      transaction_amount: Number(e.target.value),
      back_url: `${urlBase}/donation/success`,
      payer_email: 'test_user_20466117@testuser.com'
    }).then(r => setUrl(r.data.url))
  }

  return (
    <>

      <p>DONACIÓN:</p>
      <div>

        {
          precios.map(value => { return <button onClick={(e) => realizarPagoUnico(e)} value={value}>{value} </button> })
        }
      </div>


      <h4>SUSCRIPCIÓN</h4>
      <button onClick={(e) => realizarPagoSub(e)} value={200}>{200}</button>
      {
        url && window.location.replace(url)
      }


    </>
  );
}