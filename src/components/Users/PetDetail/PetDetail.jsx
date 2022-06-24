import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import {useParams} from 'react-router'
import {getById,getPets} from '../../../redux/actions/index'

export default function PetDetail(){

    // const detail = useSelector(state => state.pets)
    const detail = useSelector(state => state.petDetail)
    const dispatch = useDispatch();
    const {id} = useParams()

      

    useEffect(() =>{
        // dispatch(getPets())
      dispatch(getById(id))
    }, [dispatch, id])

    // console.log( detail)

    return(
 <div>

        {/* <h1>Pet Detail component</h1> */}
         
        {/* { detail[0]?

         detail.map(e =>(
                <div key={e.id}>
                <h2>{e.name}</h2>
                <p>{e.size}</p>
                </div>
            )):
            <h1>hola papi</h1>
        } */}

       



           <h1>Name: {detail.name}</h1>
           <img src={detail.image} alt='pets' width='300' height='250' />
           <h2>Weight:  {detail.weight ? detail.weight : 'has not been defined yet'}</h2>
           <h3>Size: {detail.size}</h3>
           <h4>Fur: {detail.fur}</h4>
           <h4>Breed: {detail.breed}</h4>
           <h4>gender: {detail.gender}</h4>
           <h4>castration: {detail.castration}</h4>


 </div>
    )
}