import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${props => props.theme.background};
        color: ${props => props.theme.font};
        scroll-behavior: smooth;
    }

    a {
        list-style: none;
    }
    ul {
        list-style: none;
    }
`

export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-left: 30px;
    padding-right: 30px;

    @media screen and (max-width: 991px) {
        padding-right: 30px;
        padding-left: 30px;
    }
`