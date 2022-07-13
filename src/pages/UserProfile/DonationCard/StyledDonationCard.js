import styled from 'styled-components';

export const ContainerDonation = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 5rem);
    column-gap: 3rem;
    line-height: 1;
    align-items: center;
    justify-content: center;
    /* margin-top: 20px; */
    margin-bottom: 20px;
    margin-left: 20px;
    margin-right: 20px;
    background-color: ${(props) => props.theme.card};
    border-radius: 5px;
    padding: 20px;
`

export const Sub = styled.h4`
    font-size: .9rem;
    color: ${(props) => props.theme.secondary};
`

export const ButtonPago = styled.button`
    background-color: ${(props) => props.theme.secondary};
    font-size: 1rem;
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