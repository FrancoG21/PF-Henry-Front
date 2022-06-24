import React ,{useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Link } from "react-router-dom";
import {getPets} from '../../redux/actions/index'
import Card from '../../components/Users/Card/Card'


export default function ToAdopt() {

    const dispatch = useDispatch()
    const pets = useSelector(state => state.pets)

    useEffect(()=>{
        dispatch(getPets())
    },[dispatch])



    return (
        <div>
            <h1>To Adopt</h1>
            <Link to={'/petcreate'}><button>Cargar un pet</button></Link>
            <div>
                {pets.map(p =>{
                    return <Card
                        key = {p.id}
                        id = {p.id}
                        name = {p.name}
                        image = {p.image}
                    />
                })}
            </div>
        </div>
    )
}