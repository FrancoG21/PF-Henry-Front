import React from "react";
import SideBar from "../SideBar/SideBar";
import DatatablePets from "./DatatablePets";
import { BackgroundListPets, ContainerListPets } from "./StyledAdminPets";

export default function AdminPets() {

    return(
        <BackgroundListPets>
            <ContainerListPets>
                <SideBar />
                    <DatatablePets />
            </ContainerListPets>
        </BackgroundListPets>
    )
}