import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";

export const Carrousel = styled(SplideSlide)`
    width: 100%;
`

export const ContainerLost = styled.div`
    display: flex;
    justify-content: space-between;
`

export const ContainerLink = styled.div`
    justify-content: center;
    align-items: center;
`

export const LostLink = styled(Link)`
    justify-content: end;
    text-decoration: none;
`

export const CardLink = styled(Link)`
text-decoration: none;
`

export const ButtonLost = styled.button`
    background-color: ${(props) => props.theme.secondary};
    color: #fff;
    border: none;
    border-radius: 3px;
    padding: .3rem;
    margin-right: 20px;
    margin-top: 30px;
    cursor: pointer;

    &:hover {
        transition: all 0.3s ease-out;
        background: ${(props) => props.theme.primary};
    }
`

export const ImageCarrusel = styled.img`
    width: 24rem;
    height: 16rem;

    @media screen and (max-width: 600px) {
        width: 10rem;
        height: 70%;
    }
`

export const TitleCarrusel = styled.h3`
    font-size: 1.5rem;
    color: red;
    /* color: ${(props) => props.theme.secondary}; */
    margin-left: 20px;

    &:hover {
        -webkit-box-shadow: 6px 5px 12px 1px rgba(0,0,0,0.7); 
        box-shadow: 6px 5px 12px 1px rgba(0,0,0,0.7);
    }
`

export const NameCard = styled.h4`
    font-size: 1.2rem;
    color: red;
    /* color: ${(props) => props.theme.secondary}; */
`