import styled from "styled-components";


export const BackgroundProfile = styled.div`
    background: ${(props) => props.theme.background};
    height: 80vh;
`

export const TitleProfile = styled.h1`
    color: ${(props) => props.theme.secondary};
    font-size: 3rem;
    margin: 0;
`

export const ContainerProfile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const ContainerContent = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 40px;
    margin-bottom: 40px;
`

export const ContainerInfo = styled.div`
    background-color: ${(props) => props.theme.card};
    padding: 3rem;
    border-radius: 3px;
`

export const Name = styled.h2`
    font-size: 1.2rem;
    color: ${(props) => props.theme.secondary};
`

export const Email = styled.h3`
    font-size: 1rem;
    color: ${(props) => props.theme.secondary};
`

export const ImageProfile = styled.img`
    width: 8rem;
    border-radius: 30px;
`