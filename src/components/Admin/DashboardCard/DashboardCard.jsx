import React from 'react';
import { Dashboard, Left, Right, SubTitleCard, TitleCard } from './StyledDashboardCard';

export default function DashboardCard() {

    return (
        <Dashboard>
            <Left>
                <TitleCard>Animales Totales: 47</TitleCard>
                <SubTitleCard>Adoptados: 40</SubTitleCard>
                <SubTitleCard>Extraviados: 3</SubTitleCard>
                <SubTitleCard>Transito: 5</SubTitleCard>
            </Left>
            <Right>
                right
            </Right>
        </Dashboard>
    )
}