import React from "react";
import { Link } from "react-router-dom";
import { CardImage, Cards, NameCard, TitleCard } from './StyledCard';


export default function PetCard({ id, name, image }) {
    return (
        <Cards>
            <NameCard to={`/petdetail/${id}`}>
                <div>
                    <CardImage src={image} alt={name} height='200px'/>
                </div>
                <TitleCard>{name[0].toUpperCase()+name.slice(1).toLowerCase()}</TitleCard>
            </NameCard>
        </Cards>
    )
}
