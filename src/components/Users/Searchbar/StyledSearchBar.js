import styled from "styled-components";


export const ContainerSearch = styled.div`
   
    margin: 10px 20px 10px 20px;
`

export const Search = styled.input`
    background-color: ${(props) => props.theme.card};
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border: none;
    padding: .52rem;
    outline: none;
`

export const ButttonSearch = styled.button`
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border: none;
    padding: .49rem;
    cursor: pointer;
`