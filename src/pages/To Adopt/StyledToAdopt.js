import styled from "styled-components";
import {Link} from 'react-router-dom';

export const TitleAdopt = styled.h1`
    font-size: 2rem;
    color: ${(props) => props.theme.secondary};
    margin-left: 10px;
`

export const ButtonLink = styled(Link)`
    display: flex;
    justify-content: right;
    align-items: center;
    text-decoration: none;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
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

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;

    @media screen and (max-width: 600px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
`
