import React, { useEffect, useState } from "react";
import axios from "axios";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import {
  Carrousel,
  ImageCarrusel,
  NameCard,
  TitleCarrusel,
  ContainerLost,
  ButtonLost,
  LostLink,
  ContainerLink,
  CardLink,
} from "./StyledCarrusel";

export default function CarruselSeguimiento() {
  const [seguimiento, setSeguimiento] = useState([]);

  const callBackIn = async () => {
    try {
      const { data } = await axios.get("/tracking/ult5");
      setSeguimiento(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    callBackIn();
  }, []);

  return (
    <ContainerLost>
      <Splide
        options={{
          rewind: false,
          perPage: 3,
          perMove: 3,
          gap: 10,
          padding: "1rem",
          pagination: false,
          breakpoints: {
            623: {
              perPage: 2,
              perMove: 2,
            },
            935: {
              perPage: 32,
              perMove: 2,
            },
            1247: {
              perPage: 2,
              perMove: 2,
            },
          },
        }}
      >
        {seguimiento ? (
          seguimiento.map((item, i) => {
            return (
              <Carrousel key={i}>
                <ImageCarrusel
                  className="image-carrusel"
                  src={item.image[0]}
                  alt={"img not found"}
                  height="30%"
                  width="20%"
                />
                <NameCard>{item.description}</NameCard>
              </Carrousel>
            );
          })
        ) : (
          <Carrousel>
            <ImageCarrusel
              className="image-carrusel"
              src={item.image}
              alt={"img not found"}
              height="30%"
              width="20%"
            />
            <NameCard>No hay seguimientos cargados todavia</NameCard>
          </Carrousel>
        )}
      </Splide>
      {/*  {console.log('seguimiento', seguimiento)}
          <h1>Seguimiento</h1>
          {seguimiento.length ? seguimiento.map((s,i)=>{return(
              <div key={'b'+i}>
                  <h4>Publicacion N°{i+1}</h4>
                  <p>{s.description}</p>
                  {s.image.length ? s.image.map(e => <img key={'a'+e}src={e} alt={e}  height='200px' width='200px'/>) : null}
              </div>
          )}) : <h1>No hay seguimientos cargados todavia</h1>} */}
    </ContainerLost>
  );
}
