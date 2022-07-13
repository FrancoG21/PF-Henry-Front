import React, { useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import {
  Carrousel,
  ImageCarrusel,
  NameCard,
  TitleCarrusel,
  ContainerLost,
  ButtonLost,
  LostLink,
  ContainerLink,
  CardLink,
} from "./StyledCarrusel";
import { Link } from "react-router-dom";
import { getPets } from "../../../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";

const Carrusel = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPets(0, { state: "lost" }));
  }, [dispatch]);

  const pets = useSelector((state) => state.pets);

  return (
    <div>
      <ContainerLost>
        <TitleCarrusel>Animales Perdidos</TitleCarrusel>
        <ContainerLink>
          <LostLink to="/lostpets">
            <ButtonLost>Ver Animales Perdidos</ButtonLost>
          </LostLink>
        </ContainerLink>
      </ContainerLost>
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
        // onMounted={() => {
        //   console.log("mounted");
        // }}
        // onUpdated={() => {
        //   console.log("updated");
        // }}
        // onMoved={() => {
        //   console.log("moved");
        // }}
        // onVisible={(splide, slide) => {
        //   console.log("visible", slide.index);
        // }}
      >
        {pets?.map((item) => {
          return (
            <Carrousel key={item}>
              <CardLink to={`/petdetail/${item.id}`}>
                <ImageCarrusel
                  className="image-carrusel"
                  src={item.image}
                  alt={"img not found"}
                  height="30%"
                  width="20%"
                />
                <NameCard>
                  {item.name[0].toUpperCase() +
                    item.name.slice(1).toLowerCase()}
                </NameCard>
              </CardLink>
            </Carrousel>
          );
        })}
      </Splide>
    </div>

    // <div>
    //   <main>
    //     <h2>Lost Pets</h2>
    //   </main>
    //   <Carousel style={{ width: "100%", height: "100%" }}>
    //     {data.map((e) => {
    //       return (
    //         <Carousel.Item interval={1000}>
    //           <img
    //             style={{
    //               backgroundSize: "cover",
    //               maxWith: "70px",
    //               maxHeight: "480px",
    //             }}
    //             className="d-block w-100"
    //             src={e.image}
    //             alt="image not found"
    //           />

    //           <Carousel.Caption>
    // <h1>
    //   {e.name[0].toUpperCase() + e.name.slice(1).toLowerCase()}
    // </h1>
    //           </Carousel.Caption>
    //         </Carousel.Item>
    //       );
    //     })}
    //   </Carousel>
    // </div>
  );
};

export default Carrusel;
