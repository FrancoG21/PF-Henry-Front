import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Cards = styled.div`
    height: 35%;
    background-color: #595959;
    padding: 1rem;
    border: 2px;
    margin-left: 20px;
    margin-right: 20px;

    &:hover {
        transform: scale(1.03);
        transition: all .3s ease;
    }
` 

export const NameCard = styled(Link)`
    height: 35%;
`

export const CardImage = styled.img`
    width: 100%;
    height: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`

export const TitleCard = styled.h3`
    text-decoration: none;
    font-size: 1rem;
`