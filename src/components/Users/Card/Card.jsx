import React from "react";
import { Link } from "react-router-dom";
import { CardImage, Cards, NameCard, TitleCard } from './StyledCard';


export default function PetCard({ id, name, image }) {
    return (
        <Cards>
            <NameCard to={`/petdetail/${id}`}>
                <CardImage src={image} alt={name} height='200px'/>
                <TitleCard>{name[0].toUpperCase()+name.slice(1).toLowerCase()}</TitleCard>
            </NameCard>
        </Cards>
    )
}
