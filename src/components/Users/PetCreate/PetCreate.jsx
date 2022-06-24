import React /* ,{useEffect, useState} */ from 'react'
import {Formik} from 'formik'
/* import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom' */

export default function PetCreate (){


    

    return(
        <>  
        <h1>Componente Pet create</h1>
        </>
    )
}


/* {
    "name": "fLor",
    "image": "https://i.postimg.cc/xTNzPCXW/Mesa-de-trabajo-13-6.png",
    "size": big / small / medium
    "weight": "",
    "fur": long / short
    "breed": "crossbreed",
    "gender": female / male
    "castration": true / false
    "vaccinate": true / false
  }, */

  <Formik
            /* initialValues={s}  */
            onSubmit={()=>{
                console.log('formulario enviado')
            }}>
                {({handleSubmit})=>(
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Name</label>
                            <input type='text' id='name' name='name' placeholder='pet name' />
                        </div>
                        <div>
                            <label>image</label>
                            <input type='text' id='image' name='image' placeholder='pet image' />
                        </div>
                        
                        <button type='submit'>submit</button>
                    </form>        
                )}
                
            </Formik>
            
     