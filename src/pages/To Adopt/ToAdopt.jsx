import React from "react";
import { Link } from "react-router-dom";

export default function ToAdopt() {
    return (
        <div>
            <h1>To Adopt</h1>
            <Link to={'/petcreate'}><button>Cargar un pet</button></Link>
        </div>
    )
}