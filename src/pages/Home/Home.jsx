import React from "react";
import Hero from "../../components/Users/Hero/Hero";
import { Background } from './StyledHome';
import Carrusel from '../../components/Users/Lost/Slideshow/Carrusel';
import AdminHome from '../../pages/AdminHome/AdminHome.jsx';


export default function Home() {

    return (
        <Background>
            <AdminHome />
            <Hero />
            <Carrusel />
        </Background>
    )
}