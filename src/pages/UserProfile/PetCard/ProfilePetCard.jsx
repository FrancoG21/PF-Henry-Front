import React, { useEffect, useState } from "react";
import styles from "./styles.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import moment from "moment";
import axios from "axios";
import { ButtonCard, CardContainer, ImageCard, Sub } from "./StyledPetCard";

const today = moment().format("DD/MM/YYYY");

const fechaAdoptada = moment("22/06/2022", "DD/MM/YYYY").format("DD/MM/YYYY");

function capitalize(str) {
  return str.replace(/^\w/, (c) => c.toUpperCase());
}

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
  fur,
}) {
  const navigate = useNavigate();
  const popUp1 = () => {
    Swal.fire({
      title: `${capitalize(name)}`,
      html: `
        <img src=${image} alt=${name} height='200px' width='200px'/>
        <p>${pet === "dog" ? "Perro" : pet === "cat" ? "Gato" : null}</p>
        <p><b>Raza:</b> ${breed === "crossbreed" ? "caschi" : breed}</p>
        <p><b>Genero:</b> ${
          gender === "male"
            ? "macho"
            : gender === "female"
            ? "hembra"
            : gender === "unknown"
            ? "no se sabe"
            : null
        }<p/>
        <p><b>Tamaño:</b> ${
          size === "small"
            ? "pequeño"
            : size === "medium"
            ? "mediano"
            : size === "big"
            ? "grande"
            : null
        }</p> 
        <p><b>Peso:</b> ${weight ? weight : "-"}</p>
        <p><b>Pelaje:</b> ${
          fur === "short" ? "corto" : fur === "long" ? "largo" : null
        }</p>
        <p><b>Vacunación:</b> ${
          vaccinate === "true"
            ? "si"
            : vaccinate === "false"
            ? "no"
            : vaccinate === "unknown"
            ? "no se sabe"
            : null
        }</p>
        <p><b>Castración:</b> ${
          castration === "true"
            ? "si"
            : castration === "false"
            ? "no"
            : castration === "unknown"
            ? "no se sabe"
            : null
        }</p>
        <p><b>Ubicación actual:</b></p>
        <p>${actualPlace.toString()}</p>
      `,
    });
  };

  const popUp2 = () => {
    Swal.fire({
      title: "Esta seguro?",
      text: "Su peticion sera enviada",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Devolver mascota",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Peticion enviada",
          "Tu peticion pronto sera revisada",
          "success"
        );
        axios
          .put("/pet/return", {
            petId: id,
            token: JSON.parse(localStorage.getItem("userInfo")),
          })
          .then(
            Swal.fire(
              "Excelente",
              "Tu peticion para devolver la mascota fue aceptada",
              "success"
            ),

            setTimeout(() => location.reload(), 1000)
          )
          .catch((e) => {
            console.log(e);
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Algo salio mal!",
            });
          });
      }
    });
  };

  const popUp3 = () => {
    Swal.fire({
      title: "Cargar seguimiento",
      /* text: "No podra revertir los cambios!", */
      /* icon: "warning", */
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Cargar",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate(`/userseguimiento/${id}`);
      }
    });
  };

  return (
    <CardContainer key={"a" + id}>
      <Sub>{capitalize(name)}</Sub>
      <Sub>{pet === "dog" ? "Perro" : pet === "cat" ? "Gato" : null}</Sub>
      <Sub>
        {state === "transit"
          ? "Mascota en transito"
          : state === "adopted"
          ? "Mascota adoptada"
          : null}
      </Sub>
      {/* <h4>Ubicación actual <br/><br/>{actualPlace}</h4> */}
      <ImageCard src={image} alt={name}/>

      <div>
        {
          <ButtonCard
            onClick={
              state === "adopted" ? popUp1 : state === "transit" ? popUp1 : null
            }
          >
            Ver mas
          </ButtonCard>
        }
        {state === "adopted" ? (
          <ButtonCard className="dev" onClick={popUp2}>
            Devolver
          </ButtonCard>
        ) : null}
      </div>

      {state === "adopted" ? (
        <ButtonCard onClick={popUp3}>Cargar Seguimiento</ButtonCard>
      ) : null}

      {state === "transit" ? <ButtonCard onClick={popUp2}>Devolver</ButtonCard> : null}
    </CardContainer>
  );
}
