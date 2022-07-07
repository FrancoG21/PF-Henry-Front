import React, { useEffect, useState } from "react";
import styles from "./styles.css";
import axios from "axios";
import { Link } from "react-router-dom";

function capitalize(str) {
    return str.replace(/^\w/, (c) => c.toUpperCase());
 // return str;
}

export function PetitionGetLosts({ formDate, petId, formState }) {
  const [pet, setPet] = useState({});

  useEffect(() => {
    axios.get(`/pet/${petId}`).then((r) => setPet(r.data));
    //console.log('petPetitionGetLosts', pet)
  }, []);

  return (
    <div className="containerForm">
      <h3>Petición encontre mi mascota</h3>
      <h5>fecha: {formDate}</h5>
      <h5>
        mascota: {pet.name && capitalize(pet.name)};{" "}
        {pet.pet === "dog" ? "perro" : pet.pet === "cat" ? "gato" : null}
      </h5>
      <Link to={`/petdetail/${petId}`}>
        <button>ver mascota</button>
      </Link>
      <h5>Estado de la peticion: {formState === 'pending' ? 'en revisión' : formState === 'acepted' ? 'aceptado' : formState === 'rejected' ? 'rechazado' : null}</h5>
    </div>
  );
}

export function PetitionGets({ formDate, petId, state,formState }) {
  const [pet, setPet] = useState({});

  useEffect(() => {
    axios.get(`/pet/${petId}`).then((r) => setPet(r.data));
    //console.log('PetitionGets', pet)
  }, []);

  return (
    <div className="containerForm">
      {state === "adopted" ? (
        <h3>Petición para adoptar</h3>
      ) : state === "transit" ? (
        <h3>Petición para hogar transito</h3>
      ) : (
        <h3>Algo anda mal con el state</h3>
      )}
      <h5>fecha: {formDate}</h5>
      <h5>
        mascota: {pet.name && capitalize(pet.name)};{" "}
        {pet.pet === "dog" ? "perro" : pet.pet === "cat" ? "gato" : null}
      </h5>
      <Link to={`/petdetail/${petId}`}>
        <button>ver mascota</button>
      </Link>
      <h5>Estado de la peticion: {formState === 'pending' ? 'en revisión' : formState === 'acepted' ? 'aceptado' : formState === 'rejected' ? 'rechazado' : null}</h5>
    </div>
  );
}

export function PetitionLoads({ formDate, state, petName, type, formState }) {

  return (
    <div className="containerForm">
      {state === "adopt" ? (
        <h3>Petición para cargar mascota y dar en adopcion</h3>
      ) : state === "lost" ? (
        <h3>Petición para cargar mascota encontrada</h3>
      ) : null}
      <h5>fecha: {formDate}</h5>
      <h5>
        mascota: {petName && capitalize(petName)};{" "}
        {type === "dog" ? "perro" : type === "cat" ? "gato" : null}
      </h5>
      {/* <Link to={`/petdetail/${petId ? petId : "9999999"}`}>
        <button>ver mascota</button>
      </Link> */}
      <h5>Estado de la peticion: {formState === 'pending' ? 'en revisión' : formState === 'acepted' ? 'aceptado' : formState === 'rejected' ? 'rechazado' : null}</h5>
    </div>
  );
}
