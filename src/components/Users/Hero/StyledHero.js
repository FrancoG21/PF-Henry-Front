import styled from "styled-components";

export const BackgroundHero = styled.div`
    background-image: url(https://www.weare-family.com/petfanmx/wp-content/uploads/sites/10/2021/03/adopcion-mascotas.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    width: auto;
    height: 60vh;
    object-fit: cover;

    @media screen and (max-width: 600px){
        max-width: 100%;
    }
`

export const ShadowBackground = styled.div`
    background: linear-gradient(to bottom,rgba(255,255,255,0), ${(props) => props.theme.background} 100%);
    background-repeat: no-repeat;
    background-size: cover;
    width: auto;
    height: 60vh;
`

export const ContainerHero = styled.div`
    z-index: 1;
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

export const ContainerText = styled.div`
    margin: 0;
    width: 100%;
    display: flex;
    margin: 0;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
`

export const Info = styled.div`
    margin-bottom: 15px;
    margin-right: 15px;
    margin-left: 15px;
    flex: 1;
    max-width: 50%;
    height: 50%;

    @media screen and (max-width: 600px) {
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
`

export const TitleHero = styled.h1`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;

    @media screen and (max-width: 600px) {
        text-align: center;
        padding-bottom: 65px;
    }
`

export const Title = styled.h1`
    font-size: 48px;
    margin-bottom: 24px;
    line-height: 1.1;
    color: ${(props) => props.theme.font_alt};
    @media screen and (max-width: 600px) {
        font-size: 32px;
    }
`

export const Subtitle = styled.h3`
    max-width: 440px;
    margin-bottom: 25px;
    font-size: 18px;
    line-height: 24px;
    color: ${(props) => props.theme.font_alt};
`

export const ButtonHero = styled.button`
    border-radius: 2px;
    background: ${(props) => props.theme.secondary};
    white-space: nowrap;
    padding: 5px;
    font-size: 20px;
    color: #fff;
    outline: none;
    border: none;
    cursor: pointer;
    margin-top: 15px;

    &:hover {
        transition: all 0.3s ease-out;
        background: ${(props) => props.theme.primary};
    }
    
    @media screen and (max-width: 600px) {
        width: 80%;
        margin-top: 0;
    }
`