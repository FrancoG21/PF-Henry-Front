import React, { useEffect } from "react";
import { useParams } from "react-router";
import {Link} from 'react-router-dom';
import axios from 'axios'
import { BakgroundFailed, ButtonBack, DivContainer, TextError, TitleError } from './StyledFailure';

export default function Failure() {

    const { id } = useParams()
    useEffect(() => {
        id && axios
            .put(`/donation/${id}`)
            .then((r) => console.log(r.data))
            .catch((r) => console.log(r.data))
    }, [])

    return (
        <BakgroundFailed>
            <DivContainer>
                <TitleError>Ocurrió un Error</TitleError>
                <TextError>
                    Hubo un error al realizar tu donación / suscripción, te pedimos que vuelvas a intentar devuelta.
                </TextError>
                <div>
                    <Link to='/'>
                        <ButtonBack>Volver</ButtonBack>
                    </Link>
                </div>
            </DivContainer>
        </BakgroundFailed>)
}