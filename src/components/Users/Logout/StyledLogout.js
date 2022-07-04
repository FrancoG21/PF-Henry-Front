import styled from 'styled-components';

export const ButtonLogout = styled.button`
    background-color: ${(props) => props.theme.primary};
    border: none;
    color: ${(props) => props.theme.font};
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    cursor: pointer;
    margin-top: 30px;

    @media screen and (max-width: 600px) {
        text-align: center;
        padding: 0;
        width: 100%;
        display: table;
        margin: 0;
    }
`