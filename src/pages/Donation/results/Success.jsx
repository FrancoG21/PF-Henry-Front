import React from "react";
import dogs from "../../img/dogs1.gif";
import { BakgroundFailed, BakgroundSuccess, ButtonBackSuccess, DivContainerSuccess, GifPet, TextError, TitleError } from './StyledFailure';
import {Link} from 'react-router-dom';


export default function Success() {
    return (
        <BakgroundSuccess>
            <DivContainerSuccess>
                <TitleError> TU DONACIÓN ES MUY VALIOSA PARA NOSOTROS!</TitleError>
                <TextError>Recibirás un correo confirmando tu donación</TextError>
                <TextError>Adoptar, es la mejor opción!</TextError>
                <GifPet src={dogs} alt="dog" />

                <div>
                    <Link to='/'>
                        <ButtonBackSuccess>Volver</ButtonBackSuccess>
                    </Link>
                </div>
            </DivContainerSuccess>
        </BakgroundSuccess>
    );
}
