import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html, body {
  background-color: #395B64;
  color: antiquewhite;
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-size: 1.1rem;
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

export const Fieldset = styled.fieldset`
    background-color: antiquewhite;
    border-radius: 5px;
    border: 1px solid black;
    color: black;
    min-width: 35%;
    padding: 1rem;
`;

export const Legend = styled.legend`
    background-color: antiquewhite;
    border-radius: 5px;
    border: 1px black solid;
    padding: 0.5rem;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
`;

export const Label = styled.label`
    align-self: flex-start;
`;

export const Input = styled.input`
    accent-color: orange;
`;
