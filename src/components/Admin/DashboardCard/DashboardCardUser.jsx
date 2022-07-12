import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Dashboard, Left, Right, SubTitleCard, TitleCard, Icon } from './StyledDashboardCard';

export default function DashboardCardUser() {

    const [pet, setPet] = useState({})

    useEffect(() => {
        axios.get('/user').then((r) => {setPet(r.data)})
    }, [])

    return(
        <Dashboard>
            <Left>
                <div>
                    <TitleCard>Usuarios Totales: {pet.count}</TitleCard>
                </div>
            </Left>
            <Right>
                <Icon />
            </Right>
        </Dashboard>
    )
}