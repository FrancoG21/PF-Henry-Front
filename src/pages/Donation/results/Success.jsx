import React from "react";
import "./success.module.css";
import dogs from "../../img/dogs1.gif";



export default function Success() {
    return (
        <>
            <div className="Success">

                <h2> TU DONACIÓN ES MUY VALIOSA PARA NOSOTROS!</h2>
                <span>Recibirás un correo confirmando tu donación</span>
                <h4>Adoptar, es la mejor opción!</h4>
                <img src={dogs} alt="dog" />

            </div>
        </>
    );
}
