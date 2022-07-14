import styled from 'styled-components';

export const BakgroundFailed = styled.div`
    background-color: ${(props) => props.theme.background};
    height: 70vh;
    padding: 20px;

    @media screen and (max-width: 600px){
        height: 65vh;
    }
`

export const BakgroundSuccess = styled.div`
    background-color: ${(props) => props.theme.background};
    height: 130vh;
    padding: 5px;

    @media screen and (max-width: 600px){
        height: 85vh;
    }
`

export const DivContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.card};
    padding: 20px;
    margin: 0 auto;
    max-width: 50%;
    height: 300px;
    margin-top: 50px;

    @media screen and (max-width: 600px) {
        margin: 0 0 0 0;
        max-width: 90%;
        margin-left: 10px;
        margin-right: 10px;
        margin-top: 10px;
    }
` 

export const DivContainerSuccess = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.card};
    padding: 20px;
    margin: 0 auto;
    max-width: 50%;
    height: 560px;
    margin-top: 20px;

    @media screen and (max-width: 600px) {
        margin: 0 0 0 0;
        max-width: 90%;
        margin-left: 10px;
        margin-right: 10px;
        margin-top: 10px;
    }
` 

export const TitleError = styled.div`
    margin: 0;
    font-size: 2rem;
    text-align: center;
    color: ${(props) => props.theme.search};
`

export const TextError = styled.p`
    margin: 0;
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
    font-size: 1.3rem;
    text-align: center;
    color: ${(props) => props.theme.secondary};
`

export const ButtonBack = styled.button`
    background-color: ${(props) => props.theme.secondary};
    font-size: 1rem;
    color: #fff;
    border: none;
    border-radius: 2px;
    padding: .5rem;
    cursor: pointer;
    margin-bottom: 30px;
    margin-top: 60px;
`

export const ButtonBackSuccess = styled.button`
    background-color: ${(props) => props.theme.secondary};
    font-size: 1rem;
    color: #fff;
    border: none;
    border-radius: 2px;
    padding: .5rem;
    cursor: pointer;
    margin-bottom: 30px;
    margin-top: 15px;
`

export const GifPet = styled.img`
    border-radius: 3px;
    margin-top: 20px;

    @media screen and (max-width: 600px) {
        width: 12rem;
    }
`