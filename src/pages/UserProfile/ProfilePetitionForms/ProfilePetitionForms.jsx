import React, { useEffect, useState } from "react";
import styles from "./styles.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function capitalize(str) {
  return str.replace(/^\w/, (c) => c.toUpperCase());
  // return str;
}

const popUp1 = () => {
  Swal.fire("Petición encontre mi mascota");
};
const popUp2 = () => {
  Swal.fire("Petición para adoptar");
};
const popUp3 = () => {
  Swal.fire("Petición para hogar transito");
};
const popUp4 = () => {
  Swal.fire("Petición para cargar mascota y dar en adopcion");
};
const popUp5 = () => {
  Swal.fire("Petición para cargar mascota encontrada");
};

const popUpDeletePetition = () => {
  Swal.fire({
    title: "Esta seguro?",
    text: "No podra revertir los cambios!",
    icon: "warning",
    showCancelButton: true,
    cancelButtonText: 'Cancelar',
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Eliminar",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        "Eliminado",
        "Tu peticion ha sido eliminada correctamente",
        "success"
      );
    }
  });
};

export function PetitionGetLosts({ formDate, petId, formState }) {
  const [pet, setPet] = useState({});

  useEffect(() => {
    axios.get(`/pet/${petId}`).then((r) => setPet(r.data));
    //console.log('petPetitionGetLosts', pet)
  }, []);

  return (
    <div className="containerForm">
      <h3>Petición encontre mi mascota</h3>
      <button onClick={popUpDeletePetition}>eliminar peticion</button>
      <button onClick={popUp1}>ver mas</button>
      <h5>fecha: {formDate}</h5>
      <h5>
        mascota: {pet.name && capitalize(pet.name)};{" "}
        {pet.pet === "dog" ? "perro" : pet.pet === "cat" ? "gato" : null}
      </h5>
      {/*  <Link to={`/petdetail/${petId}`}>
        <button>ver mascota</button>
      </Link> */}
      <h5>
        Estado de la peticion:{" "}
        {formState === "pending"
          ? "en revisión"
          : formState === "acepted"
          ? "aceptado"
          : formState === "rejected"
          ? "rechazado"
          : null}
      </h5>
      <img src={pet.image} alt={pet.name} width="80px" height="80px" />
    </div>
  );
}

export function PetitionGets({ formDate, petId, state, formState }) {
  const [pet, setPet] = useState({});

  useEffect(() => {
    axios.get(`/pet/${petId}`).then((r) => setPet(r.data));
    console.log("PetitionGets", pet);
  }, []);

  return (
    <div className="containerForm">
      {state === "adopted" ? (
        <h3>Petición para adoptar</h3>
      ) : state === "transit" ? (
        <h3>Petición para hogar transito</h3>
      ) : null}
      <button onClick={popUpDeletePetition}>eliminar peticion</button>
      <button
        onClick={
          state === "adopted" ? popUp2 : state === "transit" ? popUp3 : null
        }
      >
        ver mas
      </button>
      <h5>fecha: {formDate}</h5>
      <h5>
        mascota: {pet.name && capitalize(pet.name)};{" "}
        {pet.pet === "dog" ? "perro" : pet.pet === "cat" ? "gato" : null}
      </h5>
      {/* <Link to={`/petdetail/${petId}`}>
        <button>ver mascota</button>
      </Link> */}
      <h5>
        Estado de la peticion:{" "}
        {formState === "pending"
          ? "en revisión"
          : formState === "acepted"
          ? "aceptado"
          : formState === "rejected"
          ? "rechazado"
          : null}
      </h5>
      <img src={pet.image} alt={pet.name} width="80px" height="80px" />
    </div>
  );
}

export function PetitionLoads({
  formDate,
  state,
  petName,
  type,
  formState,
  petImg,
}) {
  return (
    <div className="containerForm">
      {state === "adopt" ? (
        <h3>Petición para cargar mascota y dar en adopcion</h3>
      ) : state === "lost" ? (
        <h3>Petición para cargar mascota encontrada</h3>
      ) : null}
      <button onClick={popUpDeletePetition}>eliminar peticion</button>
      <button
        onClick={state === "adopt" ? popUp4 : state === "lost" ? popUp5 : null}
      >
        ver mas
      </button>
      <h5>fecha: {formDate}</h5>
      <h5>
        mascota: {petName && capitalize(petName)};{" "}
        {type === "dog" ? "perro" : type === "cat" ? "gato" : null}
      </h5>
      {/* <Link to={`/petdetail/${petId ? petId : "9999999"}`}>
        <button>ver mascota</button>
      </Link> */}
      <h5>
        Estado de la peticion:{" "}
        {formState === "pending"
          ? "en revisión"
          : formState === "acepted"
          ? "aceptado"
          : formState === "rejected"
          ? "rechazado"
          : null}
      </h5>
      {petImg.map((p, i) => (
        <img src={p} alt={petName} key={"a" + i} height="60px" />
      ))}
    </div>
  );
}
