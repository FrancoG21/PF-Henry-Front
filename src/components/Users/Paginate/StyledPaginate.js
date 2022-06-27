import styled from 'styled-components';

export const Page = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`

export const ButtonPage = styled.div`
    background-color: ${(props) => props.theme.card};
    margin-left: 5px;
    margin-right: 5px;
    margin-bottom: 20px;
    border-radius: 5px;
    padding: .5rem;

    &:hover {
        background-color: ${(props) => props.theme.font_card};
    }
`

export const LinkButton = styled.a`
    color: ${(props) => props.theme.font_card};
    text-decoration: none;
    list-style: none;

    &:hover {
        color: #caf0f8;
    }
`