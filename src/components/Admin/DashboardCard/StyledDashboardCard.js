import styled from 'styled-components';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';

export const Dashboard = styled.div`
    display: flex;
    justify-content: space-between;
    flex: 1;
    padding: 10px;
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    border-radius: 10px;
    height: 100px;
`

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Right = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const TitleCard = styled.h4`
    font-weight: 700;
    font-size: 14px;
    color: rgb(160, 160, 160);
    margin-top: 5px;
    margin-bottom: 5px;
`

export const SubTitleCard = styled.p`
    font-size: 12px;
    margin: 0;
`

export const Icon = styled(AccountCircleOutlinedIcon)`
    color: ${(props) => props.theme.primary};
`

export const Icon2 = styled(ListAltOutlinedIcon)`
    color: ${(props) => props.theme.primary};
`

export const Icon3 = styled(PetsOutlinedIcon)`
    color: ${(props) => props.theme.primary};
`