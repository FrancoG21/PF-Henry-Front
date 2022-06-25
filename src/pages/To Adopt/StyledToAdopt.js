import styled from "styled-components";
import {Link} from 'react-router-dom';

export const BackgroundPets = styled.div`
    background-color: ${(props) => props.theme.background};
`

export const TitleAdopt = styled.h1`
    font-size: 2rem;
    color: ${(props) => props.theme.secondary};
    margin-left: 20px;
    margin-top: 0;

    @media screen and (max-width: 600px) {
        font-size: 2.5rem;
        text-align: center;
        margin: 0;
    }
`

export const ButtonLink = styled(Link)`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-decoration: none;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;

    @media screen and (max-width: 600px) {
        justify-content: center;
    }
`

export const ButtonCreate = styled.button`
    border-radius: 4px;
    background: ${(props) => props.theme.secondary};
    white-space: nowrap;
    padding: 5px;
    font-size: 1rem;
    color: #fff;
    outline: none;
    border: none;
    cursor: pointer;
    margin-top: 15px;
    margin-bottom: 15px;
    margin-right: 15px;

    &:hover {
        transition: all 0.3s ease-out;
        background: ${(props) => props.theme.primary};
    }
    
    @media screen and (max-width: 600px) {
        width: 35%;
        margin-top: 0;
    }
`

export const Container = styled.div`
    max-width: 120rem;
    margin: 0 auto;
`

export const ImageSpace = styled.div`
    display: block;
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    line-height: 0;

    @media screen and (max-width: 600px) {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
    }
`

export const ContainerTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 20px;

    @media screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
        margin: 16px;
        text-align: center;
        margin: 0;
    }
`
