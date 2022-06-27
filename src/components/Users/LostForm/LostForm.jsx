import React, { useEffect, useState } from 'react'
import { Formik } from 'formik'

const initialState = {
    name: "",
    image: "",
    size: "",
    weight: "",
    fur: "",
    breed: "",
    gender: "",
    castration: "",
    vaccinate: "",

}


const LostForm = () => {
    const [input, setInput] = useState(initialState)

    function handleSubmit() {
        console.log('funcion')
    }

    function handleInputChange(e) {
        e.preventDefault()
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    return (

        <div>
            <>
                <Formik
                    /* initialValues={s}  */
                    onSubmit={() => {
                        console.log('formulario enviado')
                    }}>
                    {({ handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>Name</label>
                                <input type='text' id='name' name='name' placeholder='pet name' onChange={(e) => handleInputChange(e)} />
                            </div>
                            <div>
                                <label>image</label>
                                <input type='text' id='image' name='image' placeholder='pet image' onChange={(e) => handleInputChange(e)} />
                            </div>
                            <div>
                                <label>size</label>
                                <input type='text' id='size' name='size' placeholder='pet size' onChange={(e) => handleInputChange(e)} />
                            </div>
                            <div>
                                <label>weight</label>
                                <input type='text' id='weight' name='weight' placeholder='pet weight' onChange={(e) => handleInputChange(e)} />
                            </div>
                            <div>
                                <label>fur</label>
                                <input type='text' id='fur' name='fur' placeholder='pet fur' onChange={(e) => handleInputChange(e)} />
                            </div>
                            <div>
                                <label>breed</label>
                                <input type='text' id='breed' name='breed' placeholder='pet breed' onChange={(e) => handleInputChange(e)} />
                            </div>
                            <div>
                                <label>gender</label>
                                <input type='text' id='gender' name='gender' placeholder='pet gender' onChange={(e) => handleInputChange(e)} />
                            </div>
                            <div>
                                <label>castration</label>
                                <select id='castration' name='castration' onChange={(e) => handleInputChange(e)} >
                                    <option hidden>
                                        Select an option
                                    </option>
                                    <option value="yes">
                                        Yes
                                    </option>
                                    <option value="no">
                                        No
                                    </option>
                                    <option value="unkwnow">
                                        Unkwnow
                                    </option>
                                </select>
                            </div>
                            <div>
                                <label>vaccinate</label>
                                <select id='vaccinate' name='castration' onChange={(e) => handleInputChange(e)}>
                                    <option hidden>
                                        Select an option
                                    </option>
                                    <option value="yes">
                                        Yes
                                    </option>
                                    <option value="no">
                                        No
                                    </option>
                                    <option value="unkwnow">
                                        Unkwnow
                                    </option>
                                </select>
                            </div>

                            <button type='submit'>submit</button>
                        </form>
                    )}

                </Formik>
            </>
        </div>
    )
}

export default LostForm