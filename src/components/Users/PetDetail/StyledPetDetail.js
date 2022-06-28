import styled from "styled-components";
import { VscArrowLeft } from 'react-icons/vsc';
import { Link } from "react-router-dom";


export const BackgroundDetail = styled.div`
    background-color: ${(props) => props.theme.background};
`

export const IconLink = styled(Link)`
    margin-left: 20px;
    height: 30px;
`

export const BackIcon = styled(VscArrowLeft)`
    color: ${(props) => props.theme.secondary};
    margin-left: 20px;
    margin-top: 10px;
    width: 2em;
    height: 2em;
`

export const DetailContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    max-width: 120rem;
    margin: 0 auto;

    @media (max-width: 600px) {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        column-gap: 2rem;
    }
`

export const ContainerImage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const ImageDetail = styled.img`
    grid-row: 1 / 2;
    padding: .7rem;
    border-radius: 5px;
    width: 35rem;
    margin-left: 30px;
    margin-bottom: 20px;
    
    @media (max-width: 600px){
        width: 22rem;
        margin: 0;
    }
`

export const DetailTitle = styled.h1`
    font-size: 3rem;
    text-transform: uppercase;
    text-align: center;
    margin-top: 5px;
    color: ${(props) => props.theme.secondary};
    margin-left: 40px;
    margin-top: 30px;

    @media screen and (max-width: 600px) {
        justify-content: center;
    }
`

export const ContainerContent = styled.div`
    margin-top: 40px;
    margin-bottom: 0;

    @media screen and (max-width: 600px) {
        margin: 0;
        text-align: center;
        margin-bottom: 10px;
    }
`

export const Span = styled.span`
    color: ${(props) => props.theme.font_alt};
    font-size: 2rem;
` 

export const SubTitle = styled.h2`
    font-size: 2.5rem;
    color: ${(props) => props.theme.secondary};
`

export const SubTitle2 = styled.h3`
    font-size: 2rem;
    color: ${(props) => props.theme.secondary};
`

export const SubTitle3 = styled.h4`
    font-size: 1.8rem;
    color: ${(props) => props.theme.secondary};
`