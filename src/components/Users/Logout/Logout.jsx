import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getLogOut } from '../../../redux/actions/index';
import { ButtonLogout } from './StyledLogout';
import useCurrentPath from './useCurrentPath';

export default function Logout () {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentPath = useCurrentPath();
    
    const handleLogout = () => {
        console.log(currentPath)
        const routesOnlyRedirect = [
            "/admin","/admin/pets","/admin/users","/admin/donation",
            "/admin/formadopt","/admin/formlost","/admin/formtransit",
            "/admin/profilepets/:id","/admin/petitionuser/:id"
            ,"/useradoptpet/:id"
            ,"/usertransitpet/:id"
            ,"/userprofile"
            ,"/useritsmypet/:id"
            ,'/chatbot'
        ]
        dispatch(getLogOut())
        routesOnlyRedirect.includes(currentPath) && navigate('/')
    }

    return(
        <div>
            <ButtonLogout onClick={() => handleLogout()}>Cerrar Sesión</ButtonLogout>
        </div>
    )
}