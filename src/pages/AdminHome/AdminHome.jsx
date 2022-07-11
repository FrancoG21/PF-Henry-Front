import React from 'react';
import DashboardCard from '../../components/Admin/DashboardCard/DashboardCard';
import SideBar from '../../components/Admin/SideBar/SideBar';
import Chart from '../../components/Admin/Chart/Chart';
import { BackgroundList, ContainerDashboard, ContainerList, ContainerChart } from './StyledAdminHome';

export default function AdminHome() {

    return (
        <BackgroundList>
            <ContainerList>
                <SideBar />
                <div>
                    <ContainerDashboard>
                        <DashboardCard />
                        <DashboardCard />
                        <DashboardCard />
                    </ContainerDashboard>
                    <div>
                        <div>
                            <ContainerChart>
                                <Chart />
                            </ContainerChart>
                        </div>
                    </div>
                </div>
            </ContainerList>
        </BackgroundList >
    )
}