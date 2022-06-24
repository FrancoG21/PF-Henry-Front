import React from "react";
import { Link } from "react-router-dom";


export default function PetCard({ id, name, image }) {
    return (
        <div>
            <Link to={`/petdetail/${id}`}>
                <img src={image} alt={name} height='200px' />
                <h3>{name[0].toUpperCase()+name.slice(1).toLowerCase()}</h3>
            </Link>
        </div>
    )
}
