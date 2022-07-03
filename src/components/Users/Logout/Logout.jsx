import React from 'react';
import { useDispatch } from 'react-redux';
import { getLogOut } from '../../../redux/actions/index';

export default function Logout () {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(getLogOut())
    }

    return(
        <div>
            <button onClick={() => handleLogout()}>Logout</button>
        </div>
    )
}