import React from "react";
import { BackgroundFooter, FooterContainer, FooterLinks, FooterLinksItems, FooterLinksContainer, FooterTitle, FooterText, ContactText, TextCopy, DivIcon, Icon, IconArrow } from "./StyledFooter";
import { BsLinkedin } from 'react-icons/bs';

export default function Footer () {

    return (
        <BackgroundFooter>
            <FooterContainer>
                <FooterLinks>
                    <FooterLinksContainer>
                        <FooterLinksItems>
                            <FooterTitle>Contact Us</FooterTitle>
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
                                <ContactText href='#' target='blank'>Edwin Montoya</ContactText>
                            </DivIcon>
                        </FooterLinksItems>
                    </FooterLinksContainer>

                    <FooterLinksContainer>
                        <FooterLinksItems>
                            <FooterTitle>Quick Links</FooterTitle>
                            <DivIcon>
                                <IconArrow/>
                                <FooterText to='/'>Home</FooterText>
                            </DivIcon>
                            <DivIcon>
                                <IconArrow/>
                                <FooterText to='/adopt'>To Adopt</FooterText>
                            </DivIcon>
                            <DivIcon>
                                <IconArrow/>
                                <FooterText to='/'>Donation</FooterText>
                            </DivIcon>
                            <DivIcon>
                                <IconArrow/>
                                <FooterText to='/'>About Us</FooterText>
                            </DivIcon>
                        </FooterLinksItems>
                    </FooterLinksContainer>
                </FooterLinks>
                <FooterLinks>
                    <FooterLinksContainer>
                        <FooterLinksItems>
                            <FooterTitle>Contact Us</FooterTitle>
                            <DivIcon>
                                <Icon/>
                                <ContactText href='https://www.linkedin.com/in/yina-navarro-a8b062b7/' target='blank'>Yina Navarro</ContactText>
                            </DivIcon>
                            <DivIcon>
                                <Icon/>
                                <ContactText href='#' target='blank'>Carolina Mailen</ContactText>
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
            </FooterContainer>
            <TextCopy>Copyright ©. All rights reserved</TextCopy>
        </BackgroundFooter>
    )
}