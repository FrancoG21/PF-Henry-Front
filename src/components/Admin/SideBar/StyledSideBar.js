import styled from 'styled-components';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import FormatListNumberedOutlinedIcon from '@mui/icons-material/FormatListNumberedOutlined';
import FormatListNumberedRtlOutlinedIcon from '@mui/icons-material/FormatListNumberedRtlOutlined';
import {Link} from'react-router-dom';

export const ListDiv = styled.div`
    padding-left: 10px;
    width: 30%;
`

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 30%;
`

export const Title = styled.p`
    font-size: 10px;
    font-weight: 700;
    color: ${(props) => props.theme.secondary};
    margin-top: 15px;
    margin-bottom: 5px;
`

export const LiList = styled.li`
    display: flex;
    align-items: center;
    width: 30%;
    padding: 5px;
    cursor: pointer;
`

export const LinkList = styled(Link)`
    text-decoration: none;
`

export const IconMenu = styled(DashboardOutlinedIcon)`
    font-size: 18px;
    color: ${(props) => props.theme.secondary};
`

export const Icon = styled(PersonOutlineOutlinedIcon)`
    font-size: 18px;
    color: ${(props) => props.theme.secondary};
`

export const Icon2 = styled(PetsOutlinedIcon)`
    font-size: 18px;
    color: ${(props) => props.theme.secondary};
`

export const Icon3 = styled(AttachMoneyOutlinedIcon)`
    font-size: 18px;
    color: ${(props) => props.theme.secondary};
`

export const IconList1 = styled(FormatListBulletedOutlinedIcon)`
    font-size: 18px;
    color: ${(props) => props.theme.secondary};
`

export const IconList2 = styled(FormatListNumberedOutlinedIcon)`
    font-size: 18px;
    color: ${(props) => props.theme.secondary};
`

export const IconList3 = styled(FormatListNumberedRtlOutlinedIcon)`
    font-size: 18px;
    color: ${(props) => props.theme.secondary};
`

export const Text = styled.span`
    font-size: 13px;
    font-weight: 600;
    color: ${(props) => props.theme.secondary};
    margin-left: 10px;
`