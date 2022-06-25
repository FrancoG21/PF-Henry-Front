import styled from 'styled-components';

export const Page = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`

export const ButtonPage = styled.div`
    background-color: #caf0f8;
    margin-left: 5px;
    margin-right: 5px;
    margin-bottom: 20px;
    border-radius: 5px;
    padding: .5rem;

    &:hover {
        background-color: #011d32;
    }
`

export const LinkButton = styled.a`
    color: #011d32;
    text-decoration: none;
    list-style: none;

    &:hover {
        color: #caf0f8;
    }
`