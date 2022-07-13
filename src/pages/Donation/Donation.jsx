import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import "./Donation.module.css";
import { BackgroundDonation,
  ButtonDonation, 
  ButtonSuscription, 
  ContainerButton, 
  ContainerCard,
  ImagePet, 
  Post,
  HeaderPost,
  SubTitle,
  TitleDonation, 
  BodyContent,
  PostContent,
  TitleCard,
  TextCard,
  ContainerTextDonation,
  Container,
  SubtitleDonation,
  TextDonation,
  ContainerButtonSuscription,
} from "./styledDonation";

export default function Donation() {
  const [url, setUrl] = useState("");
  const precios = ["100", "200", "500", "1000", "2500", "5000"]
  const { urlFront, usuario } = useSelector(state => state)

  function realizarPagoUnico(e) {
    axios.post('/payment', {
      unit_price: Number(e.target.value),
      failure: `${urlFront}/donation/failure`,
      success: `${urlFront}/donation/success`,
      token: usuario
    }).then(r => setUrl(r.data.url))
  }

  function realizarPagoSub(e) {
    axios.post('/payment/subscription', {
      transaction_amount: Number(e.target.value),
      back_url: `${urlFront}/donation/success`,
      payer_email: 'test_user_20466117@testuser.com',
      token: usuario
    }).then(r => setUrl(r.data.url))
  }

  useEffect(()=>{
    url && window.location.replace(url)
  }, [url])

  return (
    <>
      <BackgroundDonation>
        <TitleDonation>Ayudanos con tu Donación</TitleDonation>
        <SubTitle>Nuestro trabajo depende enteramente de tu ayuda. Necesitamos tu apoyo para solventar el enorme costo de manutención de muchos animales ya que no poseemos ayuda del estado ni de empresas privadas. Gracias a tu aporte logramos seguir con nuestras tareas, para lograr un futuro libre de maltrato y abandono animal. Ayudanos a seguir ayudándolos con el monto que puedas y quieras, no hay montos estipulados ni tiempo de permanencia.
          Gracias por permitirnos seguir trabajando por ellos.
        </SubTitle>

        <div>
          <SubtitleDonation>¿Que recibiran los animales con tu donación?</SubtitleDonation>
        </div>

        <ContainerCard>
          <Post>
            <HeaderPost>
              <ImagePet src='https://img.freepik.com/foto-gratis/perro-callejero-hambriento-comiendo-tazon-centro-adopcion_87555-2460.jpg' alt='comida'/>
            </HeaderPost>
            <BodyContent>
              <PostContent>
                <TitleCard>Alimento</TitleCard>
                <TextCard>
                  Alimento balanceado para perros y gatos, tanto como adulto como de cachorro, pouchs de alimento húmedo (Pedigree), golosinas para animales, etc.
                </TextCard>
              </PostContent>
            </BodyContent>
          </Post>

          <Post>
            <HeaderPost>
              <ImagePet src='https://www.uchile.cl/.imaging/default/dam/imagenes/Uchile/imagenes-noticias/169350_1_dia-del-veterinario-04-l_L/jcr:content.jpg' alt='salud'/>
            </HeaderPost>

            <BodyContent>
              <PostContent>
                <TitleCard>Salud</TitleCard>
                <TextCard>
                  Antiparasitos internos, pipetas antipulgas, toltrazol en comprimidos, algen, spectryl, antiartrósicos / regeneradores osteoarticulares/ condoprotectores (Artrin/ Artroglican/ Gerioox / Sosten CG / Osteocart Plus), Vitamina E 200, Polferon, Contal, Rifocina, etc.
                </TextCard>
              </PostContent>
            </BodyContent>
          </Post>

          <Post>
            <HeaderPost>
              <ImagePet src='https://www.conclusion.com.ar/wp-content/uploads/2019/05/Perros.jpg' alt='cama'/>
            </HeaderPost>

            <BodyContent>
              <PostContent>
                <TitleCard>Kits</TitleCard>
                <TextCard>
                  Correas y collares, cuchas, camas, mantas, jaulas de exposición, platos para la comida y bebida, transportadoras, elementos de limpieza (lavandina, ambitus, trapos), etc.
                </TextCard>
              </PostContent>
            </BodyContent>
          </Post>
        </ContainerCard>

        <ContainerTextDonation>
          <Container>
            <SubtitleDonation>Tu Donación nos ayuda a ayudar</SubtitleDonation>
            <TextDonation>
              Te agradecemos desde ya tu voluntad de colaborar con nuestra misión de encontrar hogares definitivos para nuestros rescatados, y también brindar un hogar digno a los que no tienen la suerte de ser adoptados.  
            </TextDonation>
          </Container>

          <Container>
            <SubtitleDonation>Cada Centavo suma</SubtitleDonation>
            <TextDonation>
              Y nos ayuda a garantizar que nuestros rescatados reciban todo lo que necesitan hasta que una familia los elija para siempre.  
            </TextDonation>
          </Container>
        </ContainerTextDonation>


        <div>
          <SubtitleDonation>Doná con Mercado Pago</SubtitleDonation>
            <TextDonation>Un importe fijo con Mercado Pago
              (Todas las tarjetas de crédito y débito, Pago Fácil, Rapipago, Link, Banelco o desde la APP)
            </TextDonation>
        </div>

        <ContainerButton>
          {
            precios.map(value => { return <ButtonDonation onClick={(e) => realizarPagoUnico(e)} value={value}>Doná ${value} </ButtonDonation> })
          }
        </ContainerButton>

        <SubtitleDonation>SUSCRIPCIÓN</SubtitleDonation>
        <TextDonation>Con nuestro sistema de suscripción de $1500 ARS y con $50 por día colaboras para poder darle alimentos y proveer de las vacunas básicas a los recién rescatados</TextDonation>
        <ContainerButtonSuscription>
          <ButtonSuscription onClick={(e) => realizarPagoSub(e)} value={200}>Doná ${1500}</ButtonSuscription>
        </ContainerButtonSuscription>
      </BackgroundDonation>
    </>
  );
}
