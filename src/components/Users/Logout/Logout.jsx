import React from 'react';
import { useDispatch } from 'react-redux';
import { getLogOut } from '../../../redux/actions/index';
import { ButtonLogout } from './StyledLogout';

export default function Logout () {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(getLogOut())
    }

    return(
        <div>
            <ButtonLogout onClick={() => handleLogout()}>Cerrar Sesión</ButtonLogout>
        </div>
    )
}