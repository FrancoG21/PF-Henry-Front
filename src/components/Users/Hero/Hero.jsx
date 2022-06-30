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
                                <Title>They are your best company</Title>
                                <Subtitle>  
                                        Many believe they are just dogs. We do not.
                                        We help those who abandoned and those who never knew a home. And since they dream and cannot ask, we ask:
                                        What do we ask? that you adopt, they have been waiting for a long time.
                                        There are many who wait.
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