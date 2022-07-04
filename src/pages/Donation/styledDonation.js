import styled from 'styled-components';

export const BackgroundDonation = styled.div`
    background: ${(props) => props.theme.background};
    height: 80vh;
`

export const TitleDonation = styled.h1`
    color: ${(props) => props.theme.secondary};
    font-size: 3rem;
    margin: 0;
    margin-left: 30px;
`

export const SubTitle = styled.p`
    color: ${(props) => props.theme.secondary};
    margin-left: 30px;
`

export const ContainerButton = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 30px;
`

export const ButtonDonation = styled.button`
    background-color: ${(props) => props.theme.primary};
    font-size: 1rem;
    color: #fff;
    border: none;
    border-radius: 3px;
    padding: .3rem;
    cursor: pointer;
    margin-left: 20px;

    &:hover {
        transition: all 0.3s ease-out;
        background: ${(props) => props.theme.primary};
    }
`

export const Suscription = styled.h4`
    color: ${(props) => props.theme.secondary};
    font-size: 1.5rem;
    margin: 0;
    margin-left: 30px;
    margin-top: 40px;
`

export const ButtonSuscription = styled.button`
    background-color: ${(props) => props.theme.primary};
    font-size: 1rem;
    color: #fff;
    border: none;
    border-radius: 3px;
    padding: .3rem;
    cursor: pointer;
    margin-left:30px;
    margin-top: 20px;

    &:hover {
        transition: all 0.3s ease-out;
        background: ${(props) => props.theme.primary};
    }
`