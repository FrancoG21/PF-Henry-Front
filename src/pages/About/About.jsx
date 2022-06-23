import React from "react";
import { Link } from 'react-router-dom';
// import '../About/About.css';


export const Aboutus = () => {
    return (
        <>

            <h1>
                Bienvenidos!
            </h1>
            <h3>
                Somos un equipo de 8 desarrolladores full stack con la idea de realizar una App para beneficio social y en pro de ayudar a las mascotas a encontrar un hogar!
                Para este proyecto utilizamos los siguientes tecnologias:
                <ul>- Javascript</ul>
                <ul>- React</ul>
                <ul>- Redux</ul>
                <ul>- CSS</ul>
            </h3>
            {/* <h4>Quieres saber mas de nosotros?<button className="btn-contact"><Link className="link" to='/contact'>Contactanos!</Link></button></h4> */}

        </>
    )
}