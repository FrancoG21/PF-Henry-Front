import React, { useEffect } from 'react';
import SideBar from "../SideBar/SideBar";
import { BackgroundProfilePets, ContainerProfilePets, DivTitleProfile, GridDiv } from "./StyledProfilePets";
// import { useSelector, useDispatch } from 'react-redux';
// import { useParams } from "react-router";
// import { getById } from '../../../redux/actions/index';

export default function ProfilePets() {

    // const dispatch = useDispatch()
    // const petsId = useSelector((state) => state.petDetail)
    // const { id } = useParams();

    // useEffect(() => {
    //     dispatch(getById(id))
    // }, [dispatch, IDBKeyRange])

    return (
        <BackgroundProfilePets>
            <ContainerProfilePets>
                <SideBar />
                {/* <DivTitleProfile>
                    <h1>Profile Pets</h1>
                    <DivTitleProfile>
                        {
                            petsId ?
                                <GridDiv>
                                    <div>
                                        <img src={petsId.image} height='200px'/>
                                    </div>
                                    <div>
                                        <h1>a</h1>
                                    </div>
                                </GridDiv>
                                :
                                <p>hola</p>
                        }
                    </DivTitleProfile>
                </DivTitleProfile> */}
            </ContainerProfilePets>
        </BackgroundProfilePets>
    )
}