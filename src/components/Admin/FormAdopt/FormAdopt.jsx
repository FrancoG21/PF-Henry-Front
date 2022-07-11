import React from 'react';
import SideBar from "../SideBar/SideBar";
import DatatableFormAdopt from './DatatableFormAdopt';
import { BackgroundListPets, ContainerListPets } from "./StyledFormAdopt";


export default function FormAdopt() {

    return (
        <BackgroundListPets>
            <ContainerListPets>
                <SideBar />
                <DatatableFormAdopt />
            </ContainerListPets>
        </BackgroundListPets>
    )
}