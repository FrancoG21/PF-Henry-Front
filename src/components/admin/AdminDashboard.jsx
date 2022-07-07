import React, { useEffect, useState } from "react";


import { useDispatch, useSelector } from "react-redux"
import { getPetitionGet } from "../../redux/actions/adminActions"



export default function AdminDashboard() {
    const dispatch = useDispatch();
    const petitions = useSelector((state) => state?.petitionLoad)

    useEffect(() => {
        dispatch(getPetitionGet())
    }, [dispatch])
    console.log(petitions, "arreglo de peticiones")
    return (
        <div>


            Peticiones Admin


        </div>
    )



}