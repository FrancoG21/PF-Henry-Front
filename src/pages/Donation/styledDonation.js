import React from "react";
import { ButtonDonation } from "./styledDonation";



export const ButtonHero = styled.button`
    border-radius: 2px;
    background: ${(props) => props.theme.secondary};
    white-space: nowrap;
    padding: 5px;
    font-size: 20px;
    color: #fff;
    outline: none;
    border: none;
    cursor: pointer;
    margin-top: 15px;

    &:hover {
        transition: all 0.3s ease-out;
        background: ${(props) => props.theme.primary};
    }
    
    @media screen and (max-width: 600px) {
        width: 80%;
        margin-top: 0;
    }
`