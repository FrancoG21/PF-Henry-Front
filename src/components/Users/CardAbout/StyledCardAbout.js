import styled from "styled-components";
import {Link} from 'react-router-dom';
import {BsGithub, BsLinkedin} from 'react-icons/bs';

export const Card = styled.div`
    max-width: 250px;
    margin: 150px auto 0;
    background-color: ${(props) => props.theme.card_alt};
    text-align: center;
    font-size: 20px;
    border-radius: 15px;
    -webkit-box-shadow: 0px 0px 15px 1px rgba(0,0,0,0.93); 
    box-shadow: 0px 0px 15px 1px rgba(0,0,0,0.93);
`

export const CardHeader = styled.div`
    position: relative;
    height: 48px;
`

export const ProfileCard = styled.img`
    width: 130px;
    height: 130px;
    border-radius: 1000px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 8px solid ${(props) => props.theme.secondary};
    box-shadow: 0 0 20px #00000033;

    &:hover {
        width: 180px;
    height: 180px;
    border: 8px solid ${(props) => props.theme.secondary};
    }
`

export const CardBody = styled.div`
    padding: 10px 40px;
`

export const Name = styled.p`
    margin-top: 30px;
    font-size: 22px;
    font-weight: bold;
    color: ${(props) => props.theme.secondary};

    &:hover {
        margin-top: 30px;
        font-size: 24px;
        color: ${(props) => props.theme.secondary};
    }
`

export const Email = styled(Link)`
    font-size: 14px;
    color: ${(props) => props.theme.secondary};

    &:hover{
        font-size: 16px;
        color: ${(props) => props.theme.secondary};
    }
`

export const Job = styled.p`
    margin-top: 10px;
    font-size: 14px;
    color: ${(props) => props.theme.font_alt};
`

export const SocialLinks = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;

    &:last-child{
        margin-right: 0;
    }
`

export const SocialIcons = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    background-color: ${(props) => props.theme.secondary};
    color: #ffffff;
    font-size: 20px;
    border-radius: 100%;
    text-decoration: none;
    margin: 0 13px 30px 0;
    cursor: pointer;

    &:hover{
    background-color: ${(props) => props.theme.secondary};
    height: 50px;
    width: 50px;
    text-decoration: none;
    }
`