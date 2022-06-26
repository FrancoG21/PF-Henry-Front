import styled from "styled-components";

export const DetailContainer = styled.div`
    display: grid;
    background-color: ${(props) => props.theme.primary};
    grid-template-columns: repeat(2, 1fr);
    border-radius: 3px;
    max-width: 120rem;
    margin: 0 auto;
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 30px;
    margin-bottom: 30px;

    @media (max-width: 600px) {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        column-gap: 2rem;
    }
`

export const ContainerImage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const ImageDetail = styled.img`
    grid-row: 1 / 2;
    padding: .7rem;
    border-radius: 5px;
    width: 35rem;
    
    @media (max-width: 600px){
        width: 20rem;
    }
`

export const DetailTitle = styled.h1`
    font-size: 3rem;
    text-transform: uppercase;
    text-align: center;
    margin-top: 5px;
    color: ${(props) => props.theme.secondary};

    @media screen and (max-width: 600px) {
        justify-content: center;
    }
`

export const ContainerContent = styled.div`
    margin-top: 50px;

    @media screen and (max-width: 600px) {
        margin-left: 10px;
    }
`

export const Span = styled.span`
    color: #fff;
    font-size: 2rem;
` 

export const SubTitle = styled.h2`
    font-size: 2.5rem;
    color: ${(props) => props.theme.secondary};
`

export const SubTitle2 = styled.h3`
    font-size: 2rem;
    color: ${(props) => props.theme.secondary};
`

export const SubTitle3 = styled.h4`
    font-size: 1.8rem;
    color: ${(props) => props.theme.secondary};
`