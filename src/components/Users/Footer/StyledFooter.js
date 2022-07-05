import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BsLinkedin, BsArrowRight } from 'react-icons/bs';


export const BackgroundFooter = styled.footer`
    background-color: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin: 10px 1px;
    
    @media screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
    }
`

export const FooterLinks = styled.div`
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: center;

    @media screen and(max-width: 600px){
        padding-top: 80px;
        display: flex;
        flex-direction: column;
    }
`

export const FooterLinksContainer = styled.div`
    display: flex;

    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`

export const FooterLinksItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 260px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 6000px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`

export const DivIcon = styled.div`
    display: flex;
`

export const Icon = styled(BsLinkedin)`
    margin-top: 0.4rem;
    margin-right: 0.5rem;
`

export const IconArrow = styled(BsArrowRight)`
    margin-top: 0.4rem;
    margin-right: 0.5rem;
`

export const FooterTitle = styled.h2`
    margin-bottom: 6px;
`

export const FooterTitles = styled.h2`
    margin-bottom: 6px;
    color: #000;
`

export const FooterText = styled(Link)`
    font-size: 1rem;
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    margin-left: 5px;

    &:hover {
        color: #0467fb;
        transition: 0.3s ease-out;
    }
`

export const ContactText = styled.a`
    font-size: 1rem;
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;

    &:hover {
        color: #0467fb;
        transition: 0.3s ease-out;
    }
`

export const TextCopy = styled.small`
    color: #fff;
    margin-bottom: 16px;
`
