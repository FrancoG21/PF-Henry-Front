import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";

export const BackgroundAbout = styled.div`
    background-color: ${(props) => props.theme.background};
    margin: 0;
`

export const AboutSlide = styled(SplideSlide)`
    width: 100%;
`

export const ImageAbout = styled.img`
    width: 5rem;
`
export const TitleAbout = styled.h1`
    color: ${(props) => props.theme.secondary};
    font-size: 2rem;
    margin: 0;
    margin-left: 20px;

    @media screen and (max-width: 600px) {
        text-align: center;
    }
`

export const Text = styled.h2`
    color: ${(props) => props.theme.secondary};
    font-size: 1.5rem;
    text-align: center;
    margin-top: 20px;

    @media screen and (max-width: 600px) {
        margin-left: 20px;
        margin-right: 20px;
        margin-bottom: 20px;
    }
`

export const ContainerAbout = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
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