import styled from "styled-components";
import { Field, Form } from 'formik';

export const BackgroundForm = styled.div`
    background-color: ${(props) => props.theme.background};
    margin: 0;
`

export const TitleForm = styled.h1`
    color: ${(props) => props.theme.secondary};
    text-align: center;
    font-size: 1.5rem;
`

export const Forms = styled(Form)`
    background-color: ${(props) => props.theme.primary};
    padding: 2rem;
    border-radius: 5px;
    margin: 0 auto;
    max-width: 1200px;
`

export const FormContainer = styled.div`
    background-color: ${(props) => props.theme.primary};
    padding: 2rem;
    border-radius: 3px;
    margin: 0px 80px;

    @media screen and (max-width: 600px) {
        width: 73%;
        margin-top: 20px;
        margin-right: 20px;
        margin-left: 20px;
    }
`

export const ContainerCamp = styled.div`
    /* display: grid; */
    display: grid;
    grid-template-columns: repeat(1, 1fr);

    @media screen and (max-width:600px) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
`

export const Camp = styled.div`
    margin-bottom: 1rem;
    width: 100%;
`

export const Label = styled.label`
    color: white;
    font-weight: 700;
    margin-bottom: .5rem;
    display: block;
`

export const Input = styled(Field)`
    width: 90%;
    padding: .5rem;
    border: none;
    border-radius: .5rem;
    margin-left: 5px;
    outline: none;
`

export const Select = styled(Field)`
    background-color: #fff;
    font-family: 'Roboto Condensed', sans-serif;
    color: ${(props) => props.theme.primary};
    border: 1px solid #8E9097;
    border-radius: 5px;
    height: 30px;
    width: 95%;
    padding-left: 2%;
    margin-top: 2%;
    margin-bottom: 1%;
    line-height: inherit;
    outline: none;
    text-align: left;
    font-size: 15px;
    outline: none;
`

export const ContainerButton = styled.div`
    display: flex;
    justify-content: center;
`

export const ButtonSubmit = styled.button`
    background-color: #fff;
    justify-content: center;
    font-weight: bold;
    height: 25px;
    width: 10%;
    color: #4682B4;
    border-color: none;
    border: none;
    border-radius: 3px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    
    &:hover {
        cursor: pointer;
        background: #000;
        transition: all .6s linear;
        color: white;
    }

    @media screen and (max-width: 600px) {
        width: 50%;
    }
`