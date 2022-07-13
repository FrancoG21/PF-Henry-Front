import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import {
  // ImageAbout,
  AboutSlide,
  BackgroundAbout,
  TitleAbout,
  Text,
  ContainerAbout,
  Container,
  SubtitleAbout,
  TextAbout,
  ImagePorta,
} from "./StyledAboutUs";
import CardAbout from "../../components/Users/CardAbout/CardAbout";

export default function About() {
  const data = [
    {
      name: "Ignacio Solá Zambrano",
      image:
        "https://media-exp2.licdn.com/dms/image/C4E03AQE4ZyZLwaLFkQ/profile-displayphoto-shrink_200_200/0/1637091260005?e=1662595200&v=beta&t=gqkUhMGe67ZFSFeUPfFlRTy89rkuAeju_iL3tFuSV9U",
      linkedIn: "https://www.linkedin.com/in/ignacio-sol%C3%A1-zambrano-8b1532222/",
      github: "https://github.com/ignacioSola",
      email:"ignaciojsolaz@gmail.com"
    },
    {
      name: "Franco Gimenez",
      image:
        "https://media-exp2.licdn.com/dms/image/C4E03AQGgYjGCCNGAag/profile-displayphoto-shrink_200_200/0/1575240142010?e=1662595200&v=beta&t=JyonSP7IfFt4ghQxok0J3-kxJeo48zp4MHafhVnATjU",
      linkedIn: "https://www.linkedin.com/in/franco-ramiro-gimenez-98742b184/",
      github: "https://github.com/FrancoG21",
      email:"fgimenez029@gmail.com"
    },
    {
      name: "Matias Farina Solá",
      image:
        "http://res.cloudinary.com/dlol6par5/image/upload/v1657669725/b1btugwql2e3rbcjnlbb.jpg",
      linkedIn: "https://www.linkedin.com/in/matias-farina-sola-09040b147/",
      github: "https://github.com/matifagith",
      email:"matiasfarinasola@gmail.com"
    },
    {
      name: "Edwin Montoya",
      image:
        "https://media-exp2.licdn.com/dms/image/C4E03AQGWzhC-eclkJA/profile-displayphoto-shrink_200_200/0/1649822770739?e=1662595200&v=beta&t=VPR9-BnDP7XneNaxXUR2zGd-pQEYFbpV8uYM5MHw7sY",
      linkedIn: "https://www.linkedin.com/in/edwin-arias-555303235/",
      github: "https://github.com/EFAM2907",
      email:"efam2907@gmail.com"
    },
    {
      name: "Yina Navarro",
      image:
        "https://media-exp2.licdn.com/dms/image/C5603AQHs66A1nZ6ATw/profile-displayphoto-shrink_200_200/0/1597790077992?e=1662595200&v=beta&t=tej5YBL67VNQJn2DCKghB_19X45kr7IULwL7GvyVq8E",
      linkedIn: "https://www.linkedin.com/in/yina-navarro-a8b062b7/",
      github: "https://github.com/ynavarro44",
      email:"yourname@amail.com"
    },
    {
      name: "Carolina Guzman",
      image:
        "https://media-exp2.licdn.com/dms/image/C4D03AQF24dwWGiV5-Q/profile-displayphoto-shrink_200_200/0/1621537745521?e=1662595200&v=beta&t=o3j_FQpV6y6kb88F7eyLnLPGvtO0YqqpjtUTr-7bmD0",
      linkedIn: "https://www.linkedin.com/in/carolina-guzman-570642212//",
      github: "https://github.com/Caro-Mailen",
      email:"yourname@amail.com"
    },
    {
      name: "Lucas Giorgi",
      image:
        "https://media-exp2.licdn.com/dms/image/C4D03AQFmIqacfpYrug/profile-displayphoto-shrink_200_200/0/1655870457475?e=1662595200&v=beta&t=OwX_9Mkh8RkcaIYTCojGuZaSlvoOfOTI3-jZVlzW-3E",
      linkedIn: "https://www.linkedin.com/in/lucas-giorgi-b8985416a/",
      github: "https://github.com/lucasgiorgi95",
      email:"yourname@amail.com"
    },
    {
      name: "Agustin Di Giacinto",
      image: "https://media-exp2.licdn.com/dms/image/C4D03AQGr6joJNV4Cyw/profile-displayphoto-shrink_200_200/0/1643246912186?e=1662595200&v=beta&t=NyMuSt1D1Ra9tkW_Qp7SsqHUaiOlC3XWJHR6oxQ7YwE",
    linkedIn: "https://www.linkedin.com/in/agustin-di-giacinto-5a0357218/",
    github: "https://github.com/AgustinDi",
    email:"agustindigiacinto18@gmail.com"
    },
  ];

  return (
    <BackgroundAbout>
      <ImagePorta>
          <TitleAbout>Sobre Nosotros!</TitleAbout>
          <Text>
            Somos un equipo de 8 desarrolladores full stack con la idea de hacer un
            beneficio social, concientisar a las personas a aoptar animales y no venderlos. Sobre todo buscamos ayudar a los animales que se encuentran en malas
            condiciones de vida, sin comer y sin salud. Proporcionamos un
            conexión entre la persona que quiere ayudar a un animal a que lo adopten
            y darle un buen hospedaje y vida
          </Text>
      </ImagePorta>

      <ContainerAbout>
        <Container>
          <SubtitleAbout>Como surgió el Proyecto AdoptA?</SubtitleAbout>
          <TextAbout>
            AdoptA surge como proyecto final de cierre para el Henry
            Bootcamp en el que se espera que se integre un grupo de alumnos
            todo lo que han aprendido en los últimos 4 meses y desarrollan un
            proyecto innovador y útil para la sociedad.
          </TextAbout>
        </Container>
        <Container>
          <SubtitleAbout>Cuál es nuestra mision?</SubtitleAbout>
          <TextAbout>
            Nuestra misión es proporcionar una conexión a través de AdoptA entre
            personas que quieran adoptar animales que necesitan un hogar, brindar ayuda
            cuando su animal se pierde y dar un animal en adopción cuando usted
            no pueda cuidarlo
          </TextAbout>
        </Container>
      </ContainerAbout>
      <AboutSlide>
        {data.map((item) => {
          return (
            <div key={item}>
              <CardAbout email={item.email} image={item.image} name={item.name} github={item.github} linkedIn={item.linkedIn}/>
            </div>
          );
        })}
      </AboutSlide>

    </BackgroundAbout>
  );
}
