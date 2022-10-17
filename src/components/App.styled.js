import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
html, body {
  font-size: 1rem;
  margin: 1rem 2rem 0 2rem;
  text-align: center;
}
main {
    display: flex;
    justify-content: space-around;
    margin-top: 2rem;
}
`;
const FieldsetForm = styled.fieldset`
    backdrop-filter: blur(-5px);
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 15px;
    border: 1px solid black;
    color: black;
    margin: 1rem;
    max-height: 445px;
    min-width: 42%;
    padding: 1rem;
`;
const FieldsetBudget = styled.fieldset`
    backdrop-filter: blur(-5px);
    background-color: rgb(107, 122, 161, 0.9);
    border-radius: 15px;
    border: 1px solid black;
    color: black;
    height: 500px;
    margin: 1rem;
    max-height: 460px;
    min-width: 58%;
    padding: 1rem;
`;
const LegendForm = styled.legend`
    background-color: #672f2f;
    border-radius: 5px;
    border: 1px black solid;
    color: antiquewhite;
    padding: 0.5rem;
`;
const LegendBudget = styled.legend`
    background-color: #383e56;
    border-radius: 5px;
    border: 1px black solid;
    color: antiquewhite;
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
    color: antiquewhite;
    margin-top: 2rem;
`;

export {
    GlobalStyle,
    FieldsetForm,
    FieldsetBudget,
    LegendForm,
    LegendBudget,
    Form,
    Label,
    Input,
    Panell,
    Footer
};
