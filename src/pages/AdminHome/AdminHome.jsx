import React from 'react';
import DashboardCard from '../../components/Admin/DashboardCard/DashboardCard';
import DashboardCardUser from '../../components/Admin/DashboardCard/DashboardCardUser';
import DashboardCardPetition from '../../components/Admin/DashboardCard/DashboadCardPetition';
import SideBar from '../../components/Admin/SideBar/SideBar';
import Chart from '../../components/Admin/Chart/Chart';
import ChartCircle from '../../components/Admin/Chart/ChartCircle';
import { BackgroundList, ContainerDashboard, ContainerList, ContainerChart } from './StyledAdminHome';

export default function AdminHome() {

    return (
        <BackgroundList>
            <ContainerList>
                <SideBar />
                <div>
                    <ContainerDashboard>
                        <DashboardCard />
                        <DashboardCardUser />
                        <DashboardCardPetition />
                    </ContainerDashboard>
                    <div>
                        <div>
                            <ContainerChart>
                                <div>
                                    <ChartCircle />
                                </div>
                                <div>
                                    <Chart />
                                </div>
                            </ContainerChart>
                        </div>
                    </div>
                </div>
            </ContainerList>
        </BackgroundList >
    )
}