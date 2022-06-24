import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import {useParams} from 'react-router'
import {getById,getPets} from '../../../redux/actions/index'

export default function PetDetail(){

    // const detail = useSelector(state => state.pets)
    const detalles = useSelector(state => state.PetDetail)
    const dispatch = useDispatch();
    const {id} = useParams()

    useEffect(() =>{
        // dispatch(getPets())
      dispatch(getById(id))
    }, [dispatch, id])

    // console.log('estoy en ', detail)

    return(
 <div>

        <h1>Pet Detail component</h1>

        <div>
                     {/* {
                        detail.map(e =>(
                            <h1>{e.size}</h1>
                        ))
                     } */}
                     {/* {
                      detalles[0]? detalles.map(e => 
                    (
                       <div key={e.id}>
                            <h1 className={a.title}>{e.nombre}</h1>
                            
                            <img className={a.dogImage} src={e.imagen} alt={e.nombre} width='300' height='200'/>
                           
                        </div>
                    )
                    )
                    : <img src={'http://www.canalgif.net/Gifs-animados/Animales-terrestres/Perros/Imagen-animada-Perro-06.gif'} alt="nada"   width="400" height="200"/>

               } */}
                     
                    
           
        </div>
        
        
 </div>
    )
}