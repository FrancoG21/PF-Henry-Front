import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";

export const BackgroundAbout = styled.div`
    background-color: ${(props) => props.theme.background};
    margin: 0;
`

export const ImagePorta = styled.div`
    background-image: url('https://media.meer.com/attachments/85986123087837248a29ffd00b0d7c7b00f2ffcb/store/fill/1470/827/3ad78379a27d6384a2e3c4b3258b32c7ac61306d264c498047b7d7a3cd47/Mujer-rodeada-de-mascotas-que-han-sido-abandonadas-por-sus-duenos.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    width: auto;
    height: 60vh;
    object-fit: cover;

    @media screen and (max-width: 600px){
        max-width: 100%;
    }
`

export const ShadowBackground = styled.div`
    background: linear-gradient(to bottom,rgba(255,255,255,0), ${(props) => props.theme.background} 100%);
    background-repeat: no-repeat;
    background-size: cover;
    width: auto;
    height: 60vh;
`

export const AboutSlide = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    @media screen and (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

export const ImageAbout = styled.img`
    width: 5rem;
`
export const TitleAbout = styled.h1`
    color: ${(props) => props.theme.font};
    font-size: 2rem;
    margin: 0;
    margin-left: 50px;

    @media screen and (max-width: 600px) {
        text-align: center;
        margin: 0;
    }
`

export const Text = styled.h2`
    color: ${(props) => props.theme.font};
    font-size: 1rem;
    /* text-align: left; */
    width: 30rem;
    text-align: left;
    margin-top: 20px;
    margin-left: 50px;

    @media screen and (max-width: 600px) {
        margin-left: 20px;
        margin-right: 20px;
        margin-bottom: 20px;
        width: 90%;
        text-align: center;
    }
`

export const ContainerAbout = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;

    @media screen and (max-width:600px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

export const Container = styled.div`
    margin: 20px;
`

export const SubtitleAbout = styled.h3`
    color: ${(props) => props.theme.secondary};
    font-size: 1.5rem;
    text-align: center;
`

export const TextAbout = styled.h4`
    color: ${(props) => props.theme.secondary};
    font-size: 1.1rem;
    text-align: center;
`