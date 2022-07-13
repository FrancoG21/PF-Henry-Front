import styled from "styled-components";
import { VscArrowLeft } from 'react-icons/vsc';
import { Link } from "react-router-dom";


export const BackgroundDetail = styled.div`
    background-color: ${(props) => props.theme.background};
    height: 120vh;

    @media screen and (max-width: 600px) {
        height: 150vh;
    }
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
    background-color: ${(props) => props.theme.card_alt};
    display: grid;
    grid-template-columns: repeat(2,1fr);
    max-width: 118rem;
    padding: 20px;
    padding-bottom: 60px;
    margin: 30px 30px;
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);

    @media screen and (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
        width: 84%;
        margin-left: 10px; 
        margin-right: 10px;
    }
`

export const ContainerImage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const ImageDetail = styled.img`
    grid-row: 1 / 2;
    grid-row: 1 / 2;
    padding: 0.7rem;
    border-radius: 5px;
    max-width: 35rem;
    margin-left: 99px;
    margin-left: -13px;

    @media screen and (max-width: 600px) {
        width: 90%;
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
        margin-bottom: 0;
    }
`

export const ContainerContent = styled.div`
    margin-bottom: 0;
    margin-right: 300px;
    margin-top: 170px;

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
    margin: 0;
    font-size: 2rem;
    color: ${(props) => props.theme.secondary};
`

export const SubTitle3 = styled.h4`
    margin: 0;
    font-size: 1.8rem;
    color: ${(props) => props.theme.secondary};
`

export const ContainerButton = styled.div`
    display: flex;

    @media screen and (max-width: 600px) {
        justify-content: center;
        margin-left: 20px;
        margin-bottom: 20px;
    }
`

export const ButtonForm = styled.button`
    background-color: ${(props) => props.theme.secondary};
    font-size: 1rem;
    color: #fff;
    border: none;
    border-radius: 3px;
    padding: .1rem;
    cursor: pointer;
    margin-left: 20px;
    margin-top: 52px;
    height: 30px;
`

export const DivHeader = styled.div`
    display: flex;
    justify-content: space-around;

    @media screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
        text-align: center;
    }
`