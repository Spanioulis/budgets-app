import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html, body {
  background-color: #395B64;
  ${'' /* background-color: #242d38; */}
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
const Fieldset = styled.fieldset`
    background-color: antiquewhite;
    border-radius: 5px;
    border: 1px solid black;
    color: black;
    min-width: 35%;
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
    border: 2px solid black;
    border-radius: 5px;
    width: 80%;
    padding: 0.8rem 0.5rem 0.8rem 0rem;
    gap: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

export { GlobalStyle, Fieldset, Legend, Form, Label, Input, Panell };
