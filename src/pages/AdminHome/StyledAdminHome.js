import styled from "styled-components";


export const BackgroundList = styled.div`
    background-color: ${(props) => props.theme.background};
    height: 100vh;
`

export const ContainerList = styled.div`
    display: grid;
    grid-template-columns: 150px 1183px;
    gap: 1rem;
`

export const ContainerDashboard = styled.div`
    width: 95%;
    display: flex;
    padding: 20px;
    gap: 20px;
    height: 100px;
`

export const ContainerChart = styled.div`
    display: flex;
    padding: 5px 20px;
    margin-top: 40px;
    margin-left: 130px;
`