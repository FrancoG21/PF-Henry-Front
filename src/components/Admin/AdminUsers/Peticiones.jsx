import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {
  PetitionGets,
  PetitionGetLosts,
  PetitionLoads
} from "./ProfilePetitionForms";
const Peticiones = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  // codigo de Matifa
  const [loadPetAdopt, setLoadPetAdopt] = useState([]);
  const [loadPetLost, setLoadPetLost] = useState([]);
  const [getAdopt, setGetAdopt] = useState([]);
  const [getTransit, setGetTransit] = useState([]);
  const [getItsMyPet, setGetItsMyPet] = useState([]);

  const callbackIn = async () => {
    try {
      console.log("entree");

      const { data } = await axios.get(
        "/user/" + JSON.parse(localStorage.getItem("userInfo"))
      );
      setUser(data);
      console.log("termine de entrar");
    } catch (e) {
      console.log("error al entrar");
      console.log(e);
    }
  };

  const callbackIn2 = async () => {
    const res = await axios.get(`/petitionGet/${user ? user.id : null}`);
    const resData = res.data;
    console.log("resData", resData);

    if (resData.PetitionGetLosts) {
      setGetItsMyPet(resData.PetitionGetLosts);
    }
    if (resData.PetitionLoads) {
      for (let petition of resData.PetitionLoads) {
        if (petition.state === "adopt") {
          setLoadPetAdopt(prevState => [...prevState, petition]);
        }
        if (petition.state === "lost") {
          setLoadPetLost(prevState => [...prevState, petition]);
        }
      }
    }
    if (resData.PetitionGets) {
      for (let petition of resData.PetitionGets) {
        if (petition.state === "transit") {
          setGetTransit(prevState => [...prevState, petition]);
        }
        if (petition.state === "adopted") {
          setGetAdopt(prevState => [...prevState, petition]);
        }
      }
    }
  };

  useEffect(() => {
    callbackIn();
  }, []);

  useEffect(() => {
    callbackIn2();
  }, [user]);


  return (
    <>
      <div>
      <Button variant="contained" size="medium">
        <Link to={'/admin/'}> volver </Link>
      </Button>
      
      </div>

      <div className="container">
        <div>
          <h1>Peticion de Adopcion</h1>
          {user &&
            getAdopt.map((p, i) => (
              <PetitionGets
                formDate={p.formDate}
                petId={p.petId}
                state={p.state}
                formState={p.formState}
                formId={p.id}
                key={"j" + i}
                actualPlace={p.actualPlace}
                adaptationTime={p.adaptationTime}
                adoptedPetAloneMoments={p.adoptedPetAloneMoments}
                adoptedPetPlace={p.adoptedPetPlace}
                adoptedPetSleepingSpace={p.adoptedPetSleepingSpace}
                adoptedPetWalkingInfo={p.adoptedPetWalkingInfo}
                familyRelation={p.familyRelation}
                familySize={p.familySize}
                getPetReason={p.getPetReason}
                openSpace={p.openSpace}
                otherPets={p.otherPets}
                otherPetsCastration={p.otherPetsCastration}
                otherPetsInfo={p.otherPetsInfo}
                otherPetsVacunation={p.otherPetsVacunation}
                rental={p.rental}
                tel={p.tel}
                transitPetPeriod={p.transitPetPeriod}
                userAge={p.userAge}
                userAgreement={p.userAgreement}
                userMovility={p.userMovility}
                userMovingIdea={p.userMovingIdea}
              />
            ))}
          {user &&
            getTransit.map((p, i) => (
              <PetitionGets
                formDate={p.formDate}
                petId={p.petId}
                state={p.state}
                formState={p.formState}
                formId={p.id}
                key={"j" + i}
                actualPlace={p.actualPlace}
                adaptationTime={p.adaptationTime}
                adoptedPetAloneMoments={p.adoptedPetAloneMoments}
                adoptedPetPlace={p.adoptedPetPlace}
                adoptedPetSleepingSpace={p.adoptedPetSleepingSpace}
                adoptedPetWalkingInfo={p.adoptedPetWalkingInfo}
                familyRelation={p.familyRelation}
                familySize={p.familySize}
                getPetReason={p.getPetReason}
                openSpace={p.openSpace}
                otherPets={p.otherPets}
                otherPetsCastration={p.otherPetsCastration}
                otherPetsInfo={p.otherPetsInfo}
                otherPetsVacunation={p.otherPetsVacunation}
                rental={p.rental}
                tel={p.tel}
                transitPetPeriod={p.transitPetPeriod}
                userAge={p.userAge}
                userAgreement={p.userAgreement}
                userMovility={p.userMovility}
                userMovingIdea={p.userMovingIdea}
              />
            ))}
        </div>
        <div>
          <h1>Peticion perdidos</h1>
          {user &&
            getItsMyPet.map((p, i) => (
              <PetitionGetLosts
                ormDate={p.formDate}
                petId={p.petId}
                formState={p.formState}
                formId={p.id}
                key={"i" + i}
                userMovility={p.userMovility}
                tel={p.tel}
                originalName={p.originalName}
                lostZone={p.lostZone}
                image={p.image}
                getReason={p.getReason}
              />
            ))}
        </div>
        <div>
          <h1>Load</h1>
          {user &&
            loadPetAdopt.map((p, i) => (
              <PetitionLoads
                formDate={p.formDate}
                petId={p.petId}
                state={p.state}
                petName={p.name}
                type={p.pet}
                formState={p.formState}
                petImg={p.image}
                formId={p.id}
                key={"f" + i}
                actualPlace={p.actualPlace}
                breed={p.breed}
                castration={p.castration}
                foundDate={p.foundDate}
                foundPlace={p.foundPlace}
                fur={p.fur}
                gender={p.gender}
                pet={p.pet}
                size={p.size}
                vaccinate={p.vaccinate}
                weight={p.weight}
                image={p.image}
              />
            ))}
          {user &&
            loadPetLost.map((p, i) => (
              <PetitionLoads
                formDate={p.formDate}
                petId={p.petId}
                state={p.state}
                petName={p.name}
                type={p.pet}
                formState={p.formState}
                petImg={p.image}
                formId={p.id}
                key={"f" + i}
                actualPlace={p.actualPlace}
                breed={p.breed}
                castration={p.castration}
                foundDate={p.foundDate}
                foundPlace={p.foundPlace}
                fur={p.fur}
                gender={p.gender}
                pet={p.pet}
                size={p.size}
                vaccinate={p.vaccinate}
                weight={p.weight}
                image={p.image}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Peticiones;
