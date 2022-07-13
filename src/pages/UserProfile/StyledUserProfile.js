import styled from "styled-components";
import {FaCrown} from 'react-icons/fa';
import {MdVerifiedUser} from 'react-icons/md';
import { Splide, SplideSlide } from "@splidejs/react-splide";

export const BackgroundProfile = styled.div`
  background: ${(props) => props.theme.background};
  height: 100%;
`;

export const TitleProfile = styled.h1`
  color: ${(props) => props.theme.background};
  font-size: 1rem;
  margin: 0;
  left: 0;
`

export const ContainerProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`;

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme.card};
  padding: 3rem;
  border-radius: 3px;
  width: 90%;

  @media screen and (max-width: 600px) {
    width: 70%;
    flex-direction: column;
    text-align: center;
  }
`;

export const ContainerText = styled.div`
  margin-left: 50px;

  @media screen and (max-width: 600px) {
    text-align: center;
    margin: 0;
  }
`

export const ContainerImage = styled.div`
  margin-left: 100px;

  @media screen and (max-width: 600px) {
    margin: 0;
  }
`

export const DivSpan = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 600px) {
    display: block;
  }
`

export const DivAdmin = styled.div`
  margin-left: 450px;
  right: 0;
  top: 0;

  @media screen and (max-width: 600px) {
    margin: 0;
  }
`

export const IconAdmin = styled(FaCrown)`
  color: ${(props) => props.theme.secondary};
`

export const IconUser = styled(MdVerifiedUser)`
  color: ${(props) => props.theme.secondary};
`

export const Span = styled.h2`
  font-size: .7rem;
  color: ${(props) => props.theme.secondary};

  @media screen and (max-width: 600px) {
    text-align: center;
  }
`;

export const Name = styled.h2`
  font-size: 1.2rem;
  color: ${(props) => props.theme.secondary};

  @media screen and (max-width: 600px) {
    text-align: center;
  }
`;

export const Email = styled.h3`
  font-size: 1rem;
  color: ${(props) => props.theme.secondary};

  @media screen and (max-width: 600px) {
    text-align: center;
  }
`;

export const ImageProfile = styled.img`
  width: 10rem;
  border-radius: 50%;
  margin-top: 30px;

  @media screen and (max-width: 600px) {
    text-align: center
  }
`;

export const ButtonLink = styled.button`
  border-radius: 4px;
  background: ${(props) => props.theme.secondary};
  padding: 5px;
  font-size: 1rem;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  margin: 15px;
`;

export const ButtonPassword = styled.button`
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

export const Admin = styled.p`
  font-size: 1.2rem;
  color: ${(props) => props.theme.secondary};
`


export const ContainerPetitions = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  `

// SELECTS //

  export const ContainerDiv = styled.div`
    width: 100%;
  `;

export const ContainerSelect = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`

export const Select = styled.select`
  background-color: ${(props) => props.theme.secondary};
  color: #fff;
  border: none;
  border-radius: 3px;
  margin-left: 10px;
  margin-top: 10px;
  padding: 3px;
`

export const DivPets = styled.div`

`

export const DivCardCarrusel = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0;
`

export const DivCardPetition = styled.div`
  display: -webkit-box;
  width: 100%;
  margin: 0;
`

export const Carrusel = styled(SplideSlide)`
  width: 1600px;
`

export const TitleCardPets = styled.h2`
  font-size: 1.2rem;
  margin-left: 20px;
  color: ${(props) => props.theme.secondary};
`

export const Error = styled.p`
  text-align: center;
  color: ${(props) => props.theme.secondary};
  font-size: 1rem;
`