import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: 414px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  max-width: 100%;
  padding: 11px 13px;
  background: #f9f9fa;
  color: #f03d4e;
  margin-bottom: 0.9rem;
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 14px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  &:focus,
  &:hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`;

export const Button = styled.button`
  max-width: 100%;
  padding: 11px 13px;
  color: rgb(253, 249, 243);
  font-weight: 600;
  text-transform: uppercase;
  background: ${(props) => props.theme.secondary};
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  &:hover {
    background: ${(props) => props.theme.primary};
  }
`;

export const Title = styled.h2`
  font-weight: normal;
  color: #2a2a29;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const Acces = styled(Link)`
    text-decoration: none;
    color: #fff;
`


export const BackgroundLogin = styled.div`
    background-color: ${(props) => props.theme.background};
    height: 60vh;
`

// export const FormLogin = styled.div`
//     background-color: ${(props) => props.theme.card};
//     border-radius: 2px;
// `


// export const Log = styled.div`
//     height: calc(100vh - 50px);
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `

export const LoginTitle = styled.h1`
    position: absolute;
    top: 170px;
    color: ${(props) => props.theme.secondary};
`

// export const ContainerLogin = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     margin: 16px;
//     text-align: left;
//     width: 260px;
//     box-sizing: border-box;
//     color: #fff;

//     @media screen and (max-width: 6000px) {
//         margin: 0;
//         padding: 10px;
//         width: 100%;
//     }
// `

// export const Wrapper = styled.div`
//     width: 65%;
//     height: 90%;
//     flex-direction: column;
// `

// export const Wrappers = styled.div`
//     width: 65%;
//     height: 90%;
//     flex-direction: column;
//     justify-content: center;
//     align-content: center;
// `

// export const InputLogin = styled.input`
//     width: 200px;
//     padding: 15px 20px;
//     margin-bottom: 5px;
// `

export const Errors = styled.p`
    font-size: 10px;
    color: red;
    margin: 0;
`

// export const ButtonLogin = styled.button`
//     width: 200px;
//     background-color: rgba(128, 0, 128, 0.671);
//     color: white;
//     font-weight: bold;
//     border: none;
//     padding: 15px 20px;
//     border-radius: 5px;
//     cursor: pointer;
// `

// export const ButtonRegister = styled.button`
//     width: 200px;
//     background-color: rgba(128, 0, 128, 0.671);
//     color: white;
//     font-weight: bold;
//     border: none;
//     padding: 15px 20px;
//     border-radius: 5px;
//     cursor: pointer;
// `

// export const ButtonGoogle = styled.button`
//     width: 150px;
//     padding: 15px 25px;
//     border-radius: 5px;
//     color: white;
//     display: flex;
//     align-items: center;
//     font-weight: bold;
//     cursor: pointer;
//      background-color: #df4930;
// `