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
  const [flagDonations, setFlagDonations] = useState(false);

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
              <button onClick={handleClick3}>Mis donaciones: {0}</button>
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
                            />
                          ))
                        : null}
                      {petitionGets.length &&
                        petitionGets.map((p) => (
                          <PetitionGets
                            formDate={p.formDate}
                            petId={p.petId}
                            state={p.state}
                          />
                        ))}
                      {petitionGetLosts.length &&
                        petitionGetLosts.map((p) => (
                          <PetitionGetLosts
                            formDate={p.formDate}
                            petId={p.petId}
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
