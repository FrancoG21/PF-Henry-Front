import styled from "styled-components";


export const BackgroundProfilePets = styled.div`
    background-color: ${(props) => props.theme.background};
    height: 100vh;
`

export const ContainerProfilePets = styled.div`
    display: grid;
    grid-template-columns: 150px 1183px;
    gap: 1rem;
`

export const DivTitleProfile = styled.div`
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    padding: 10px;
    margin: 20px;
`

export  const GridDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`