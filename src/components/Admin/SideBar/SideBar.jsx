import React from 'react';
import {
    ListDiv,
    List,
    Title,
    LiList,
    IconMenu,
    Icon,
    Icon2,
    Icon3,
    Text,
    LinkList,
} from './StyledSideBar';

export default function SideBar() {

    return (
        <ListDiv>

            <List>
                <Title>MENU</Title>
            <LiList>
                <IconMenu />
                <LinkList to='/admin'>
                    <Text>Dashboard</Text>
                </LinkList>
            </LiList>

            <br/>
                <Title>LISTADO</Title>
                <LiList>
                    <Icon />
                    <LinkList to='/admin/users'>
                        <Text>Usuarios</Text>
                    </LinkList>
                </LiList>
                <LiList>
                    <Icon2 />
                    <LinkList to='/admin/pets'>
                        <Text>Animales</Text>
                    </LinkList>
                </LiList>
            </List>
        </ListDiv>
    )
}