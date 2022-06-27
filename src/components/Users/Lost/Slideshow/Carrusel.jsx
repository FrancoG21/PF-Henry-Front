import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Carrousel, ImageCarrusel, NameCard, TitleCarrusel } from "./StyledCarrusel";

const Carrusel = () => {
  const data = [
    {
      name: "bethoven",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61%2Bx9ZkztIL._AC_SY450_.jpg",
      size: "big",
      weight: "",
      fur: "short",
      breed: "Labrador",
      gender: "male",
      castration: false,
      vaccinate: true,
      state: "lost",
    },
    {
      name: "kiara",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71nmGGHxMUL._AC_SL1500_.jpg",
      size: "small",
      weight: "",
      fur: "long",
      breed: "crossbreed",
      gender: "female",
      castration: false,
      vaccinate: false,
      state: "lost",
    },
    {
      name: "Theo",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.Vzj5820jhRACsEiYWvrcIwHaFj&pid=Api&P=0&w=222&h=166",
      size: "small",
      weight: "",
      fur: "short",
      breed: "mestizo",
      gender: "male",
      castration: true,
      vaccinate: false,
      state: "lost",
    },
    {
      name: "simona",
      image:
        "http://4.bp.blogspot.com/_9ONcW4UrYLc/SvLE9esq4rI/AAAAAAAADZ0/I2s70lQIUhw/s400/Camas%2Bpara%2BPerros%2BCamas%2Bpara%2BMascotas%2Bkukasworld%2Bpuppia%2B24.jpg.jpg",
      size: "big",
      weight: "",
      fur: "short",
      breed: "crossbreed",
      gender: "female",
      castration: false,
      vaccinate: true,
      state: "lost",
    },
    {
      name: "adhara",
      image:
        "https://curiosfera-animales.com/wp-content/uploads/2018/04/teckel-anatom%C3%ADa.jpg",
      size: "medium",
      weight: "",
      fur: "short",
      breed: "crossbreed",
      gender: "male",
      castration: true,
      vaccinate: true,
      state: "lost",
    },
  ];

  return (
    <div>
      <TitleCarrusel>Lost Animals</TitleCarrusel>
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
              perMove: 2
            },
            935: {
              perPage: 32,
              perMove: 2
            },
            1247: {
              perPage: 2,
              perMove: 2
            }
          }
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
        {data.map(item => {
          return (
            <Carrousel key={item}>
              <ImageCarrusel
                className="image-carrusel"
                src={item.image}
                alt={'img not found'}
              />
              <NameCard>
                {item.name[0].toUpperCase() + item.name.slice(1).toLowerCase()}
              </NameCard>
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
