import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BackgroundProfile, ContainerContent, ContainerInfo, ContainerProfile, Email, ImageProfile, Name, TitleProfile } from "./StyledUserProfile";
import axios from "axios"

export default function UserProfile (){
    const [user, setUser] = useState(null)

    useEffect(()=>{
        axios.get('/user/' + JSON.parse(localStorage.getItem("userInfo"))).then(r=>{
            setUser(r.data)
            console.log(r.data)
        }, error => {
            console.log(error)
        })
    },[])

    return(
        <BackgroundProfile>
            <ContainerProfile>
                <TitleProfile>Mi Perfil</TitleProfile>
                <ContainerContent>
                    {
                        user 
                        ? <>
                        <p>{user.id}</p>
                        <p>{user.email}</p>
                        <p>{user.name} ; {user.rol}</p>
                        <img src={user.picture} alt='picture'></img>
                        </> : null
                    }
                </ContainerContent>
            </ContainerProfile>
        </BackgroundProfile>
    )
}


// {
//     user && user ? 
//     <ContainerInfo>
//         {/* <Image src={user.message.picture} alt='avatar profile'/> */}
//         <ImageProfile src='https://thumbs.dreamstime.com/b/dise%C3%B1o-de-la-lengua-de-programaci%C3%B3n-65093358.jpg' alt='avatar'/>
//         <Name>{user.message.name}</Name>
//         <Email>{user.message.email}</Email>
//     </ContainerInfo>
//     :
//     <p>User Not Defined</p>
// }