import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const DivButtons = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`

export const ButtonEdit = styled(Link)`
    text-decoration: none;
    padding: 2px 5px;
    border-radius: 5px;
    color: #595959;
    border: 1px solid #595959;
    cursor: pointer;
`

export const ButtonDelete = styled.button`
    padding: 2px 5px;
    border-radius: 5px;
    color: red;
    border: 1px solid red;
    cursor: pointer;
`