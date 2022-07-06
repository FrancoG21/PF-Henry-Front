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
    display: flex;
    /* grid-template-columns: repeat(2,1fr); */
    max-width: 118rem;
    margin: -34px auto;
    justify-content: space-around;
    margin-left: -39px;
    height: 679px;
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
    border-radius: 26px;
    max-width: 35rem;
    margin-left: 99px;
    -webkit-box-shadow: 5px 5px 15px 5px #000000; 
    box-shadow: 5px 5px 15px 5px #000000;
    background-color: deepskyblue;
    margin-left: -13px;
    &:hover {
        transition: all 0.3s ease-out;
        background: ${(props) => props.theme.primary};
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
margin-top: 140px;
margin-bottom: 0;
margin-right: 300px;
margin-top: 179px;

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

   
`

export const ButtonForm = styled.button`
    background-color: ${(props) => props.theme.primary};
    font-size: 1rem;
    color: #fff;
    border: none;
    border-radius: 3px;
    padding: .3rem;
    cursor: pointer;
    margin-left: 20px;

    &:hover {
        transition: all 0.3s ease-out;
        background: ${(props) => props.theme.primary};
    }
`