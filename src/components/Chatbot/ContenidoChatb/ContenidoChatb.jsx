import React, { Component } from 'react'
import ChatBot from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components'
import ChatbotSearch from "../ChatbotSearch/ChatbotSearch"

const tem = {
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
            <ThemeProvider tem={tem}>
                <ChatBot
                    steps={[
                        {
                            id: "1",
                            message: "Cordial saludo. Por favor, me indicas tu nombre?",
                            trigger: "2"
                        },
                        {
                            id: "2",
                            user: true,
                            validator: (value) => {
                                if (/^[A-Z]{1}[a-z]{2,15}$/.test(value)) {
                                    return true;
                                }
                                else {
                                    return 'escrbie un nombre válido.';
                                }
                            },
                            trigger: "3"
                        },
                        {
                            id: "3",
                            message: "Hola {previousValue}, gracias por contactarnos!",
                            trigger: "4"
                        },
                        {
                            id: "4",
                            message: "Te puedo colaborar en algo?",
                            trigger: "5"
                        },
                        {
                            id: "5",
                            options: [
                                { value: "s", label: "si", trigger: "6A" },
                                { value: "n", label: "No", trigger: "6B" },
                            ]
                        },
                        {
                            id: "6A",
                            message: "Cual es tu inquietud...",
                            trigger: "seleccion"
                        },
                        {
                            id: "6B",
                            message: "Lo sentimos no te podemos colaborar con esto. Deseas algo mas?",
                            end: true
                        },
                        {
                            id: "seleccion",
                            options: [
                                { value: "a", label: "Sobre mascotas", trigger: "seleccionA" },
                                { value: "d", label: "Sobre Donación", trigger: "seleccionB" },
                            ]
                        },
                        {
                            id: "seleccionA",
                            message: "Que necesitas? Algún tema en particular sobre mascotas?",
                            trigger: "seleccionAdoption"
                        },
                        {
                            id: "seleccionB",
                            message: "Quieres información sobre como ayudarnos?",
                            trigger: "seleccionDonation"
                        },
                        {
                            id: "seleccionA",
                            options: [
                                { value: "Adopción", label: "Adopción", trigger: "9" },
                                { value: "Hogar de transito", label: "Hogar de transito", trigger: "9" },
                                { value: "Mascota perdida", label: "Mascota Perdida", trigger: "9" },
                            ]
                        },
                        {
                            id: "seleccionB",
                            options: [
                                { value: "Donación", label: "Donación", trigger: "9" },
                                { value: "Suscripción", label: "Suscripción", trigger: "9" },
                                { value: ".Otros", label: "Otros", trigger: "9" },
                            ]
                        },
                        {
                            id: "9",
                            component: <ChatbotSearch />,
                            asMessage: true,
                            trigger: "preguntaVuelta"
                        },
                        {
                            id: "preguntaVuelta",
                            message: "Te puedo colaborar en algo mas?",
                            trigger: "respuestaVuelta",
                        },
                        {
                            id: "respuestaVuelta",
                            options: [
                                { value: "s", label: "si", trigger: "6A" },
                                { value: "n", label: "No", trigger: "6B" },
                            ],
                        }
                    ]}
                />
            </ThemeProvider>
        )
    }
}
