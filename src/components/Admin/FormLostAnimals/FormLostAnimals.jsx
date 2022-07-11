import React from 'react';
import SideBar from "../SideBar/SideBar";
import DatatableFormLostAnimals from './DatatableFormLostAnimals';
import { BackgroundListPets, ContainerListPets } from "./StyledFormLostAnimals";


export default function FormLostAnimals() {

    return (
        <BackgroundListPets>
            <ContainerListPets>
                <SideBar />
                <DatatableFormLostAnimals />
            </ContainerListPets>
        </BackgroundListPets>
    )
}