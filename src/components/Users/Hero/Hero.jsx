import React from "react";
import { BackgroundHero, ShadowBackground, ContainerHero, ContainerText, TitleHero, Info, Title, Subtitle, ButtonHero } from "./StyledHero";
import { useSelector } from "react-redux";


export default function Hero() {

    const user = useSelector((state) => state.usuario);
    
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

                                    {
                                        user && user ? <Subtitle>Welcome {user.message.name}</Subtitle> :  <ButtonHero to='/login'>Sign Up</ButtonHero>
                                    }
                            </TitleHero>
                        </Info>
                    </ContainerText>
                </ContainerHero>
            </ShadowBackground>
        </BackgroundHero>
    )
}