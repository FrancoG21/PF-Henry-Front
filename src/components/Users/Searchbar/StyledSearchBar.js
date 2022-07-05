import styled from "styled-components";

export const ContainerSearch = styled.div`
    display: flex;
    margin-top: 50px;
    margin-left: 8px;
    
    @media screen and (max-width: 600px) {
        justify-content: center;
        margin-left: 0;
        
    }
`

export const Search = styled.input`
    background-color: ${(props) => props.theme.card};
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border: none;
    padding: .52rem;
    outline: none;
    height: 30px;
`

export const ButttonSearch = styled.button`
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border: none;
    padding: .49rem;
    cursor: pointer;
    height: 30px;
`