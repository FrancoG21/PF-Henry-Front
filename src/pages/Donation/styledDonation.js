import styled from 'styled-components';

export const BackgroundDonation = styled.div`
    background: ${(props) => props.theme.background};
    height: 240vh;

    @media screen and (max-width: 600px) {
        height: 440vh;
    }
`

export const TitleDonation = styled.h1`
    color: ${(props) => props.theme.secondary};
    font-size: 3rem;
    margin: 0;
    text-align: center;
`

export const SubTitle = styled.p`
    color: ${(props) => props.theme.secondary};
    text-align: center;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 50px;
`


export const ContainerTextDonation = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;

    @media screen and (max-width:600px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

export const Container = styled.div`
    margin: 20px;
    
    @media screen and (max-width: 600px) {
        margin: 0;
    }
`

export const SubtitleDonation = styled.h3`
    color: ${(props) => props.theme.secondary};
    font-size: 1.5rem;
    text-align: center;
`

export const TextDonation = styled.p`
    color: ${(props) => props.theme.secondary};
    font-size: 1.2rem;
    text-align: center;
    margin-left: 20px;
    margin-right: 20px;
`

export const ContainerCard = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;

    @media screen and (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

export const Post = styled.div`
    width: 400px;
    height: 500px;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    position: relative;
    -webkit-box-shadow: 0px 0px 15px 1px rgba(0,0,0,0.93); 
    box-shadow: 0px 0px 15px 1px rgba(0,0,0,0.93);
    margin-left: 20px;
    margin-right: 20px;

    &:hover {
        margin-top: -20px;
    }

    @media screen and (max-width: 600px) {
        width: 90%;
    }
`

export const HeaderPost = styled.div`
    width: 100%;
    height: 40%;
    background: #ddd;
    position: absolute;
    top: 0;
    -webkit-transition: cubic-bezier(0.68, -0.55, 0.27, 01.55) 320ms;
    -moz-transition: cubic-bezier(0.68, -0.55, 0.27, 01.55) 320ms;
    -ms-transition: cubic-bezier(0.68, -0.55, 0.27, 01.55) 320ms;
    -o-transition: cubic-bezier(0.68, -0.55, 0.27, 01.55) 320ms;
    transition: cubic-bezier(0.68, -0.55, 0.27, 01.55) 320ms;

    &:hover {
        margin-top: -20px;
    }
`

export const ImagePet = styled.img`
    transform: translatey(-10px) translatex(-5px) scale(1.05);
    max-width: 100%;
    height: auto;
    transition: ease-in-out 600ms;
`

export const BodyContent = styled.div`
    width: 100%;
    height: 60%;
    background: ${(props) => props.theme.card_alt};
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-transition: cubic-bezier(0.68, -0.55, 0.27, 01.55) 320ms;
    -moz-transition: cubic-bezier(0.68, -0.55, 0.27, 01.55) 320ms;
    -ms-transition: cubic-bezier(0.68, -0.55, 0.27, 01.55) 320ms;
    -o-transition: cubic-bezier(0.68, -0.55, 0.27, 01.55) 320ms;
    transition: cubic-bezier(0.68, -0.55, 0.27, 01.55) 320ms;
    cursor: pointer;
`

export const PostContent = styled.div`
    width: 80%;
    height: 80%;
    background: ${(props) => props.theme.card_alt};
    position: relative;
`

export const TitleCard = styled.h2`
    color: ${(props) => props.theme.search};
    font-size: 20px;
    font-weight: bold;
`

export const TextCard = styled.p`
    color: ${(props) => props.theme.search};
    font-size: 14px;
    font-weight: normal;
`

export const ContainerButton = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 30px;

    @media screen and (max-width: 600px) {
        flex-wrap: wrap;
        justify-content: center;
        margin-left: 20px;
        margin-right: 20px;
    }
`

export const ButtonDonation = styled.button`
    background-color: ${(props) => props.theme.primary};
    font-size: 1rem;
    color: #fff;
    border: none;
    border-radius: 2px;
    padding: .5rem;
    cursor: pointer;
    margin-left: 20px;
    margin-bottom: 30px;

    &:hover {
        transition: all 0.3s ease-out;
        background: ${(props) => props.theme.primary};
    }
`

export const ButtonSuscription = styled.button`
    background-color: ${(props) => props.theme.primary};
    font-size: 1rem;
    color: #fff;
    border: none;
    border-radius: 2px;
    padding: .5rem;
    cursor: pointer;
    margin-top: 20px;

    &:hover {
        transition: all 0.3s ease-out;
        background: ${(props) => props.theme.primary};
    }
`

export const ContainerButtonSuscription = styled.div`
    display: flex;
    justify-content: center;
`