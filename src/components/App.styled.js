import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html, body {
  font-size: 1rem;
  margin: 1rem;
  text-align: center;
}
main {
    align-items: center;
    display: flex;
    justify-content: space-around;
    margin-top: 2rem;
}
`;
const Fieldset = styled.fieldset`
    background-color: antiquewhite;
    border-radius: 5px;
    border: 1px solid black;
    color: black;
    min-width: 40%;
    padding: 1rem;
`;
const Legend = styled.legend`
    background-color: antiquewhite;
    border-radius: 5px;
    border: 1px black solid;
    padding: 0.5rem;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
`;
const Label = styled.label`
    align-self: flex-start;
`;
const Input = styled.input`
    accent-color: orange;
`;
const Panell = styled.div`
    animation: entradaPanell 1.2s ease-in;
    border-radius: 5px;
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: flex-end;
    padding: 0.8rem 0.5rem 0.8rem 0rem;
    width: 85%;
    @keyframes entradaPanell {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 0.5;
        }
        100% {
            opacity: 1;
        }
    }
`;
const Footer = styled.footer`
    margin-top: 2rem;
    color: antiquewhite;
`;

export { GlobalStyle, Fieldset, Legend, Form, Label, Input, Panell, Footer };
