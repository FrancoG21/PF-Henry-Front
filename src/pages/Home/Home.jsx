import React from "react";
import Hero from "../../components/Users/Hero/Hero";
import { Background } from './StyledHome';
import Carrusel from '../../components/Users/Lost/Slideshow/Carrusel';
import CarruselSeguimiento from "../../components/Users/CarruselSeguimiento/CarruselSeguimiento";
//import ContenidoChatb from "../../components/Chatbot/ContenidoChatb/ContenidoChatb";
//redeploy

export default function Home() {

    return (
        <Background>
            <Hero />
            <Carrusel />
            <CarruselSeguimiento />
        </Background>
    )
}
