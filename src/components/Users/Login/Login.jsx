import React from "react";
import { useAuth0, User } from "@auth0/auth0-react";

export default function Login () {

    const { loginWithRedirect, user } = useAuth0()

    return (
        <div>
            <button onClick={() => loginWithRedirect()}>Login</button>
        </div>
    )
}