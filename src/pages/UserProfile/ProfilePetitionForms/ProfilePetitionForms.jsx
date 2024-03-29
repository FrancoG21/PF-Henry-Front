import React, { useEffect, useState } from "react";
import styles from "./styles.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { ButtonPetition, ContainerForm, Sub } from "./StyledProfilePetitionForrms";

function capitalize(str) {
  return str.replace(/^\w/, (c) => c.toUpperCase());
  // return str;
}

const popUpDeletePetition = (formId, from, refresh) => {
  Swal.fire({
    title: "Esta seguro?",
    text: "No podra revertir los cambios!",
    icon: "warning",
    showCancelButton: true,
    cancelButtonText: "Cancelar",
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Eliminar",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        "Eliminado",
        "Tu peticion ha sido eliminada correctamente",
        "success"
      )
      .then(()=>{
        if (from === "PetitionGetLosts") {
          axios.delete(`/petitionGet/deleteLost/${formId}`);
          refresh()
        }
        if (from === "PetitionGets") {
          axios.delete(`/petitionGet/delete/${formId}`);
          refresh()
        }
        if (from === "PetitionLoads") {
          axios.delete(`/petitionLoad/${formId}`);
          refresh()
        }
      })
    }
  });
};

export function PetitionGetLosts({
  formDate,
  petId,
  formState,
  formId,
  userMovility,
  tel,
  originalName,
  lostZone,
  image,
  getReason,
  refresh
}) {
  const [pet, setPet] = useState({});

  useEffect(() => {
    axios.get(`/pet/${petId}`).then((r) => setPet(r.data));
    //console.log('petPetitionGetLosts', pet)
  }, []);

  const from = "PetitionGetLosts";

  const fotos = () => {
    return image.map((i) => <img src={i} alt={originalName} />);
  };

  const popUp1 = () => {
    Swal.fire({
      title: `Peticion encontre mi mascota`,
      html: `        
        <p><b>Fecha de la peticion:</b> ${formDate}</p>
        <p><b>Mascota elegida:</b> ${capitalize(pet.name)}</p>
        <img src=${pet.image} alt=${pet.name} height='200px' width='200px' />
        <p>
        ${pet.pet === "dog" ? "Perro" : pet.pet === "cat" ? "Gato" : null} 
        ${capitalize(pet.breed)}, 
        ${
          pet.gender === "male"
            ? "macho"
            : pet.gender === "female"
            ? "hembra"
            : pet.gender === "unknown"
            ? "no se sabe"
            : null
        }
        </p>
        <p><b>¿Porque cree que es su mascota?</b> </br>${getReason}</p>
        <p><b>¿En que zona se le perdio?</b> </br> ${lostZone}</p>
        <p><b>¿A que nombre responde la mascota?</b> </br> ${originalName}</p>
        <p><b>Imagenes cargadas:</b></p>
        <img src=${
          image[0]
        } alt=${originalName}  height='150px' width='150px'/> 
        <p><b>Telefono: </b>${tel}</p>  
        <p><b>¿Tiene movilidad para buscar la mascota?</b> </br> ${
          userMovility === "yes" ? "Si" : userMovility === "no" ? "No" : null
        }</p>    
      `,
    });
  };

  return (
    <ContainerForm>
      <Sub>Petición encontre mi mascota</Sub>
      {formState === "pending" && (
        <ButtonPetition onClick={() => popUpDeletePetition(formId, from, refresh)}>
          Eliminar Peticion
        </ButtonPetition>
      )}
      <ButtonPetition onClick={popUp1}>ver mas</ButtonPetition>
      <Sub>Fecha: {formDate}</Sub>
      <Sub>
        Mascota: {pet.name && capitalize(pet.name)};{" "}
        {pet.pet === "dog" ? "perro" : pet.pet === "cat" ? "gato" : null}
      </Sub>
      {/*  <Link to={`/petdetail/${petId}`}>
        <button>ver mascota</button>
      </Link> */}
      <Sub>
        Estado de la peticion:{" "}
        {formState === "pending"
          ? "en revisión"
          : formState === "acepted"
          ? "aceptado"
          : formState === "rejected"
          ? "rechazado"
          : null}
      </Sub>
      <img src={pet.image} alt={pet.name} width="80px" height="80px" />
    </ContainerForm>
  );
}

export function PetitionGets({
  formDate,
  petId,
  state,
  formState,
  formId,
  actualPlace,
  adaptationTime,
  adoptedPetAloneMoments,
  adoptedPetPlace,
  adoptedPetSleepingSpace,
  adoptedPetWalkingInfo,
  familyRelation,
  familySize,
  getPetReason,
  openSpace,
  otherPets,
  otherPetsInfo,
  otherPetsCastration,
  otherPetsVacunation,
  rental,
  tel,
  transitPetPeriod,
  userAge,
  userAgreement,
  userMovility,
  userMovingIdea,
  refresh
}) {
  const [pet, setPet] = useState({});

  const popUp2 = () => {
    Swal.fire({
      title: `Petición para adoptar`,
      html: `        
        <p><b>Fecha de la peticion:</b> ${formDate}</p>
        <p><b>Mascota elegida:</b> ${capitalize(pet.name)}</p>
        <img src=${pet.image} alt=${pet.name} height='200px' width='200px' />
        <p>
        ${pet.pet === "dog" ? "Perro" : pet.pet === "cat" ? "Gato" : null} 
        ${capitalize(pet.breed)}, 
        ${
          pet.gender === "male"
            ? "macho"
            : pet.gender === "female"
            ? "hembra"
            : pet.gender === "unknown"
            ? "no se sabe"
            : null
        }
        </p>
        <p><b>Edad del adoptante: </b> ${userAge} años</p>
        <p><b>Teléfono: </b>${tel}</p>
        <p><b>Futuro domicilio de la mascota</b> </br> ${actualPlace.toString()}</p>
        <p><b>¿Cuántas personas viven en la casa?</b> </br> ${familySize} personas</p>
        <p><b>Composición del núcleo familiar</b> </br> ${familyRelation}</p>
        <p><b>¿Tiene otros animales?</b> ${
          otherPets === "true" ? "Si" : otherPets === "false" ? "No" : null
        }</p>
        <p><b>¿Nos cuenta un poco sobre ellos?</b> </br> ${
          otherPetsInfo ? otherPetsInfo : "-"
        }</p>
        <p><b>¿Estan castrados? </b> ${
          otherPetsCastration
            ? otherPetsCastration === "true"
              ? "Si"
              : otherPetsCastration === "false"
              ? "No"
              : "-"
            : "-"
        }</p>
        <p><b>¿Estan vacunados? </b> ${
          otherPetsVacunation
            ? otherPetsVacunation === "true"
              ? "Si"
              : otherPetsVacunation === "false"
              ? "No"
              : "-"
            : "-"
        }</p>
        <p><b>¿Porque eligio este animal en particular?</b> </br> ${getPetReason}</p>
        <p><b>¿Dónde vivira la mascota adoptada?</b> </br> ${adoptedPetPlace}</p>
        <p><b>¿Posee espacio al aire libre?</b> </br> ${openSpace}</p>
        <p><b>¿Son propietarios o alquilan?</b> ${
          rental === "tenant"
            ? "Alquilo"
            : rental === "owner"
            ? "Propietario"
            : null
        }</p>
        <p><b>¿Dónde dormirá el adoptado?</b> <br/> ${adoptedPetSleepingSpace}</p>
        <p><b>¿Estará sola? ¿Cuánto tiempo?</b> <br/> ${adoptedPetAloneMoments}</p>
        <p><b>¿Quién lo paseará? ¿Cuántas veces al día?</b> <br/> ${adoptedPetWalkingInfo}</p>
        <p><b>¿Si se muda que hará con la mascota?</b> <br/> ${userMovingIdea}</p>
        <p><b>¿Le gustaría tener un tiempo de adaptación?</b> <br/> ${
          adaptationTime === "yes"
            ? "Si"
            : adaptationTime === "no"
            ? "No"
            : adaptationTime === "maybe"
            ? "Tal vez"
            : ""
        }</p>
        <p><b>¿Tiene movilidad para buscar a la mascota?</b> </br> ${
          userMovility === "yes" ? "Si" : userMovility === "no" ? "No" : "-"
        }</p>
      `,
    });
  };

  const popUp3 = () => {
    Swal.fire({
      title: `Petición para adoptar`,
      html: `        
        <p><b>Fecha de la peticion:</b> ${formDate}</p>
        <p><b>Mascota elegida:</b> ${capitalize(pet.name)}</p>
        <img src=${pet.image} alt=${pet.name} height='200px' width='200px' />
        <p>
        ${pet.pet === "dog" ? "Perro" : pet.pet === "cat" ? "Gato" : null} 
        ${capitalize(pet.breed)}, 
        ${
          pet.gender === "male"
            ? "macho"
            : pet.gender === "female"
            ? "hembra"
            : pet.gender === "unknown"
            ? "no se sabe"
            : null
        }
        </p>
        <p><b>Edad del postulante: </b> ${userAge} años</p>
        <p><b>Teléfono: </b>${tel}</p>
        <p><b>Futuro domicilio de la mascota</b> </br> ${
          actualPlace ? actualPlace.toString() : ""
        }</p>
        <p><b>¿Cuántas personas viven en la casa?</b> </br> ${familySize} personas</p>
        <p><b>Composición del núcleo familiar</b> </br> ${familyRelation}</p>
        <p><b>¿Tiene otros animales?</b> ${
          otherPets === "true" ? "Si" : otherPets === "false" ? "No" : null
        }</p>
        <p><b>¿Nos cuenta un poco sobre ellos?</b> </br> ${
          otherPetsInfo ? otherPetsInfo : "-"
        }</p>
        <p><b>¿Estan castrados? </b> ${
          otherPetsCastration
            ? otherPetsCastration === "true"
              ? "Si"
              : otherPetsCastration === "false"
              ? "No"
              : "-"
            : "-"
        }</p>
        <p><b>¿Estan vacunados? </b> ${
          otherPetsVacunation
            ? otherPetsVacunation === "true"
              ? "Si"
              : otherPetsVacunation === "false"
              ? "No"
              : "-"
            : "-"
        }</p>
        
        <p><b>¿Dónde vivira la mascota en transito?</b> </br> ${adoptedPetPlace}</p>
        <p><b>¿Posee espacio al aire libre?</b> </br> ${openSpace}</p>
        <p><b>¿Son propietarios o alquilan?</b> ${
          rental === "tenant"
            ? "Alquilo"
            : rental === "owner"
            ? "Propietario"
            : null
        }</p>
        <p><b>¿Dónde dormirá la mascota?</b> <br/> ${adoptedPetSleepingSpace}</p>
        <p><b>¿Estará sola? ¿Cuánto tiempo?</b> <br/> ${adoptedPetAloneMoments}</p>
        <p><b>¿Quién lo paseará? ¿Cuántas veces al día?</b> <br/> ${adoptedPetWalkingInfo}</p>
        <p><b>¿Cuánto tiempo puede tener en tránsito la mascota?</b> </br> ${transitPetPeriod}</p>
        <p><b>¿Por qué deseas dar tránsito a un animal?</b> </br> ${getPetReason}</p>        
        <p><b>¿Le gustaría tener un tiempo de adaptación?</b> <br/> ${
          adaptationTime === "yes"
            ? "Si"
            : adaptationTime === "no"
            ? "No"
            : adaptationTime === "maybe"
            ? "Tal vez"
            : ""
        }</p>
        <p><b>¿Tiene movilidad para buscar a la mascota?</b> </br> ${
          userMovility === "yes" ? "Si" : userMovility === "no" ? "No" : "-"
        }</p>
        <p><b>¿Sos consciente que la responsabilidad de ser un hogar transitorio implica hacerse cargo de la alimentación y cuidados veterinarios del animal?</b> </br> ${
          userAgreement === "true"
            ? "Si"
            : userAgreement === "false"
            ? "No"
            : null
        }</p>
      `,
    });
  };

  useEffect(() => {
    axios.get(`/pet/${petId}`).then((r) => setPet(r.data));
    /* console.log("PetitionGets", pet); */
  }, []);

  const from = "PetitionGets";

  return (
    <ContainerForm>
      {state === "adopted" ? (
        <Sub>Petición para adoptar</Sub>
      ) : state === "transit" ? (
        <Sub>Petición para hogar transito</Sub>
      ) : null}
      {formState === "pending" && (
        <ButtonPetition onClick={() => popUpDeletePetition(formId, from, refresh)}>
          Eliminar Peticion
        </ButtonPetition>
      )}
      <ButtonPetition
        onClick={
          state === "adopted" ? popUp2 : state === "transit" ? popUp3 : null
        }
      >
        Ver mas
      </ButtonPetition>
      <Sub>Fecha: {formDate}</Sub>
      <Sub>
        Mascota: {pet.name && capitalize(pet.name)};{" "}
        {pet.pet === "dog" ? "perro" : pet.pet === "cat" ? "gato" : null}
      </Sub>
      <Sub>
        Estado de la peticion:{" "}
        {formState === "pending"
          ? "en revisión"
          : formState === "acepted"
          ? "aceptado"
          : formState === "rejected"
          ? "rechazado"
          : null}
      </Sub>
      <img src={pet.image} alt={pet.name} width="80px" height="80px" />
    </ContainerForm>
  );
}

export function PetitionLoads({
  formDate,
  state,
  petName,
  type,
  formState,
  petImg,
  formId,
  actualPlace,
  breed,
  castration,
  foundDate,
  foundPlace,
  fur,
  gender,
  pet,
  size,
  vaccinate,
  weight,
  image,
  refresh
}) {
  const from = "PetitionLoads";

  const popUp4 = () => {
    Swal.fire({
      title: `Petición para cargar mascota y dar en adopcion`,
      html: `        
        <p><b>Fecha de la peticion:</b> ${formDate}</p>
        <p><b>¿Qué quieres hacer?</b> </br> ${
          state === "adopt" ? "Dar una mascota en adopción" : null
        }</p>
        <p><b>Nombre de la mascota</b> </br> ${petName}</p>
        <img src=${image[0]} alt=${petName} height='200px' width='200px' />
        <p>
        ${pet === "dog" ? "Perro" : pet === "cat" ? "Gato" : null} 
        ${capitalize(breed)}, 
        ${
          gender === "male"
            ? "macho"
            : gender === "female"
            ? "hembra"
            : gender === "unknown"
            ? "no se sabe"
            : null
        }
        </p>
        <p><b>Pelaje:</b> ${
          fur === "short" ? "corto" : fur === "long" ? "largo" : null
        }</p>
        <p><b>Tamaño:</b> ${
          size === "small"
            ? "pequeño"
            : size === "medium"
            ? "mediano"
            : size === "big"
            ? "grande"
            : null
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
      `,
    });
  };
  const popUp5 = () => {
    Swal.fire({
      title: `Petición para cargar mascota encontrada`,
      html: `        
        <p><b>Fecha de la peticion:</b> ${formDate}</p>
        <p><b>¿Qué quieres hacer?</b> </br> ${
          state === "lost" ? "Cargar una mascota que encontraste" : null
        }</p>
        <p><b>Nombre de la mascota</b> </br> ${petName}</p>
        <img src=${image[0]} alt=${petName} height='200px' width='200px' />
        <p>
        ${pet === "dog" ? "Perro" : pet === "cat" ? "Gato" : null} 
        ${capitalize(breed)}, 
        ${
          gender === "male"
            ? "macho"
            : gender === "female"
            ? "hembra"
            : gender === "unknown"
            ? "no se sabe"
            : null
        }
        </p>
        <p><b>Pelaje:</b> ${
          fur === "short" ? "corto" : fur === "long" ? "largo" : null
        }</p>
        <p><b>Tamaño:</b> ${
          size === "small"
            ? "pequeño"
            : size === "medium"
            ? "mediano"
            : size === "big"
            ? "grande"
            : null
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
        <p><b>¿Cuándo la encontraste?</b> ${foundDate}</p>
        <p><b>¿Dónde la encontraste?</b> </br> ${foundPlace}</p>        
        <p><b>¿Dónde se encuentra actualmente la mascota ?</b> </br> ${actualPlace}</p>
      `,
    });
  };

  return (
    <ContainerForm>
      {state === "adopt" ? (
        <Sub>Petición para cargar mascota y dar en adopcion</Sub>
      ) : state === "lost" ? (
        <Sub>Petición para cargar mascota encontrada</Sub>
      ) : null}
      {formState === "pending" && (
        <ButtonPetition onClick={() => popUpDeletePetition(formId, from, refresh)}>
          Eliminar Peticion
        </ButtonPetition>
      )}
      <ButtonPetition
        onClick={state === "adopt" ? popUp4 : state === "lost" ? popUp5 : null}
      >
        Ver mas
      </ButtonPetition>
      <Sub>Fecha: {formDate}</Sub>
      <Sub>
        Mascota: {petName && capitalize(petName)};{" "}
        {type === "dog" ? "perro" : type === "cat" ? "gato" : null}
      </Sub>
      {/* <Link to={`/petdetail/${petId ? petId : "9999999"}`}>
        <button>ver mascota</button>
      </Link> */}
      <Sub>
        Estado de la peticion:{" "}
        {formState === "pending"
          ? "en revisión"
          : formState === "acepted"
          ? "aceptado"
          : formState === "rejected"
          ? "rechazado"
          : null}
      </Sub>
       {petImg.map((p, i) => (
        <img src={p} alt={petName} key={"a" + i} height="60px" />
      ))} 
    </ContainerForm>
  );
}
