import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";

export const Carrousel = styled(SplideSlide)`
    width: 100%;
`

export const ImageCarrusel = styled.img`
    width: 24rem;

    @media screen and (max-width: 600px) {
        width: 10rem;
        height: 70%;
    }
`

export const TitleCarrusel = styled.h3`
    font-size: 1.5rem;
    color: ${(props) => props.theme.secondary};
    margin-left: 20px;
`

export const NameCard = styled.h4`
    font-size: 1rem;
    color: ${(props) => props.theme.secondary};
`