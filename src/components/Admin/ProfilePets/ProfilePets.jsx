import React, { useState, useEffect } from 'react';
import SideBar from "../SideBar/SideBar";
import Swal from "sweetalert2";
import { BackgroundProfilePets,
    ButtonEditPet,
    ContainerProfilePets,
    ContInput,
    DivTitleProfile,
    FolderIcon,
    Form,
    GridDiv,
    ImagePetAdmin,
    Input,
    InputRadio,
    Label,
    Left,
    Right
} from "./StyledProfilePets";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router";
import { useNavigate } from 'react-router-dom'
import { editPet, getById } from '../../../redux/actions/index';

export default function ProfilePets() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const petsId = useSelector((state) => state.petDetail)
    const { id } = useParams();
    const [errors, setErrors] = useState({});

    console.log(petsId)

    const [input, setInput] = useState({
      name: '',
      weight: '',
    })

    useEffect(() => {
        dispatch(getById(id))
    }, [dispatch, id])


    function handleChange (e) {
        setInput({
            ...input, [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async (e) => {
        // e.preventDefault();
        // if (input.name === '' && input.weight === '') {
        //   return Swal.fire({
        //     icon: 'error',
        //     title: 'Error',
        //     text: 'Completa todos los campos!',
        //     showConfirmButton: false,
        //     timer: 1500
        //   })
        // }
    
        // if(res.data.error){
        //   return Swal.fire({
        //     icon: 'error',
        //     title: 'Error',
        //     text: res.data.error,
        //     showConfirmButton: false,
        //     timer: 1000
        // })
        // }
    
        // Swal.fire({
        //   position: 'center',
        //   icon: 'success',
        //   title: 'Sesion iniciada!',
        //   showConfirmButton: true,
        //   timer: 1500
        // }).then(()=>{
            // })
    
        // setInput({
        //   name: '',
        //   weight: '',
        // })
        axios.put(`/pet/update/${id}`.then((r) => dispatch(editPet(r.data)))).then(() => navigate("/admin/pets"))
        console.log(r.data)
    }

    return (
        <BackgroundProfilePets>
            <ContainerProfilePets>
                <SideBar />
                <div>
                    <DivTitleProfile>
                        <h1>Perfil de Mascota</h1>
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
                                        <InputRadio type="radio" name="size" value="small" /> Pequeño
                                        <InputRadio type="radio" name="size" value="medium" /> Mediano
                                        <InputRadio type="radio" name="size" value="big" /> Grande                                     </ContInput>
                                    <ContInput>
                                        <Label>Nombre:</Label>
                                        <Input onChange={handleChange} name="name" type='text' placeholder={petsId.name} />
                                    </ContInput>
                                    <ContInput>
                                        <Label>Peso:</Label>
                                        <Input onChange={handleChange} name="weight" type='number' placeholder={petsId.weight ? petsId.weight : 'Desconocido'} />
                                    </ContInput>
                                    <ContInput>
                                        <Label>Pelaje:</Label>
                                        <InputRadio type="radio" name="fur" value="true" /> Corto
                                        <InputRadio type="radio" name="fur" value="false" /> Largo                                  </ContInput>
                                    <ContInput>
                                        <Label>Castrado:</Label>
                                        <InputRadio type="radio" name="castration" value="true" /> Si
                                        <InputRadio type="radio" name="castration" value="false" /> No
                                        <InputRadio type="radio" name="castration" value="unknown" /> Desconocido                                    </ContInput>
                                    <ContInput>
                                        <Label>Vacunado:</Label>
                                        <InputRadio type="radio" name="vaccination" value="true" /> Si
                                        <InputRadio type="radio" name="vaccination" value="false" /> No
                                        <InputRadio type="radio" name="vaccination" value="unknown" /> Desconocido
                                    </ContInput>
                                    <ContInput>
                                        <Label>Estado:</Label>
                                        <InputRadio type="radio" name="state" value="adopt" /> Adoptado
                                        <InputRadio type="radio" name="state" value="transit" /> Transito
                                        <InputRadio type="radio" name="state" value="lost" /> Perdido                                     </ContInput>
                                    <ButtonEditPet onClick={handleSubmit}>Enviar</ButtonEditPet>
                                </Form>
                            </Right>
                        </GridDiv>
                    </DivTitleProfile>

                </div>
            </ContainerProfilePets>
        </BackgroundProfilePets>
    )
}