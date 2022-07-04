import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import {
  ImageAbout,
  AboutSlide,
  BackgroundAbout,
  TitleAbout,
  Text,
  ContainerAbout,
  Container,
  SubtitleAbout,
  TextAbout,
} from "./StyledAboutUs";

export default function About() {
  const data = [
    {
      name: "name",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ3yFuczut4deQ3MZ1PqIb6ral5RkhSU4fIA&usqp=CAU",
    },
    {
      name: "name",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwnJ-uXpwnrOViM6k6s9e5VDYsH5BNMmXH5w&usqp=CAU",
    },
    {
      name: "name",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjY5VbrZYWil3ywQ11M8Rhcvh53Il5QNmd-w&usqp=CAU",
    },
    {
      name: "name",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScyLyhAmnAq11ZfpvNeN9zgY5_dXa6GpfiqDmPc7NFB29ACjMoX-WAu7Rjz-DizBYJo2w&usqp=CAU",
    },
    {
      name: "name",
      image:
        "https://i.pinimg.com/originals/e0/7b/20/e07b20ffd67e495e5f6325dd395d0ac7.png",
    },
    {
      name: "name",
      image:
        "https://www.seekpng.com/png/small/21-211386_image-mccoy-who-wiki-svg-free-library-pepe.png",
    },
    {
      name: "name",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSloGQ5CR_EOgxjpQs3X0s11qfufXC1A5AkOA&usqp=CAU",
    },
    {
      name: "name",
      image: "https://pics.me.me/i-love-this-pepe-meme-72072515.png",
    },
  ];

  return (
    <BackgroundAbout>
      <TitleAbout>About Us!</TitleAbout>
      <Text>
        We are a team of 8 full stack developers with the idea of making an
        application for social benefit and to help animals that are in poor
        living conditions, without eating and without health. We provide a
        connection between the person who wants to help an animal to adopt it
        and give it a good lodging and life
      </Text>
      <Splide
        options={{
          rewind: false,
          perPage: 8,
          perMove: 8,
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
        onMounted={() => {
          console.log("mounted");
        }}
        onUpdated={() => {
          console.log("updated");
        }}
        onMoved={() => {
          console.log("moved");
        }}
        onVisible={(splide, slide) => {
          console.log("visible", slide.index);
        }}
      >
        {data.map((item) => {
          return (
            <AboutSlide key={item}>
              <ImageAbout
                className="image-carrusel"
                src={item.image}
                alt={"img not found"}
              />
              <h2>
                {item.name[0].toUpperCase() + item.name.slice(1).toLowerCase()}
              </h2>
            </AboutSlide>
          );
        })}
      </Splide>

      <ContainerAbout>
        <Container>
          <SubtitleAbout>How did adopt come about?</SubtitleAbout>
          <TextAbout>
            AdoptA emerges as a final closing project for the Henry
            Bootcamp in which a group of students is expected to integrate
            everything they have learned in the last 4 months and develop an
            innovative and useful project for society.
          </TextAbout>
        </Container>
        <Container>
          <SubtitleAbout>what is our mission?</SubtitleAbout>
          <TextAbout>
            Our mission is to provide a connection through AdoptA between
            people who want to adopt and animals that need a home, provide help
            when your animal is lost and put an animal up for adoption when you
            don't. can you take care of him
          </TextAbout>
        </Container>
      </ContainerAbout>
    </BackgroundAbout>
  );
}
