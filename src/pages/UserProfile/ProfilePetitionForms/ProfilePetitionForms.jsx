import React, {useEffect, useState} from "react";
import styles from "./styles.css";
import axios from 'axios'

export function PetitionGetLosts({ formDate, petId }) {
  const [pet, setPet] = useState({})

  useEffect(()=>{
    axios
      .get(`/pet/${petId}`)
      .then((r) => setPet(r.data));
      console.log('petPetitionGetLosts', pet)
  },[])

  return (
    <div className="containerForm">         
      <h3>Peticion encontre mi mascota</h3>
      <h5>fecha: {formDate}</h5>
      <h5>mascota: {pet.name}</h5>
      <h5>Estado de la peticion: </h5>
    </div>
  );
}

export function PetitionGets({ formDate, petId }) {
  const [pet, setPet] = useState({})

  useEffect(()=>{
    axios
      .get(`/pet/${petId}`)
      .then((r) => setPet(r.data));
      console.log('PetitionGets', pet)
  },[])

  return (
    <div className="containerForm">
      <h1>Adoptar mascota adopted or transit</h1>
      <h3>PetitionGets</h3>
      <h5>fecha: {formDate}</h5>
    </div>
  );
}

export function PetitionLoads({ formDate, petId }) {
  return (
    <div className="containerForm">
      <h1>Cargar mascota adopt or lost</h1>
      <h3>PetitionLoads</h3>
      <h5>fecha: {formDate}</h5>
    </div>
  );
}
