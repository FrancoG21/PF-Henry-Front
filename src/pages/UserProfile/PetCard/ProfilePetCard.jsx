import React from "react";
import styles from "./styles.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import moment from "moment";
// import ImageUploader from "../../../components/Users/PetCreate/imagenes/ImagesUploader";

const today = moment().format("DD/MM/YYYY");

const fechaAdoptada = moment("22/06/2022", "DD/MM/YYYY").format("DD/MM/YYYY");

function capitalize(str) {
  return str.replace(/^\w/, (c) => c.toUpperCase());
}

const loadSeguimiento = () => {
  /* const nuevaFecha = moment(fechaAdoptada, "DD/MM/YYYY")
    .add(1, "month")
    .format("DD/MM/YYYY");
  //console.log(typeof today)
  console.log("today", today);
  //console.log(typeof fechaAdoptada)
  console.log("fechaAdoptada", fechaAdoptada);
  console.log("nuevaFecha = 30 dias mas que fechaAdoptada -->", nuevaFecha);

  if (nuevaFecha < today) {
    console.log("nuevaFecha < today -->", nuevaFecha, today);
  }
  if (nuevaFecha > today) {
    const diasRestantes = nuevaFecha;
    console.log("nuevaFecha > today -->", nuevaFecha, today);
  } */
};

export default function PetCard({
  name,
  pet,
  state,
  id,
  image,
  breed,
  castration,
  vaccinate,
  size,
  weight,
  gender,
  actualPlace,
  fur
}) {

  const popUp1 = () => {
    Swal.fire({
      title: `${capitalize(name)}`,
      html: `
        <img src=${image} alt=${name} height='200px' width='200px'/>
        <p>${pet === "dog" ? "Perro" : pet === "cat" ? "Gato" : null}</p>
        <p><b>Raza:</b> ${breed === 'crossbreed' ? 'caschi' : breed}</p>
        <p><b>Genero:</b> ${gender === 'male' ? 'macho' : gender === 'female' ? 'hembra' : gender === 'unknown' ? 'no se sabe' : null}<p/>
        <p><b>Tamaño:</b> ${size === 'small' ? 'pequeño' : size === 'medium' ? 'mediano' : size === 'big' ? 'grande' : null}</p> 
        <p><b>Peso:</b> ${weight ? weight : '-'}</p>
        <p><b>Pelaje:</b> ${fur === 'short' ? 'corto' : fur === 'long' ? 'largo' : null}</p>
        <p><b>Vacunación:</b> ${vaccinate === 'true'? 'si' : vaccinate === 'false'? 'no': vaccinate === 'unknown'? 'no se sabe' : null}</p>
        <p><b>Castración:</b> ${castration === 'true'? 'si' : castration === 'false'? 'no': castration === 'unknown'? 'no se sabe' : null}</p>
        <p><b>Ubicación actual:</b></p>
        <p>${actualPlace.toString()}</p>
      `,
    });
  };
 

  return (
    <div className="cardContainer" key={"a" + id}>
      <h4>{capitalize(name)}</h4>
      <h4>{pet === "dog" ? "Perro" : pet === "cat" ? "Gato" : null}</h4>
      <h4>
        {state === "transit"
          ? "Mascota en transito"
          : state === "adopted"
          ? "Mascota adoptada"
          : null}
      </h4>
      {/* <h4>Ubicación actual <br/><br/>{actualPlace}</h4> */}
      <img src={image} alt={name} height="100px" width="100px" />

      <button
        onClick={
          state === "adopted" ? popUp1 : state === "transit" ? popUp1 : null
        }
      >
        ver mas
      </button>

      {state === "adopted" ? (
        <button onClick={loadSeguimiento}>seguimiento</button>
      ) : null}
    </div>
  );
}
