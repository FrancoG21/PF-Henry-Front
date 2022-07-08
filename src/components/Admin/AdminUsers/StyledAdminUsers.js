import styled from "styled-components";

export const BackgroundListUsers = styled.div`
    background-color: ${(props) => props.theme.background};
    height: 100vh;
`

export const ContainerListUsers = styled.div`
    display: grid;
    grid-template-columns: 150px 1183px;
    gap: 1rem;
`