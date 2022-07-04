import styled from "styled-components";
import { Field, Form } from 'formik';
import { Link } from "react-router-dom";

export const Select = styled(Field)`
    background-color: #fff;
    font-family: 'Roboto Condensed', sans-serif;
    color: ${(props) => props.theme.primary};
    border: 1px solid #8E9097;
    border-radius: 5px;
    height: 30px;
    width: 10%;
    padding-left: 2%;
    line-height: inherit;
    outline: none;
    text-align: left;
    font-size: 15px;
    margin-left: 5px;
    margin-right: 5px;

    @media screen and (max-width: 600px) {
        width: 50%;
        margin-top: 10px;
        margin-bottom: 10px;
    }
`

export const ButtonFilter = styled.button`
    border-radius: 4px;
    background: ${(props) => props.theme.primary};
    white-space: nowrap;
    padding: 5px;
    font-size: 1.2rem;
    font-weight: 700;
    color: ${(props) => props.theme.font};
    outline: none;
    border: none;
    cursor: pointer;
    margin-top: 15px;
    margin-bottom: 15px;
    margin-right: 15px;
    margin-left: 10px;
    
    @media screen and (max-width: 600px) {
        width: 90%;
        margin: 0;
        margin-top: 10px;
    }
`

export const ContainerFil = styled(Form)`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;

    @media screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
        margin: 16px;
        text-align: center;
        margin: 0;
        width: 90%;
    }
`

export const ButtonLink = styled(Link)`
    align-items: center;
    text-decoration: none;
    height: 100%;
    border: none;
    outline: none;
    margin-left: 15px;

    @media screen and (max-width: 600px) {
        justify-content: center;
    }
`

export const ButtonCreate = styled.button`
    border-radius: 4px;
    background: ${(props) => props.theme.primary};
    padding: 5px;
    font-size: 1.2rem;
    font-weight: 700;
    color: ${(props) => props.theme.font};
    outline: none;
    border: none;
    cursor: pointer;
    
    @media screen and (max-width: 600px) {
        width: 90%;
        margin-top: 0;
        margin-right: 15px;
        margin-bottom: 10px;
    }
`

export const Label = styled.label`
    color: ${(props) => props.theme.secondary};
    margin-bottom: .5rem;
    margin-left: 5px;
    margin-right: 5px;
`

export const ContainerFilter = styled.label`
    background-color: ${(props) => props.theme.card};
    border-radius: 8px;
    padding: 3px;
    color: ${(props) => props.theme.secondary};
    margin-bottom: .5rem;
    margin-left: 5px;
    margin-right: 5px;

    @media screen and (max-width: 600px) {
        width: 80%;
    } 
`

export const Content = styled.div`
    margin-left: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;

    @media screen and (max-width: 600px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        margin: 0;
    }
`