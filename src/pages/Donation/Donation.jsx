import React from "react";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Donation.module.css";
import { BackgroundDonation, ButtonDonation, ButtonSuscription, ContainerButton, SubTitle, Suscription, TitleDonation } from "./styledDonation";

export default function Donation() {
  const [url, setUrl] = useState("");
  const precios = ["100", "200", "500", "1000", "2500", "5000"]
  const { urlFront } = useSelector(state => state)
  const history = useHistory()

  function realizarPagoUnico(e) {
    axios.post('/payment', {
      unit_price: Number(e.target.value),
      failure: `${urlFront}/donation/failure`,
      success: `${urlFront}/donation/success`
    }).then(r => setUrl(r.data.url))
  }

  function realizarPagoSub(e) {
    axios.post('/payment/subscription', {
      transaction_amount: Number(e.target.value),
      back_url: `${urlFront}/donation/success`,
      payer_email: 'test_user_20466117@testuser.com'
    }).then(r => setUrl(r.data.url))
  }

  return (
    <>
      <BackgroundDonation>
        <TitleDonation>DONACIÓN:</TitleDonation>
        <SubTitle>Nuestro trabajo depende enteramente de tu ayuda. Necesitamos tu apoyo para solventar el enorme costo de manutención de muchos animales ya que no poseemos ayuda del estado ni de empresas privadas. Gracias a tu aporte logramos seguir con nuestras tareas, para lograr un futuro libre de maltrato y abandono animal. Ayudanos a seguir ayudándolos con el monto que puedas y quieras, no hay montos estipulados ni tiempo de permanencia.
          Gracias por permitirnos seguir trabajando por ellos.
        </SubTitle>
        <ContainerButton>
          {
            precios.map(value => { return <ButtonDonation onClick={(e) => realizarPagoUnico(e)} value={value}>{value} </ButtonDonation> })
          }
        </ContainerButton>


        <Suscription>SUSCRIPCIÓN</Suscription>
        <ButtonSuscription onClick={(e) => realizarPagoSub(e)} value={200}>{200}</ButtonSuscription>
        {
          url && history.push(url)
        }
      </BackgroundDonation>
    </>
  );
}