import React, { Component, useEffect,useState } from 'react'
import ChatBot from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components'
import s from './chatbot.module.css'
import Redireccion from '../Redirect'



const theme = {
    background: '#f5f8fb',
    headerBgColor: '#0cb3c9',
    headerFontColor: '#fff',
    headerFontSize: '20px',
    botBubbleColor: '#0cb3c9',
    botFontColor: '#fff',
    userBubbleColor: '#eb3449',
    userFontColor: '#fff',
}




export default class ContenidoChatb extends Component {
    render() {
        return (
           
            <ThemeProvider theme={theme}>
                <div className={s.Container}>
                <ChatBot
                   steps={[
                        {
                            id: "1",
                            message: `Holii, Soy PatitasBot tu asistente virtual🎊`,
                            trigger: "3"
                        },
                  
                        {
                            id: "3",
                            message: "Estoy Aqui para ayudarte con cualquier Solicitud Sobre Nuestra Pagina!",
                            trigger: "4"
                        },
                        {
                            id: "4",
                            message: "Por favor, Selecciona tu Consulta",
                            trigger: "5"
                        },
                        {
                            id: "5",
                            options: [
                                { value: "M", label: "Mascotas", trigger: "6A" },
                                { value: "D", label: "Donaciones", trigger: "6B" },
                            ]
                        },
                        {
                            id: "6A",
                            message: "Cual es tu inquietud...",
                            trigger: "seleccion"
                        },
                    
                        {
                            id: "seleccion",
                            options: [
                                { value: "a", label: "Dar mascota en adopcion", trigger: "seleccionA" },
                                { value: "b", label: "Adoptar", trigger: "seleccionB"  },
                                { value: "c", label: "Hogar Transito", trigger: 'seleccionC' },
                                { value: "d", label: "Mascota Perdida", trigger: 'seleccionD' },
                                { value: "e", label: "Volver a Menu", trigger: '5' },
                            ]
                        },
                        // Dar en adopcion
                        {
                            id: "seleccionA",
                            message: "Ya no podes cuidar tu mascota? Tuviste Cachorritos? Que no se queden en la calle,ven y Dalos en Adopcion",
                            trigger: "6",
                            
                        },

                           {
                            id:"6",
                            options: [
                                { value: 'Si', label: "Vamos🐾", trigger:'IR'},
                                { value: 'No ', label: "Volver a Menu", trigger:'6A'}

                            ]
                           },
                           {
                                id: "IR",
                                component: <Redireccion URL='/petcreate' />,
                                asMessage: true,
                               
                            },

                          // Adoptar

                          {
                            id: "seleccionB",
                            message: "Un Hogar lleno de Amor,Garantiza una Mascotica Feliz💙  ¡¿Que Quieres Hacer?!",
                            trigger: "7",
                            
                        },
                        {
                            id:"7",
                            options: [
                                { value: 'Adoptar', label: "Adoptar una Mascota", trigger:'adop'},
                                { value: 'verM ', label: "Ver Mascotas adoptadas", trigger:'ver'},
                                { value: 'No ', label: "Volver a Menu", trigger:'6A'}
                            ]
                           },

                           {
                            id: "adop",
                            message: "Te llevare a la pagina donde debes seleccionar la mascota que mas te guste,y postularte para la adopcion en el boton 👉 Quiero Adoptar",
                            trigger: "ir-no",
                        },
                        {
                            id:"ir-no",
                            options: [
                                { value: 'Si', label: "Vamos🐾", trigger:'ir'},
                                { value: 'No ', label: "Volver a Menu", trigger:'6A'}

                            ]
                           },
                           {
                            id:'ir',
                            component: <Redireccion URL='/adopt' />,
                            asMessage: true,
                           },

                           {
                            id: "ver",
                            message: "Te llevare a Tu Perfil Donde podras ver tus tus Mascoticas",
                            trigger: "mirar",
                            
                        },

                       { 
                        id:"mirar",
                        options: [
                            { value: 'Si', label: "llevame✨", trigger:'mostrar'},
                            { value: 'No ', label: "Volver a Menu", trigger:'6A'},

                        ]
                       },
                       {
                        id:'mostrar',
                        component: <Redireccion URL='/userprofile' />,
                        asMessage: true,
                       },
 
                        //Hogar Transito

                       
                           {  id: "seleccionC",
                            message: "Recuerda que Hogar Transitorio son casas de Personas que cuidan animales por un periodo de tiempo determinado,Hasta que la mascota Encuentre la persona indicada que la adopte Definitivamente,¡CUENTAME QUE QUIERES HACER...!",
                            trigger: "8",},
                            
                           { id:"8",
                            options: [
                                { value: 'transitar', label: "Transitar Masotas", trigger:'transitar'},
                                { value: 'verMascotas ', label: "Ver Mascotas En transito", trigger:'ver'},
                                { value: 'No ', label: "Volver a Menu", trigger:'6A'}
                            ]},
                          
                           { id: "transitar",
                            message: "Te llevare a la pagina donde debes seleccionar la mascota que mas te guste,y postularte en el boton 👉 Hogar Transito, SI NO VES EL BOTON PARA TRANSITAR ES PORQUE YA ESTA EN PROCESO CON ALGUIEN MAS",
                            trigger: "trans",   },
                          
                           { id:"trans",
                            options: [
                                { value: 'Si', label: "Vamos🐾", trigger:'ir'},
                                { value: 'No ', label: "Volver a Menu", trigger:'6A'}
                             ]},
                           
                           { id:'ir',
                            component: <Redireccion URL='/adopt' />,
                            asMessage: true,  },
                         
                          // mascota Perdidas

                           { id: "seleccionD",
                            message: "Personas como tu son las Que ayudan a que el Mundo sea un lugar Mejor🙌  !QUIERES....!",
                            trigger: "9", },
                           
                           { id:"9",
                            options: [
                                { value: 'buscar', label: "Buscar Mascota", trigger:'buscar'},
                                { value: 'encontrar ', label: "Encontre un Mascota", trigger:'encont' },
                                { value: 'No ', label: "Volver a Menu", trigger:'6A'}
                            ]},
                            
                           { id:'buscar',
                            message: "Encontraste una mascota y no sabes quien es su dueño!...Te llevare Donde puedes subir su informacion y juntos lo encontraremos 🎀",
                            trigger:'buscando', },
                    
                           { id:'buscando',
                            options: [
                                { value:'ir', label:'llevame👌', trigger:'go'},
                                { value: 'No ', label: "Volver a Menu", trigger:'6A'}

                            ]},
                           
                           { id:'go',
                            component: <Redireccion URL='/lostpets' />,
                            asMessage: true, },
                          
                           { id:'encont',
                           message:'Se te perdio tu moscota💔 Te llevare a la seccion de mascotas Perdidas, si la encuentras!! has Click en 👉 !ES MI MASCOTA!',
                           trigger:'enco',},
                          
                          {  id:'enco',
                           options: [
                               { value:'ir', label:'Vamos alla✋', trigger:'vamos'},
                               { value: 'No ', label: "Volver a Menu", trigger:'6A'}
                            ]},

                          { id:'vamos',
                          component: <Redireccion URL='/' />,
                          asMessage: true, },
                       
                     //Donaciones

                      { id: "6B",
                        message: "Gracias a tus aportes juntos logramos un futuro libre de maltrato y abandono animal",
                        trigger: "next"  },
                  
                      { id: "next",
                        message:'podes hacer donaciones Puntuales o Suscribirte a Donaciones Mensuales',
                        trigger: "next1"   },
                 
                      { id:'next1',
                        message:'te llevare a donde puedes realizar tu Donacion',
                        trigger: "next2" },

                      { id:'next2',
                        options:[
                            { value: 'si', label:'GO🚀', trigger:'si'},
                            { value: "no", label: "volver a menu", trigger: "5" },
                             ]},
 
                      { id:'si',
                        component: <Redireccion URL='/donation' />,
                        asMessage: true, }
                   

                   
                    ]}
                /></div>
                
            </ThemeProvider>
          
        )
    }
}
