import styled from 'styled-components';
import { Splide, SplideSlide } from "@splidejs/react-splide";


export const ContainerForm = styled.div`
    background-color: ${(props) => props.theme.card};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    border-radius: 5px;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 10px;   
    width: 350px; 
    margin-bottom: 20px;
    margin-left: 10px;
    margin-right: 10px;
`

export const Sub = styled.h4`
    font-size: .9rem;
    color: ${(props) => props.theme.secondary};
`

export const Carrusel = styled(SplideSlide)`
  width: 1600px;
`

export const ButtonPetition = styled.button`
    background-color: ${(props) => props.theme.secondary};
    font-size: 1rem;
    color: #fff;
    border: none;
    border-radius: 2px;
    padding: .5rem;
    cursor: pointer;
    margin-bottom: 30px;

    &:hover {
        transition: all 0.3s ease-out;
        background: ${(props) => props.theme.primary};
    }
`