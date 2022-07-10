import React from 'react';
import SideBar from "../SideBar/SideBar";
import DatatableFormTransit from './DatatableFormTransit';
import { BackgroundListTransit, ContainerListTransit } from "./StyledFormTransit";


export default function FormTransit() {

    return (
        <BackgroundListTransit>
            <ContainerListTransit>
                <SideBar />
                <DatatableFormTransit />
            </ContainerListTransit>
        </BackgroundListTransit>
    )
}