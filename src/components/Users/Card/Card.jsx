import React from "react";
import { Link } from "react-router-dom";
import styles from "./Cards.css";

export default function PetCard({ id, name, image }) {
    return (
        <div>
            <Link to={`/petdetail/${id}`}>
                <img src={image} alt={name} />
                <h3>{name}</h3>
            </Link>
        </div>
    )
}
