import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
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
} from "./StyledUserProfile";
import {
  PetitionGets,
  PetitionGetLosts,
  PetitionLoads,
} from "./ProfilePetitionForms/ProfilePetitionForms";

export default function UserProfile() {
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

  const decodeToken = async () => {
    try {
      const res = await axios.get(
        "/user/" + JSON.parse(localStorage.getItem("userInfo"))
      );
      const resData = res.data;
      setUser(resData);
    } catch (e) {
      console.log(e);
    }
  };

  const callbackIn = async () => {
    try {
      console.log("entree");
      const res = await axios.get(`/petitionGet/${user.id}`);
      const resData = res.data;
      console.log("resData", resData);

      if (resData.Pets) {
        for (let pet of resData.Pets) {
          if (pet.state === "adopted") {
            setPetsAdopted((prevState) => [...prevState, pet]);
          }
          if (pet.state === "transit") {
            setPetsTransit((prevState) => [...prevState, pet]);
          }
        }
      }
      if (resData.PetitionGetLosts) {
        setGetItsMyPet(resData.PetitionGetLosts);
      }
      if (resData.PetitionLoads) {
        for (let petition of resData.PetitionLoads) {
          if (petition.state === "adopt") {
            setLoadPetAdopt((prevState) => [...prevState, petition]);
          }
          if (petition.state === "lost") {
            setLoadPetLost((prevState) => [...prevState, petition]);
          }
        }
      }
      if (resData.PetitionGets) {
        for (let petition of resData.PetitionGets) {
          if (petition.state === "transit") {
            setGetTransit((prevState) => [...prevState, petition]);
          }
          if (petition.state === "adopted") {
            setGetAdopt((prevState) => [...prevState, petition]);
          }
        }
      }

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
      html: `<input type="text" id="password1" class="swal2-input" placeholder="Nueva contraseña">
      <input type="text" id="password2" class="swal2-input" placeholder="Repetir contraseña">`,
      confirmButtonText: "Aceptar",
      focusConfirm: false,
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      cancelButtonColor: "#d33",
      preConfirm: () => {
        const password1 = Swal.getPopup().querySelector("#password1").value;
        const password2 = Swal.getPopup().querySelector("#password2").value;
        if (password1 !== password2) {
          Swal.showValidationMessage(`Las contraseñas no coinciden`);
        }
        /* return { login: login, password: password }; */
      },
    }).then((result) => {
      if(result.isConfirmed){
        Swal.fire(
          "Excelente",
          "Tu contraseña ha sido cambiada correctamente",
          "success"
        );
      }
    });
  };

  useEffect(() => {
    decodeToken();
    callbackIn();

    return () => {
      callbackOut();
    };
  }, []);

  return (
    <BackgroundProfile>
      <div>
        {console.log("getItsMyPet", getItsMyPet)}
        {console.log("loadPetAdopt", loadPetAdopt)}
        {console.log("loadPetLost", loadPetLost)}
        {console.log("getAdopt", getAdopt)}
        {console.log("getTransit", getTransit)}
        {console.log("petsAdopted", petsAdopted)}
        {console.log("petsTransit", petsTransit)}
        {console.log(flagPet, flagPetitions, flagDonations)}
      </div>
      <ContainerProfile>
        <TitleProfile>Mi Perfil</TitleProfile>
        <ContainerInfo>
          <ImageProfile
            src="https://thumbs.dreamstime.com/b/dise%C3%B1o-de-la-lengua-de-programaci%C3%B3n-65093358.jpg"
            alt="avatar"
          />
          <Name>{user ? user.name + " " + user.lastname : null}</Name>
          <Email>{user ? user.email : null}</Email>
          <p>
            Rol:{" "}
            {user
              ? user.rol === "user"
                ? "usuaio"
                : user.rol === "admin"
                ? "administrador"
                : null
              : null}
          </p>
          <button onClick={popUpChangePassword}>cambiar contraseña</button>
          {user
            ? user.message === "password or mail incorrect" && (
                <Name>Password or mail incorrect</Name>
              )
            : null}
        </ContainerInfo>
        <div>
          <select
            defaultValue={"default"}
            onChange={(e) => setFlagPet(e.target.value)}
          >
            <option value="default" hidden>
              Filtrar mascotas
            </option>
            <option value="all">todo</option>
            <option value="adopted">en adopcion</option>
            <option value="transit">en transito</option>
          </select>
          <select
            defaultValue={"default"}
            onChange={(e) => setFlagPetitions(e.target.value)}
          >
            <option value="default" hidden>
              Filtrar peticiones
            </option>
            <option value="all">todo</option>
            <option value="adopted">adopciones</option>
            <option value="transit">hogar transito</option>
            <option value="loadAdopt">cargar y dar en adopcion</option>
            <option value="loadFound">cargar mascota encontrada</option>
            <option value="found">encontre mi mascota</option>
          </select>
          <select
            defaultValue={"default"}
            onChange={(e) => setFlagDonations(e.target.value)}
          >
            <option value="default" hidden>
              Filtrar donaciones
            </option>
            <option value="all">todo</option>
            <option value="suscription">suscripcion</option>
            <option value="unique">normal</option>
          </select>
        </div>
        <ContainerDiv>
          <div>
            <h3>
              Cantidad de mascotas: {petsAdopted.length + petsTransit.length}
            </h3>
            {petsAdopted.length > 0 || petsTransit.length > 0 ? (
              flagPet === "all" ? (
                <div>
                  {petsAdopted.map((p) => (
                    <ProfilePetCard
                      name={p.name}
                      pet={p.pet}
                      state={p.state}
                      id={p.id}
                      image={p.image}
                      actualPlace={p.actualPlace}
                      key={p.id}
                    />
                  ))}
                  {petsTransit.map((p) => (
                    <ProfilePetCard
                      name={p.name}
                      pet={p.pet}
                      state={p.state}
                      id={p.id}
                      image={p.image}
                      actualPlace={p.actualPlace}
                      key={"a" + p.id}
                    />
                  ))}
                </div>
              ) : flagPet === "adopted" ? (
                <div>
                  {petsAdopted.map((p) => (
                    <ProfilePetCard
                      name={p.name}
                      pet={p.pet}
                      state={p.state}
                      id={p.id}
                      image={p.image}
                      actualPlace={p.actualPlace}
                    />
                  ))}
                </div>
              ) : (
                flagPet === "transit" && (
                  <div>
                    {petsTransit.map((p) => (
                      <ProfilePetCard
                        name={p.name}
                        pet={p.pet}
                        state={p.state}
                        id={p.id}
                        image={p.image}
                        actualPlace={p.actualPlace}
                      />
                    ))}
                  </div>
                )
              )
            ) : (
              <p>No tienes ninguna mascota</p>
            )}
          </div>
          <ContainerPetitions>
            <h3>
              {" "}
              Cantidad de peticiones:{" "}
              {loadPetAdopt.length +
                loadPetLost.length +
                getAdopt.length +
                getTransit.length +
                getItsMyPet.length}
            </h3>
            {loadPetAdopt.length +
              loadPetLost.length +
              getAdopt.length +
              getTransit.length +
              getItsMyPet.length >
            0 ? (
              flagPetitions === "all" ? (
                <div>
                  {loadPetAdopt.length > 0
                    ? loadPetAdopt.map((p) => (
                        <PetitionLoads
                          formDate={p.formDate}
                          petId={p.petId}
                          state={p.state}
                          petName={p.name}
                          type={p.pet}
                          formState={p.formState}
                          petImg={p.image}
                        />
                      ))
                    : null}
                  {loadPetLost.length > 0
                    ? loadPetLost.map((p) => (
                        <PetitionLoads
                          formDate={p.formDate}
                          petId={p.petId}
                          state={p.state}
                          petName={p.name}
                          type={p.pet}
                          formState={p.formState}
                          petImg={p.image}
                        />
                      ))
                    : null}
                  {getAdopt.length > 0
                    ? getAdopt.map((p) => (
                        <PetitionGets
                          formDate={p.formDate}
                          petId={p.petId}
                          state={p.state}
                          formState={p.formState}
                        />
                      ))
                    : null}
                  {getTransit.length > 0
                    ? getTransit.map((p) => (
                        <PetitionGets
                          formDate={p.formDate}
                          petId={p.petId}
                          state={p.state}
                          formState={p.formState}
                        />
                      ))
                    : null}
                  {getItsMyPet.length > 0
                    ? getItsMyPet.map((p) => (
                        <PetitionGetLosts
                          formDate={p.formDate}
                          petId={p.petId}
                          formState={p.formState}
                        />
                      ))
                    : null}
                </div>
              ) : flagPetitions === "adopted" ? (
                <div>
                  {getAdopt.length > 0 ? (
                    getAdopt.map((p) => (
                      <PetitionGets
                        formDate={p.formDate}
                        petId={p.petId}
                        state={p.state}
                        formState={p.formState}
                      />
                    ))
                  ) : (
                    <div>No posees peticiones de este tipo</div>
                  )}
                </div>
              ) : flagPetitions === "transit" ? (
                <div>
                  {getTransit.length > 0 ? (
                    getTransit.map((p) => (
                      <PetitionGets
                        formDate={p.formDate}
                        petId={p.petId}
                        state={p.state}
                        formState={p.formState}
                      />
                    ))
                  ) : (
                    <div>No posees peticiones de este tipo</div>
                  )}
                </div>
              ) : flagPetitions === "loadAdopt" ? (
                <div>
                  {loadPetAdopt.length > 0 ? (
                    loadPetAdopt.map((p) => (
                      <PetitionLoads
                        formDate={p.formDate}
                        petId={p.petId}
                        state={p.state}
                        petName={p.name}
                        type={p.pet}
                        formState={p.formState}
                        petImg={p.image}
                      />
                    ))
                  ) : (
                    <div>No posees peticiones de este tipo</div>
                  )}
                </div>
              ) : flagPetitions === "loadFound" ? (
                <div>
                  {loadPetLost.length > 0 ? (
                    loadPetLost.map((p) => (
                      <PetitionLoads
                        formDate={p.formDate}
                        petId={p.petId}
                        state={p.state}
                        petName={p.name}
                        type={p.pet}
                        formState={p.formState}
                        petImg={p.image}
                      />
                    ))
                  ) : (
                    <div>No posees peticiones de este tipo</div>
                  )}
                </div>
              ) : flagPetitions === "found" ? (
                <div>
                  {getItsMyPet.length > 0 ? (
                    getItsMyPet.map((p) => (
                      <PetitionGetLosts
                        formDate={p.formDate}
                        petId={p.petId}
                        formState={p.formState}
                      />
                    ))
                  ) : (
                    <div>No posees peticiones de este tipo</div>
                  )}
                </div>
              ) : null
            ) : (
              <p>No posees ninguna peticion</p>
            )}
          </ContainerPetitions>
          <h3>
            Tipo de donaciones:{" "}
            {flagDonations === "all"
              ? "todo"
              : flagDonations === "suscription"
              ? "suscripcion"
              : flagDonations === "unique"
              ? "normal"
              : null}
          </h3>
        </ContainerDiv>
      </ContainerProfile>
    </BackgroundProfile>
  );
}

/*  Swal.fire({
  position: 'center',
  icon: 'success',
  title: 'Sesion iniciada!',
  showConfirmButton: true,
  //timer: 3000
}) 
.then(()=>{window.location.replace('https://www.instagram.com')}) */
