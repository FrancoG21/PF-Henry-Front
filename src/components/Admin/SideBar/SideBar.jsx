import React from 'react';
import { 
    ListDiv,
    List,
    Title,
    LiList,
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
                    <Title>LISTADO</Title>
                    <LiList>
                        <Icon />
                        <Text>Usuarios</Text>
                    </LiList>
                    <LiList>
                        <Icon2 />
                        <LinkList to='/admin/pets'>
                        <Text>Animales</Text>
                        </LinkList>
                    </LiList>
                    <LiList>
                        <Icon3 />
                        <Text>Donaciones</Text>
                    </LiList>
                </List>
            </ListDiv>
    )
}