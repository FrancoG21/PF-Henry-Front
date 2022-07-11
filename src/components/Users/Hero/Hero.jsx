import React from "react";
import { BackgroundHero, ShadowBackground, ContainerHero, ContainerText, TitleHero, Info, Title, Subtitle, Subtitles, ButtonHero } from "./StyledHero";
import { useSelector } from "react-redux";


export default function Hero() {

    // const user = useSelector((state) => state.usuario);
    
    return (
        <BackgroundHero>
            <ShadowBackground>
                <ContainerHero>
                    <ContainerText>
                        <Info>
                            <TitleHero>
                                <Title>Ellos son tu mejor compañia</Title>
                                <Subtitle>  
                                    Muchos creen que son solo perros. Nosotros no. Ayudamos a los que abandonaron y los que nunca conocieron un hogar. Y como sueñan y no pueden pedir, nosotros pedimos: ¿Qué pedimos? que adoptes, han estado esperando durante mucho tiempo. Hay muchos que esperan.
                                </Subtitle>

                                    {
                                        // user && user ? <Subtitles>Bienvenido {user.message.name}!!</Subtitles> :  <ButtonHero to='/login'>Sign Up</ButtonHero>
                                    }
                                    <ButtonHero to='/login'>Sign Up</ButtonHero>
                            </TitleHero>
                        </Info>
                    </ContainerText>
                </ContainerHero>
            </ShadowBackground>
        </BackgroundHero>
    )
}