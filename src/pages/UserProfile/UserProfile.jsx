import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import ProfilePetCard from "./PetCard/ProfilePetCard";
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
} from "./StyledUserProfile";
import Swal from "sweetalert2";
import {
  PetitionGets,
  PetitionGetLosts,
  PetitionLoads,
} from "./ProfilePetitionForms/ProfilePetitionForms";


export default function UserProfile() {
  //const [data, setData] = useState({})
  const [pets, setPets] = useState([]);
  const [petitionGetLosts, setPetitionGetLosts] = useState([]);
  const [petitionGets, setPetitionGets] = useState([]);
  const [petitionLoads, setPetitionLoads] = useState([]);

  const [flagPets, setFlagPets] = useState(false);
  const [flagPetitions, setFlagPetitions] = useState(false);
  const [flagDonations, setFlagDonations] = useState(false);
  const [user, setUser] = useState(null)

  useEffect(()=>{
      axios.get('/user/' + JSON.parse(localStorage.getItem("userInfo"))).then(r=>{
          setUser(r.data)
          console.log(r.data)
      }, error => {
          console.log(error)
      })
  },[])

  const callbackIn = async () => {
    try {
     // console.log("try");
      const res = await axios.get(`/petitionGet/${user.id}`);
      const resData = res.data;
      console.log(resData);
      if(resData !== 'no se encontraron peticiones.'){
      resData.Pets && setPets(resData.Pets);
      resData.PetitionGetLosts && setPetitionGetLosts(resData.PetitionGetLosts);
      resData.PetitionGets && setPetitionGets(resData.PetitionGets);
      resData.PetitionLoads && setPetitionLoads(resData.PetitionLoads);
      }
    } catch (e) {
      console.log("catch");
      console.log(e);
    }
  };

  const callbackOut = () => {
    setPets([]);
    setPetitionGetLosts([]);
    setPetitionGets([]);
    setPetitionLoads([]);
    setFlagPets(false);
    setFlagPetitions(false);
    setFlagDonations(false)
  };

  useEffect(() => {
    callbackIn();
    

     /*  Swal.fire({
  position: 'center',
  icon: 'success',
  title: 'Sesion iniciada!',
  showConfirmButton: true,
  //timer: 3000
}) 
.then(()=>{window.location.replace('https://www.instagram.com')}) */

    return () => {
      callbackOut();
    };
  }, [user]);

  const handleClick1 = () => {
    setFlagPets(true);
    setFlagPetitions(false);
    setFlagDonations(false);
  };

  const handleClick2 = () => {
    setFlagPetitions(true);
    setFlagPets(false);
    setFlagDonations(false);
  };

  const handleClick3 = () => {
    setFlagDonations(true);
    setFlagPets(false);
    setFlagPetitions(false);
  };

  return (
    <BackgroundProfile>
      <ContainerProfile>
        <TitleProfile>Mi Perfil</TitleProfile>
        <ContainerContent>
          {console.log("pets", pets)}
          {console.log("petitionGetLosts", petitionGetLosts)}
          {console.log("petitionGets", petitionGets)}
          {console.log("petitionLoads", petitionLoads)}
          {console.log(flagPets, flagPetitions, flagDonations)}
          {user && user ? (
            <div>
              <ContainerInfo>
                {/* <Image src={user.picture} alt='avatar profile'/> */}
                <ImageProfile
                  src="https://thumbs.dreamstime.com/b/dise%C3%B1o-de-la-lengua-de-programaci%C3%B3n-65093358.jpg"
                  alt="avatar"
                />
                <Name>{user.name + " " + user.lastname}</Name>
                <Email>{user.email}</Email>
                <p>Rol: {user.rol === 'user' ? 'usuaio' : user.rol === 'admin' ? 'administrador' : null}</p>
                {/* <h1>id: {user.id}</h1>
                <h1>password: {user.password}</h1> */}
                {user.message === 'password or mail incorrect' && <Name>Password or mail incorrect</Name>}
              </ContainerInfo>
              <div>
                <ButtonLink onClick={handleClick1}>
                  Mis mascotas: {pets && pets.length }
                </ButtonLink>
                <ButtonLink onClick={handleClick2}>
                  Mis peticiones:{" "}
                  {petitionGetLosts && petitionGets && petitionLoads && petitionGetLosts.length +
                    petitionGets.length +
                    petitionLoads.length}
                </ButtonLink>
                <ButtonLink onClick={handleClick3}>
                  Mis donaciones: {0}
                </ButtonLink>
              </div>
              <div>
                {flagPets ? (
                  pets.length ? (
                    pets.map((p) => (
                      <ProfilePetCard
                        name={p.name}
                        pet={p.pet}
                        state={p.state}
                        id={p.id}
                        image={p.image}
                        actualPlace={p.actualPlace}
                      />
                    ))
                  ) : (
                    <h1>No posees ninguna mascotas todavia</h1>
                  )
                ) : null}
                {flagPetitions ? (
                  petitionGetLosts.length +
                    petitionGets.length +
                    petitionLoads.length >
                  0 ? (
                    <div>
                      {petitionLoads.length
                        ? petitionLoads.map((p) => (
                            <PetitionLoads
                              formDate={p.formDate}
                              petId={p.petId}
                              state={p.state}
                              petName={p.name}
                              type={p.pet}
                              formState={p.formState}
                            />
                          ))
                        : null}
                      {petitionGets.length &&
                        petitionGets.map((p) => (
                          <PetitionGets
                            formDate={p.formDate}
                            petId={p.petId}
                            state={p.state}
                            formState={p.formState}
                          />
                        ))}
                      {petitionGetLosts.length &&
                        petitionGetLosts.map((p) => (
                          <PetitionGetLosts
                            formDate={p.formDate}
                            petId={p.petId}
                            formState={p.formState}
                          />
                        ))}
                    </div>
                  ) : (
                    <h1>No posees peticiones todavia</h1>
                  )
                ) : null}
                {flagDonations && <h1>Mis donaciones</h1>}
              </div>
            </div>
          ) : (
            <p>User Not Defined</p>
          )}
        </ContainerContent>
      </ContainerProfile>
    </BackgroundProfile>
  );
}
