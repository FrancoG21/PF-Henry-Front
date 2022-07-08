import React from "react";
import styles from "./styles.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function capitalize(str) {
  return str.replace(/^\w/, (c) => c.toUpperCase());
}

const popUp1 = () => {
  Swal.fire("Mascota en adopcion");
};
const popUp2 = () => {
  Swal.fire("Mascota en transito");
};

export default function PetCard({ name, pet, state, id, image, actualPlace }) {
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
          state === "adopted" ? popUp1 : state === "transit" ? popUp2 : null
        }
      >
        ver mas
      </button>

      {state === "adopted" ? <button>seguimiento</button> : null}
    </div>
  );
}
