import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Dashboard, Left, Right, SubTitleCard, TitleCard, Icon3 } from './StyledDashboardCard';

export default function DashboardCard() {

    const [pet, setPet] = useState({});

    useEffect(() => {
        axios.get('pet/count').then((response) => { setPet(response.data) })
    }, [])

    return (
        <Dashboard>
            <Left>
                <div key={pet.id}>
                    <TitleCard>Animales Total: {pet.pets}</TitleCard>
                    <SubTitleCard>Adoptados: {pet.adopted}</SubTitleCard>
                    <SubTitleCard>Extraviados: {pet.lost}</SubTitleCard>
                    <SubTitleCard>Transito: {pet.transit}</SubTitleCard>
                </div>
            </Left>
            <Right>
                <Icon3 />
            </Right>
        </Dashboard>
    )
}