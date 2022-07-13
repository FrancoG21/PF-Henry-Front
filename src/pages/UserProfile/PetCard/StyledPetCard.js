import styled from 'styled-components';

export const CardContainer = styled.div`
    display: grid;
    background-color: ${(props) => props.theme.card};
    grid-template-columns: repeat(3, 5rem);
    column-gap: 3rem;
    line-height: 1;
    align-items: center;
    justify-content: center;
    /* margin-top: 20px; */
    margin-bottom: 20px;
    border-radius: 5px;
    padding: 20px;
    margin-left: 25px;
    margin-right: 25px;
`

export const Sub = styled.h4`
    font-size: .9rem;
    color: ${(props) => props.theme.secondary};
`

export const ImageCard = styled.img`
    border-radius: 10px;
    width: 100px;
    height: 100px;
` 

export const ButtonCard = styled.button`
    background-color: ${(props) => props.theme.secondary};
    font-size: .7rem;
    color: #fff;
    border: none;
    border-radius: 2px;
    padding: .5rem;
    cursor: pointer;
    margin-bottom: 30px;

    &:hover {
        transition: all 0.3s ease-out;
        background: ${(props) => props.theme.primary};
    }
`

