import React ,{useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Link } from "react-router-dom";
import {getPets} from '../../redux/actions/index'
import Card from '../../components/Users/Card/Card'
import { Grid, Container, TitleAdopt, ButtonCreate, ButtonLink } from './StyledToAdopt';
import Paginate from '../../components/Users/Paginate/Paginate';
import Searchbar from '../../components/Users/Searchbar/Searchbar'


export default function ToAdopt() {

    const dispatch = useDispatch()
    const pets = useSelector(state => state.pets)
    const petsAmount = useSelector(state => state.petsAmount)
    const errors = useSelector(state => state.errors)

    useEffect(()=>{
        dispatch(getPets())
        console.log(pets.pets)
    },[dispatch])

   const paginateFunction = (page)=>{
    dispatch(getPets(page))
   }

    return (
        <div>
            <TitleAdopt>To Adopt</TitleAdopt>
            <Searchbar/>

            <ButtonLink to={'/petcreate'}>
                <ButtonCreate>Cargar un pet</ButtonCreate>
            </ButtonLink>

            <Container>
                <Grid>

                    { pets[0] === 'pet not found' ? <p>no existe el pet</p> : 
                    
                    !pets ? <p>Loading</p> : pets?.map(p =>{
                        return <Card
                            key = {p.id}
                            id = {p.id}
                            name = {p.name}
                            image = {p.image}
                        />
                    })} 
                </Grid> 
            </Container>
            <Paginate 
                total={petsAmount}
                petsPerPage={6}
                paginateFunction = {paginateFunction} />
        </div>
    )
}