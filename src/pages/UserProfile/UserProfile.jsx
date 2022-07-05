import React from "react";
import { useSelector } from "react-redux";
import { BackgroundProfile, ContainerContent, ContainerInfo, ContainerProfile, Email, ImageProfile, Name, TitleProfile } from "./StyledUserProfile";

export default function UserProfile (){

    const user = useSelector((state) => state.usuario)

    return(
        <BackgroundProfile>
            <ContainerProfile>
                <TitleProfile>Mi Perfil</TitleProfile>
                <ContainerContent>
                    {
                        user && user ? 
                        <ContainerInfo>
                            {/* <Image src={user.message.picture} alt='avatar profile'/> */}
                            <ImageProfile src='https://thumbs.dreamstime.com/b/dise%C3%B1o-de-la-lengua-de-programaci%C3%B3n-65093358.jpg' alt='avatar'/>
                            <Name>{user.message.name}</Name>
                            <Email>{user.message.email}</Email>
                        </ContainerInfo>
                        :
                        <p>User Not Defined</p>
                    }
                </ContainerContent>
            </ContainerProfile>
        </BackgroundProfile>
    )
}