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
    IconList1,
    IconList2,
    IconList3,
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
                <LiList>
                    <Icon3 />
                    <LinkList to='/admin/donation'>
                        <Text>Donaciones</Text>
                    </LinkList>
                </LiList>

                <br />

                <Title>PETICIONES</Title>
                <LiList>
                    <IconList1 />
                    <LinkList to='/admin/formadopt'>
                        <Text>Adopcion</Text>
                    </LinkList>
                </LiList>
                <LiList>
                    <IconList2 />
                    <LinkList to='/admin/formtransit'>
                        <Text>Transito</Text>
                    </LinkList>
                </LiList>
                <LiList>
                    <IconList3 />
                    <LinkList to='/admin/formlost'>
                        <Text>Extraviados</Text>
                    </LinkList>
                </LiList>
            </List>
        </ListDiv>
    )
}