import React from "react";
import { BackgroundHero, ShadowBackground, ContainerHero, ContainerText, TitleHero, Info, Title, Subtitle, ButtonHero } from "./StyledHero";

export default function Hero() {

    
    return (
        <BackgroundHero>
            <ShadowBackground>
                <ContainerHero>
                    <ContainerText>
                        <Info>
                            <TitleHero>
                                <Title>Ellos son tu mejor compañia</Title>
                                <Subtitle>  
                                        Muchos creen que son solo perros. Nosotros no.
                                        Ayudamos a los que abandonaron y a los que nunca conocieron un hogar. Y como ellos sueñan y no pueden pedir, pedimos nosotros:
                                        ¿Qué pedimos? que adoptes, ellos hace mucho que esperan.
                                        Son muchísimos los que esperan.
                                    </Subtitle>
                                    <ButtonHero>Sign Up</ButtonHero>
                            </TitleHero>
                        </Info>
                    </ContainerText>
                </ContainerHero>
            </ShadowBackground>
        </BackgroundHero>
    )
}