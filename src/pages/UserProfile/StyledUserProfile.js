import styled from "styled-components";

export const BackgroundProfile = styled.div`
  background: ${(props) => props.theme.background};
  height: 100%;
`;

export const TitleProfile = styled.h1`
  color: ${(props) => props.theme.secondary};
  font-size: 3rem;
  margin: 0;
`;

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
  background-color: ${(props) => props.theme.card};
  padding: 3rem;
  border-radius: 3px;
  max-width: 376px;
`;

export const Name = styled.h2`
  font-size: 1.2rem;
  color: ${(props) => props.theme.secondary};
`;

export const Email = styled.h3`
  font-size: 1rem;
  color: ${(props) => props.theme.secondary};
`;

export const ImageProfile = styled.img`
  width: 8rem;
  border-radius: 30px;
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
export const ContainerDiv = styled.div`
  display:flex;
  flex-direction:row;
  justify-content: space-evenly;
  //background-color:blue
  
`;

export const ContainerPetitions = styled.div`
    margin-left: 20px;
    margin-right: 20px;
`

