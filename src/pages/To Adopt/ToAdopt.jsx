import React ,{useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Link } from "react-router-dom";
import {getPets} from '../../redux/actions/index'
import Card from '../../components/Users/Card/Card'
import { Grid, Container, TitleAdopt, ButtonCreate, ButtonLink } from './StyledToAdopt';


export default function ToAdopt() {

    const dispatch = useDispatch()
    const pets = useSelector(state => state.pets)

    useEffect(()=>{
        dispatch(getPets())
    },[dispatch])



    return (
        <div>
            <TitleAdopt>To Adopt</TitleAdopt>

            <ButtonLink to={'/petcreate'}>
                <ButtonCreate>Cargar un pet</ButtonCreate>
            </ButtonLink>

            <Container>
                <Grid>
                    {pets.map(p =>{
                        return <Card
                            key = {p.id}
                            id = {p.id}
                            name = {p.name}
                            image = {p.image}
                        />
                    })}
                </Grid>
            </Container>
        </div>
    )
}