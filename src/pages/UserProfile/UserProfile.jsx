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
} from "./StyledUserProfile";
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
  const user = useSelector((state) => state.usuario);
  

  const [flagPets, setFlagPets] = useState(false);
  const [flagPetitions, setFlagPetitions] = useState(false);

  const callbackIn = async () => {
    try {
      console.log("try");
      const res = await axios.get(`/petitionGet/${user.message.id}`);
      const resData = res.data;
      console.log(res);
      setPets(resData.Pets);
      setPetitionGetLosts(resData.PetitionGetLosts);
      setPetitionGets(resData.PetitionGets);
      setPetitionLoads(resData.PetitionLoads);
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
  };

  useEffect(() => {
    callbackIn();

    return () => {
      callbackOut();
    };
  }, [user]);

  const handleClick1 = () => {
    setFlagPets(true);
    setFlagPetitions(false);
  };

  const handleClick2 = () => {
    setFlagPets(false);
    setFlagPetitions(true);
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
          {user && user ? (
            <div>
              <ContainerInfo>
                {/* <Image src={user.message.picture} alt='avatar profile'/> */}
                <ImageProfile
                  src="https://thumbs.dreamstime.com/b/dise%C3%B1o-de-la-lengua-de-programaci%C3%B3n-65093358.jpg"
                  alt="avatar"
                />
                <Name>{user.message.name}</Name>
                <Email>{user.message.email}</Email>
                <h1>id: {user.message.id}</h1>
                <h1>password: {user.message.password}</h1>
              </ContainerInfo>
              <button onClick={handleClick1}>
                Mis mascotas: {pets.length}
              </button>
              <button onClick={handleClick2}>
                Mis peticiones:{" "}
                {petitionGetLosts.length +
                  petitionGets.length +
                  petitionLoads.length}
              </button>
              <div>
                {flagPets
                  ? pets.map((p) => (
                      <ProfilePetCard
                        name={p.name}
                        pet={p.pet}
                        state={p.state}
                        id={p.id}
                        image={p.image}
                        actualPlace={p.actualPlace}
                      />
                    ))
                  : null}
                {flagPetitions ? (
                  <div>
                    {petitionLoads.length
                      ? petitionLoads.map((p) => (
                          <PetitionLoads
                            formDate={p.formDate}
                            petId={p.petId}
                            state={p.state}
                            petName={p.name}
                            type={p.pet}
                          />
                        ))
                      : null}
                    {petitionGets.length
                      ? petitionGets.map((p) => (
                          <PetitionGets
                            formDate={p.formDate}
                            petId={p.petId}
                            state={p.state}
                          />
                        ))
                      : null}
                    {petitionGetLosts.length
                      ? petitionGetLosts.map((p) => (
                          <PetitionGetLosts
                            formDate={p.formDate}
                            petId={p.petId}
                          />
                        ))
                      : null}
                  </div>
                ) : null}
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
