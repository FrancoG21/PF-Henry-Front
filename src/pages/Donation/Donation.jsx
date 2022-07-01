import React from "react";
import axios from "axios";
import { useState } from "react";


export default function Donation() {
  const [url, setUrl] = useState("");
  const [estado, setEstado] = useState("individual")
  const precios = ["100","200","500","1000","2500","5000"]

    function cambiarEstado(){
      estado === "individual" ? setEstado("subscripcion") : setEstado("individual")
    }

    function realizarPagoUnico(e){
      axios.post('/payment', {
        unit_price: Number(e.target.value),
        failure: 'http://localhost:3000/donation/failure',
        success: 'http://localhost:3000/donation/success'
      }).then(r => setUrl(r.data.url))
    }

    function realizarPagoSub(e){
      axios.post('/payment/subscription', {
        transaction_amount: Number(e.target.value),
        back_url: 'http://localhost:3000/donation/success',
        payer_email: 'test_user_20466117@testuser.com'
      }).then(r => setUrl(r.data.url))
    }
    
  return (
    <>
      <button onClick={cambiarEstado}>Cambiar estado</button>
      {
        estado === "individual" ? <>
          <p>Pagos individuales:</p>
          <div>
          {
            precios.map(value=>{return <button onClick={(e) => realizarPagoUnico(e)} value={value}>{value}</button>})
          }
          </div>
          </>
      :<>
      <p>Pago por suscripción</p>
        <button onClick={(e) => realizarPagoSub(e)} value={200}>{200}</button>
      {
        url && window.location.replace(url)
      }
      </>
      }
    </>
  );
}