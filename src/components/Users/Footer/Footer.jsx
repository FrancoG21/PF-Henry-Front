import React from "react";
import { BackgroundFooter, FooterContainer, FooterLinks, FooterLinksItems, FooterLinksContainer, FooterTitle, FooterTitles, FooterText, ContactText, TextCopy, DivIcon, Icon, IconArrow } from "./StyledFooter";
import { BsLinkedin } from 'react-icons/bs';

export default function Footer () {

    return (
        <BackgroundFooter>
            <FooterContainer>
                <FooterLinks>
                    <FooterLinksContainer>
                        <FooterLinksItems>
                            <FooterTitle>Contactanos</FooterTitle>
                            <DivIcon>
                                <Icon/>
                                <ContactText href='https://www.linkedin.com/in/ignacio-sol%C3%A1-zambrano-8b1532222/' target='blank'>Ignacio Zambrano</ContactText>
                            </DivIcon>
                            <DivIcon>
                                <Icon />
                                <ContactText href='https://www.linkedin.com/in/franco-ramiro-gimenez-98742b184/' target='blank'>Franco Gimenez</ContactText>
                            </DivIcon>
                            <DivIcon>
                                <Icon />
                                <ContactText href='https://www.linkedin.com/in/matias-farina-sola-09040b147/' target='blank'>Matias Farina</ContactText>
                            </DivIcon>
                            <DivIcon>
                                <Icon/>
                                <ContactText href='https://www.linkedin.com/in/edwin-arias-555303235/' target='blank'>Edwin Montoya</ContactText>
                            </DivIcon>
                        </FooterLinksItems>
                    </FooterLinksContainer>

                    <FooterLinksContainer>
                        <FooterLinksItems>
                        <FooterTitles>Contactanos</FooterTitles>
                            <DivIcon>
                                <Icon/>
                                <ContactText href='https://www.linkedin.com/in/yina-navarro-a8b062b7/' target='blank'>Yina Navarro</ContactText>
                            </DivIcon>
                            <DivIcon>
                                <Icon/>
                                <ContactText href='https://www.linkedin.com/in/carolina-guzman-570642212/' target='blank'>Carolina Mailen</ContactText>
                            </DivIcon>
                            <DivIcon>
                                <Icon/>
                                <ContactText href='https://www.linkedin.com/in/lucas-giorgi-b8985416a/' target='blank'>Lucas Giorgi</ContactText>
                            </DivIcon>
                            <DivIcon>
                                <Icon/>
                                <ContactText href='https://www.linkedin.com/in/agustin-di-giacinto-5a0357218/' target='blank'>Agustín Di Giacinto</ContactText>
                            </DivIcon>
                        </FooterLinksItems>
                    </FooterLinksContainer>
                </FooterLinks>
                <FooterLinks>
                    <FooterLinksContainer>
                        <FooterLinksItems>
                        <FooterTitle>Links Rapidos</FooterTitle>
                            <DivIcon>
                                <IconArrow/>
                                <FooterText to='/'>Hogar</FooterText>
                            </DivIcon>
                            <DivIcon>
                                <IconArrow/>
                                <FooterText to='/adopt'>Mascotas</FooterText>
                            </DivIcon>
                            <DivIcon>
                                <IconArrow/>
                                <FooterText to='/donation'>Donación</FooterText>
                            </DivIcon>
                            <DivIcon>
                                <IconArrow/>
                                <FooterText to='/about'>Nosotros</FooterText>
                            </DivIcon>
                        </FooterLinksItems>
                    </FooterLinksContainer>

                    <FooterLinksContainer>
                        <FooterLinksItems>
                        <FooterTitles>Links Rapidos</FooterTitles>
                            <DivIcon>
                                <IconArrow/>
                                <FooterText to='/login'>Iniciar Sesión</FooterText>
                            </DivIcon>
                            <DivIcon>
                                <IconArrow/>
                                <FooterText to='/register'>Registrar</FooterText>
                            </DivIcon>
                        </FooterLinksItems>
                    </FooterLinksContainer>
                </FooterLinks>
            </FooterContainer>
            <TextCopy>Copyright ©. Todos los derechos reservados</TextCopy>
        </BackgroundFooter>
    )
}