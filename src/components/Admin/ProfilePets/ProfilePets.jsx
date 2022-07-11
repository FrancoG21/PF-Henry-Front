import React, { useEffect } from 'react';
import SideBar from "../SideBar/SideBar";
import { BackgroundProfilePets, ButtonEditPet, ContainerProfilePets, ContInput, DivTitleProfile, FolderIcon, Form, GridDiv, ImagePetAdmin, Input, Label, Left, Right } from "./StyledProfilePets";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router";
import { getById } from '../../../redux/actions/index';

export default function ProfilePets() {

    const dispatch = useDispatch()
    const petsId = useSelector((state) => state.petDetail)
    const { id } = useParams();

    useEffect(() => {
        dispatch(getById(id))
    }, [dispatch, id])

    return (
        <BackgroundProfilePets>
            <ContainerProfilePets>
                <SideBar />
                <div>
                    <DivTitleProfile>
                        <h1>Profile Pets</h1>
                    </DivTitleProfile>
                    <DivTitleProfile>
                        <GridDiv>
                            <Left>
                                <ImagePetAdmin src={petsId.image} alt='pet' />
                            </Left>
                            <Right>
                                <Form>
                                    <ContInput>
                                        <label htmlFor='file'>
                                            Image: <FolderIcon />
                                        </label>
                                        <input type='file' style={{ display: 'none' }} />
                                    </ContInput>
                                    <ContInput>
                                        <Label>Tamaño:</Label>
                                        <Input type='text' placeholder={petsId.size} />
                                    </ContInput>
                                    <ContInput>
                                        <Label>Nombre:</Label>
                                        <Input type='text' placeholder={petsId.name} />
                                    </ContInput>
                                    <ContInput>
                                        <Label>Peso:</Label>
                                        <Input type='text' placeholder={petsId.weight ? petsId.weight : 'Desconocido'} />
                                    </ContInput>
                                    <ContInput>
                                        <Label>Pelaje:</Label>
                                        <Input type='text' placeholder={petsId.fur} />
                                    </ContInput>
                                    <ContInput>
                                        <Label>Castrado:</Label>
                                        <Input type='text' placeholder={petsId.castration} />
                                    </ContInput>
                                    <ContInput>
                                        <Label>Vacunado:</Label>
                                        <Input type='text' placeholder={petsId.vaccinate} />
                                    </ContInput>
                                    <ContInput>
                                        <Label>Estado:</Label>
                                        <Input type='text' placeholder={petsId.state} />
                                    </ContInput>
                                    <ButtonEditPet>Enviar</ButtonEditPet>
                                </Form>
                            </Right>
                        </GridDiv>
                    </DivTitleProfile>

                </div>
            </ContainerProfilePets>
        </BackgroundProfilePets>
    )
}