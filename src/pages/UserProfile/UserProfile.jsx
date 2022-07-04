import React from "react";
import { useSelector } from "react-redux";

export default function UserProfile (){

    const user = useSelector((state) => state.usuario)

    return(
        <div>
            <h1>My Profile</h1>


            {
                user && user ? 
                <div>
                    <h2>{user.message.name}</h2>
                    <h2>{user.message.email}</h2>
                    {/* <img src={user.message.picture} alt='avatar'/> */}
                </div>
                :
                <p>User Not Defined</p>
            }
        </div>
    )
}