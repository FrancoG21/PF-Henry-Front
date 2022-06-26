import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import {useParams} from 'react-router'
import {getById, getPets, cleanDetail} from '../../../redux/actions/index'
import { DetailContainer, DetailTitle, ImageDetail, ContainerContent, SubTitle, SubTitle2, SubTitle3, Span, ContainerImage } from './StyledPetDetail';

export default function PetDetail(){

    // const detail = useSelector(state => state.pets)
    const detail = useSelector(state => state.petDetail)
    const dispatch = useDispatch();
    const {id} = useParams()

    useEffect(() =>{
      dispatch(getById(id))
      dispatch(cleanDetail(dispatch))
    }, [dispatch, id])




    return(
 <div>

        {/* <h1>Pet Detail component</h1> */}
{/*          
         { detail[0]?

         detail.map(e =>(
                <div key={e.id}>
                <h2>{e.name}</h2>
                <p>{e.size}</p>
                </div>
            )):
            <h1>hola papi</h1>
        
         } */}
       

    
   <div className={style.container}>
           { detail? <div>

           <h1>{`${detail.name[0]}${detail.name.slice(1).toLowerCase()}`}</h1>
           <img  className={style.img} src={detail.image} alt='pets' width='600' height='400' />
    <div>
           <h2>Breed: {detail.breed}</h2>
           <h3>Weight:  {detail.weight ? detail.weight : 'has not been defined yet'}</h3>
           <h3>Size: {detail.size}</h3>
           <h4>Fur: {detail.fur}</h4>
           <h4>Gender: {detail.gender}</h4>
           <h4>Castration: {detail.castration === true? 'si': 'no'}</h4>
           <h4>Vaccinate: {detail.vaccinate  === true? 'si': 'no' }</h4>
           <h4>State: {detail.state}</h4>
   </div>
             </div>
             : <h1>siga intentando mijo</h1>
           }</div>
 </div>
    )
}