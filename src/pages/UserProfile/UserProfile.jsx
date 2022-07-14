import React, { useEffect, useState, useReducer } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { useSelector } from "react-redux";
import axios from "axios";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import ProfilePetCard from "./PetCard/ProfilePetCard";
import Swal from "sweetalert2";
import {
  BackgroundProfile,
  ContainerContent,
  ContainerInfo,
  ContainerProfile,
  Email,
  ImageProfile,
  Name,
  TitleProfile,
  ButtonLink,
  ContainerDiv,
  ContainerPetitions,
  ContainerImage,
  ContainerText,
  Span,
  DivSpan,
  ButtonPassword,
  Admin,
  DivAdmin,
  IconAdmin,
  IconUser,
  ContainerSelect,
  Select,
  DivPets,
  DivCardCarrusel,
  Carrusel,
  TitleCardPets,
  DivCardPetition,
  Error,
} from "./StyledUserProfile";
import {
  PetitionGets,
  PetitionGetLosts,
  PetitionLoads,
} from "./ProfilePetitionForms/ProfilePetitionForms";
import DonationCard from "./DonationCard/DonationCard";
import BasicRating from "./Rating";

export default function UserProfile() {
  const [donationsUnique, setDonationsUnique] = useState([]);
  const [donationsSuscription, setDonationsSuscription] = useState([]);

  const [petsAdopted, setPetsAdopted] = useState([]);
  const [petsTransit, setPetsTransit] = useState([]);

  const [loadPetAdopt, setLoadPetAdopt] = useState([]);
  const [loadPetLost, setLoadPetLost] = useState([]);
  const [getAdopt, setGetAdopt] = useState([]);
  const [getTransit, setGetTransit] = useState([]);
  const [getItsMyPet, setGetItsMyPet] = useState([]);

  const [flagPet, setFlagPet] = useState("all");
  const [flagPetitions, setFlagPetitions] = useState("all");
  const [flagDonations, setFlagDonations] = useState("all");

  const [user, setUser] = useState(null);

  const callbackIn2 = async () => {
    const res = await axios.get(`/petitionGet/${user ? user.id : null}`);
    const resData = res.data;
    console.log("resData", resData);

    if (resData.Donations) {
      let normal = [];
      let suscripcion = [];
      for (let don of resData.Donations) {
        if (don.type === "regular_payment") {
          normal.push(don);
          /* setDonationsUnique((prevState) => [...prevState, don]); */
        }
        if (don.type === "suscripcion ") {
          suscripcion.push(don);
          /* setDonationsSuscription((prevState) => [...prevState, don]); */
        }
      }
      setDonationsUnique(() => normal);
      setDonationsSuscription(() => suscripcion);
    }
    if (resData.Pets) {
      let adoptados = [];
      let transitados = [];
      for (let pet of resData.Pets) {
        if (pet.state === "adopted") {
          adoptados.push(pet);
          /* setPetsAdopted((prevState) => [...prevState, pet]); */
        }
        if (pet.state === "transit") {
          transitados.push(pet);
          /* setPetsTransit((prevState) => [...prevState, pet]); */
        }
      }
      setPetsAdopted(() => adoptados);
      setPetsTransit(() => transitados);
    }

    if (resData.PetitionGetLosts) {
      setGetItsMyPet(resData.PetitionGetLosts);
    }

    if (resData.PetitionLoads) {
      let adopt = [];
      let lost = [];
      for (let petition of resData.PetitionLoads) {
        if (petition.state === "adopt") {
          adopt.push(petition);
          /* setLoadPetAdopt((prevState) => [...prevState, petition]); */
        }
        if (petition.state === "lost") {
          lost.push(petition);
          /* setLoadPetLost((prevState) => [...prevState, petition]); */
        }
      }
      setLoadPetAdopt(() => adopt);
      setLoadPetLost(() => lost);
    }

    if (resData.PetitionGets) {
      let transito = [];
      let getAdopt = [];
      for (let petition of resData.PetitionGets) {
        if (petition.state === "transit") {
          transito.push(petition);
          /* setGetTransit((prevState) => [...prevState, petition]); */
        }
        if (petition.state === "adopted") {
          getAdopt.push(petition);
          /* setGetAdopt((prevState) => [...prevState, petition]); */
        }
      }
      setGetTransit(() => transito);
      setGetAdopt(() => getAdopt);
    }
  };

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

  const callbackOut = () => {
    console.log("me fui");
    setGetItsMyPet([]);
    setLoadPetAdopt([]);
    setLoadPetLost([]);
    setGetAdopt([]);
    setGetTransit([]);
    setPetsAdopted([]);
    setPetsTransit([]);
    setFlagPet("all");
    setFlagPetitions("all");
    setFlagDonations("all");
    console.log("ya me re fui");
  };

  const popUpChangePassword = () => {
    Swal.fire({
      title: "Cambiar contraseña",
      html: `<input type="text" id="oldPassword" class="swal2-input" placeholder="Antigua contraseña">
      <input type="text" id="password1" class="swal2-input" placeholder="Nueva contraseña">
      <input type="text" id="password2" class="swal2-input" placeholder="Repetir contraseña">`,
      confirmButtonText: "Aceptar",
      focusConfirm: false,
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      cancelButtonColor: "#d33",
      preConfirm: () => {
        const oldPassword = Swal.getPopup().querySelector("#oldPassword").value;
        const password1 = Swal.getPopup().querySelector("#password1").value;
        const password2 = Swal.getPopup().querySelector("#password2").value;
        if (user.password && user.password !== oldPassword) {
          Swal.showValidationMessage(`Antigua contraseña no coincide`);
        }
        if (password1 !== password2) {
          Swal.showValidationMessage(`Las contraseñas no coinciden`);
        }
        if (!password1.length || !password2.length) {
          Swal.showValidationMessage(`Debes completar los campos`);
        }
      },
    }).then((result) => {
      //console.log('password1',  password1.value)
      if (result.isConfirmed) {
        axios
          .put(`/user/${user.id}`, { password: password1.value })
          .then(
            Swal.fire(
              "Excelente",
              "Tu contraseña ha sido cambiada correctamente",
              "success"
            ).then(() => refresh())
          )
          .catch((e) => {
            console.log(e);
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Algo salio mal",
            });
          });
      }
    });
  };

  const [ignore, forceUpdate] = useReducer((x) => x + 1, 0);
  function refresh() {
    forceUpdate();
  }

  useEffect(() => {
    callbackIn();
  }, [ignore]);

  useEffect(() => {
    callbackIn();
  }, []);

  useEffect(() => {
    callbackIn2();
  }, [user]);

  return (
    <BackgroundProfile>
      <div>
        {/*         {console.log("getItsMyPet", getItsMyPet)}
        {console.log("loadPetAdopt", loadPetAdopt)}
        {console.log("loadPetLost", loadPetLost)}
        {console.log("getAdopt", getAdopt)}
        {console.log("getTransit", getTransit)}
        {console.log("petsAdopted", petsAdopted)}
        {console.log("petsTransit", petsTransit)}
        {console.log(flagPet, flagPetitions, flagDonations)}
        {user ? console.log("user.password", user.password) : null} */}
        {console.log("donationsSuscription", donationsSuscription)}
        {console.log("donationsUnique", donationsUnique)}
      </div>
      <TitleProfile>Mi Perfil</TitleProfile>
      <ContainerProfile>
        <ContainerInfo>
          <ContainerImage>
            <ImageProfile
              src={
                user
                  ? user.picture
                  : "https://thumbs.dreamstime.com/b/dise%C3%B1o-de-la-lengua-de-programaci%C3%B3n-65093358.jpg"
              }
              alt={user ? user.name : "avatar"}
            />
          </ContainerImage>
          <ContainerText>
            <DivSpan>
              <Name>
                <Span>Nombre y Apellido :</Span>
                {user ? user.name + " " + user.lastname : null}
              </Name>
            </DivSpan>
            <Email>
              <Span>Email: </Span>
              {user ? user.email : null}
            </Email>
            <ButtonPassword onClick={popUpChangePassword}>
              Cambiar Contraseña
            </ButtonPassword>
            {user
              ? user.message === "password or mail incorrect" && (
                  <Name>Password or mail incorrect</Name>
                )
              : null}
          </ContainerText>
          <DivAdmin>
            <Admin>
              {user ? (
                user.rol === "user" ? (
                  <div>
                    Usuario <IconUser />
                  </div>
                ) : user.rol === "admin" ? (
                  <div>
                    Administrador <IconAdmin />
                  </div>
                ) : null
              ) : null}
              {user && user.rating ? (
                <BasicRating value={user.rating} />
              ) : (
                <BasicRating value={0} />
              )}
            </Admin>
          </DivAdmin>
        </ContainerInfo>
        <ContainerSelect>
          <Select
            defaultValue={"default"}
            onChange={(e) => setFlagPet(e.target.value)}
          >
            <option value="default" hidden>
              Filtrar mascotas
            </option>
            <option value="all">
              Todas {"("}
              {petsAdopted.length + petsTransit.length}
              {")"}
            </option>
            <option value="adopted">
              En Adopcion {"("}
              {petsAdopted.length}
              {")"}
            </option>
            <option value="transit">
              En Transito {"("}
              {petsTransit.length}
              {")"}
            </option>
          </Select>
          <Select
            defaultValue={"default"}
            onChange={(e) => setFlagPetitions(e.target.value)}
          >
            <option value="default" hidden>
              Filtrar peticiones
            </option>
            <option value="all">
              Todas {"("}
              {loadPetAdopt.length +
                loadPetLost.length +
                getAdopt.length +
                getTransit.length +
                getItsMyPet.length}
              {")"}
            </option>
            <option value="adopted">
              Adopciones {"("}
              {getAdopt.length}
              {")"}
            </option>
            <option value="transit">
              Hogar Transito {"("}
              {getTransit.length}
              {")"}
            </option>
            <option value="loadAdopt">
              Cargar y dar en adopcion {"("}
              {loadPetAdopt.length}
              {")"}
            </option>
            <option value="loadFound">
              Cargar mascota encontrada {"("}
              {loadPetLost.length}
              {")"}
            </option>
            <option value="found">
              Encontre mi mascota {"("}
              {getItsMyPet.length}
              {")"}
            </option>
          </Select>
          <Select
            defaultValue={"default"}
            onChange={(e) => setFlagDonations(e.target.value)}
          >
            <option value="default" hidden>
              Filtrar donaciones
            </option>
            <option value="all">
              Todas {"("}
              {donationsSuscription.length + donationsUnique.length}
              {")"}
            </option>
            <option value="suscription">
              Suscripcion {"("}
              {donationsSuscription.length}
              {")"}
            </option>
            <option value="unique">
              Unica {"("}
              {donationsUnique.length}
              {")"}
            </option>
          </Select>
        </ContainerSelect>
        <ContainerDiv>
          <TitleCardPets>Mis Mascotas:</TitleCardPets>
          <DivPets>
            <Splide
              options={{
                rewind: false,
                perPage: 4,
                perMove: 4,
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
              <Carrusel>
                {petsAdopted.length > 0 || petsTransit.length > 0 ? (
                  flagPet === "all" ? (
                    <DivCardCarrusel>
                      {petsAdopted.length > 0
                        ? petsAdopted.map((p, i) => (
                            <ProfilePetCard
                              name={p.name}
                              pet={p.pet}
                              breed={p.breed}
                              state={p.state}
                              castration={p.castration}
                              id={p.id}
                              image={p.image}
                              actualPlace={p.actualPlace}
                              key={"a" + i}
                              vaccinate={p.vaccinate}
                              size={p.size}
                              weight={p.weight}
                              gender={p.gender}
                              fur={p.fur}
                              refresh={refresh}
                            />
                          ))
                        : null}
                      {petsTransit.length > 0
                        ? petsTransit.map((p, i) => (
                            <ProfilePetCard
                              name={p.name}
                              pet={p.pet}
                              state={p.state}
                              id={p.id}
                              image={p.image}
                              actualPlace={p.actualPlace}
                              key={"b" + i}
                              castration={p.castration}
                              breed={p.breed}
                              vaccinate={p.vaccinate}
                              size={p.size}
                              weight={p.weight}
                              gender={p.gender}
                              fur={p.fur}
                              refresh={refresh}
                            />
                          ))
                        : null}
                    </DivCardCarrusel>
                  ) : flagPet === "adopted" ? (
                    <DivCardCarrusel>
                      {petsAdopted.length > 0 ? (
                        petsAdopted.map((p, i) => (
                          <ProfilePetCard
                            name={p.name}
                            pet={p.pet}
                            state={p.state}
                            id={p.id}
                            image={p.image}
                            actualPlace={p.actualPlace}
                            key={"c" + i}
                            castration={p.castration}
                            breed={p.breed}
                            vaccinate={p.vaccinate}
                            size={p.size}
                            weight={p.weight}
                            gender={p.gender}
                            fur={p.fur}
                            refresh={refresh}
                          />
                        ))
                      ) : (
                        <p>No tienes ningúna mascota de este tipo</p>
                      )}
                    </DivCardCarrusel>
                  ) : flagPet === "transit" ? (
                    <DivCardCarrusel>
                      {petsTransit.length > 0 ? (
                        petsTransit.map((p, i) => (
                          <ProfilePetCard
                            name={p.name}
                            pet={p.pet}
                            state={p.state}
                            id={p.id}
                            image={p.image}
                            actualPlace={p.actualPlace}
                            key={"d" + i}
                            castration={p.castration}
                            breed={p.breed}
                            vaccinate={p.vaccinate}
                            size={p.size}
                            weight={p.weight}
                            gender={p.gender}
                            fur={p.fur}
                            refresh={refresh}
                          />
                        ))
                      ) : (
                        <p>No tienes ningúna mascota de este tipo</p>
                      )}
                    </DivCardCarrusel>
                  ) : null
                ) : (
                  <Error>No tienes ninguna mascota</Error>
                )}
              </Carrusel>
            </Splide>
          </DivPets>
          <ContainerPetitions>
            <TitleCardPets>Mis Peticiones:</TitleCardPets>
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
              <Carrusel>
                {loadPetAdopt.length +
                  loadPetLost.length +
                  getAdopt.length +
                  getTransit.length +
                  getItsMyPet.length >
                0 ? (
                  flagPetitions === "all" ? (
                    <DivCardPetition>
                      {loadPetAdopt.length > 0
                        ? loadPetAdopt.map((p, i) => (
                            <PetitionLoads
                              formDate={p.formDate}
                              petId={p.petId}
                              state={p.state}
                              petName={p.name}
                              type={p.pet}
                              formState={p.formState}
                              petImg={p.image}
                              formId={p.id}
                              key={"e" + i}
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
                              refresh={refresh}
                            />
                          ))
                        : null}
                      {loadPetLost.length > 0
                        ? loadPetLost.map((p, i) => (
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
                              refresh={refresh}
                            />
                          ))
                        : null}
                      {getAdopt.length > 0
                        ? getAdopt.map((p, i) => (
                            <PetitionGets
                              formDate={p.formDate}
                              petId={p.petId}
                              state={p.state}
                              formState={p.formState}
                              formId={p.id}
                              key={"g" + i}
                              actualPlace={p.actualPlace}
                              adaptationTime={p.adaptationTime}
                              adoptedPetAloneMoments={p.adoptedPetAloneMoments}
                              adoptedPetPlace={p.adoptedPetPlace}
                              adoptedPetSleepingSpace={
                                p.adoptedPetSleepingSpace
                              }
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
                              refresh={refresh}
                            />
                          ))
                        : null}
                      {getTransit.length > 0
                        ? getTransit.map((p, i) => (
                            <PetitionGets
                              formDate={p.formDate}
                              petId={p.petId}
                              state={p.state}
                              formState={p.formState}
                              formId={p.id}
                              key={"h" + i}
                              actualPlace={p.actualPlace}
                              adaptationTime={p.adaptationTime}
                              adoptedPetAloneMoments={p.adoptedPetAloneMoments}
                              adoptedPetPlace={p.adoptedPetPlace}
                              adoptedPetSleepingSpace={
                                p.adoptedPetSleepingSpace
                              }
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
                              refresh={refresh}
                            />
                          ))
                        : null}
                      {getItsMyPet.length > 0
                        ? getItsMyPet.map((p, i) => (
                            <PetitionGetLosts
                              formDate={p.formDate}
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
                              refresh={refresh}
                            />
                          ))
                        : null}
                    </DivCardPetition>
                  ) : flagPetitions === "adopted" ? (
                    <DivCardPetition>
                      {getAdopt.length > 0 ? (
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
                            refresh={refresh}
                          />
                        ))
                      ) : (
                        <Error>No posees peticiones de este tipo</Error>
                      )}
                    </DivCardPetition>
                  ) : flagPetitions === "transit" ? (
                    <DivCardPetition>
                      {getTransit.length > 0 ? (
                        getTransit.map((p, i) => (
                          <PetitionGets
                            formDate={p.formDate}
                            petId={p.petId}
                            state={p.state}
                            formState={p.formState}
                            formId={p.id}
                            key={"k" + i}
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
                            refresh={refresh}
                          />
                        ))
                      ) : (
                        <Error>No posees peticiones de este tipo</Error>
                      )}
                    </DivCardPetition>
                  ) : flagPetitions === "loadAdopt" ? (
                    <DivCardPetition>
                      {loadPetAdopt.length > 0 ? (
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
                            key={"l" + i}
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
                            refresh={refresh}
                          />
                        ))
                      ) : (
                        <Error>No posees peticiones de este tipo</Error>
                      )}
                    </DivCardPetition>
                  ) : flagPetitions === "loadFound" ? (
                    <DivCardPetition>
                      {loadPetLost.length > 0 ? (
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
                            key={"m" + i}
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
                            refresh={refresh}
                          />
                        ))
                      ) : (
                        <Error>No posees peticiones de este tipo</Error>
                      )}
                    </DivCardPetition>
                  ) : flagPetitions === "found" ? (
                    <DivCardPetition>
                      {getItsMyPet.length > 0 ? (
                        getItsMyPet.map((p, i) => (
                          <PetitionGetLosts
                            formDate={p.formDate}
                            petId={p.petId}
                            formState={p.formState}
                            formId={p.id}
                            key={"n" + i}
                            userMovility={p.userMovility}
                            tel={p.tel}
                            originalName={p.originalName}
                            lostZone={p.lostZone}
                            image={p.image}
                            getReason={p.getReason}
                            refresh={refresh}
                          />
                        ))
                      ) : (
                        <Error>No posees peticiones de este tipo</Error>
                      )}
                    </DivCardPetition>
                  ) : null
                ) : (
                  <Error>No posees ninguna peticion</Error>
                )}
              </Carrusel>
            </Splide>
          </ContainerPetitions>

          <div>
            <TitleCardPets>Mis Donaciones:</TitleCardPets>
          </div>
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
            <Carrusel>
              <div>
                {flagDonations === "all" ? (
                  <DivCardPetition>
                    {" "}
                    {donationsUnique.length + donationsSuscription.length > 0 ? (
                      donationsUnique.length > 0 ? (
                        donationsUnique.map((d, i) => (
                          <DonationCard
                            key={"o" + i}
                            amount={d.amount}
                            date={d.date}
                            type={d.type}
                            id={d.id}
                            refresh={refresh}
                          />
                        ))
                      ) : donationsSuscription.length > 0 ? (
                        donationsSuscription.map((d, i) => (
                          <DonationCard
                            key={"p" + i}
                            amount={d.amount}
                            date={d.date}
                            type={d.type}
                            id={d.id}
                            refresh={refresh}
                          />
                        ))
                      ) : null
                    ) : (
                      <p>No hay donaciones</p>
                    )}
                  </DivCardPetition>
                ) : flagDonations === "suscription" ? (
                  <DivCardPetition>
                    {donationsSuscription.length > 0 ? (
                      donationsSuscription.map((d, i) => (
                        <DonationCard
                          amount={d.amount}
                          key={"q" + i}
                          date={d.date}
                          type={d.type}
                          id={d.id}
                          refresh={refresh}
                        />
                      ))
                    ) : (
                      <Error>No posees donaciones de este tipo</Error>
                    )}
                  </DivCardPetition>
                ) : flagDonations === "unique" ? (
                  <DivCardPetition>
                    {donationsUnique.length > 0 ? (
                      donationsUnique.map((d, i) => (
                        <DonationCard
                          amount={d.amount}
                          key={"r" + i}
                          date={d.date}
                          type={d.type}
                          id={d.id}
                          refresh={refresh}
                        />
                      ))
                    ) : (
                      <Error>No posees donaciones de este tipo</Error>
                    )}
                  </DivCardPetition>
                ) : (
                  <Error>No posees donaciones</Error>
                )}
              </div>
            </Carrusel>
          </Splide>
        </ContainerDiv>
      </ContainerProfile>
    </BackgroundProfile>
  );
}
