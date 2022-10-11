import styled from 'styled-components';

const Overlay = styled.div`
    /* width: 100vh; */
    align-items: center;
    animation: entradaModal 0.7s ease-in;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    @keyframes entradaModal {
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
const CardModal = styled.div`
    align-items: center;
    background-color: antiquewhite;
    border-radius: 15px;
    border: 2px black solid;
    color: navy;
    display: flex;
    height: 100px;
    margin: 16rem 0 5.2rem -4rem;
    padding-inline: 1.5rem;
    width: 420px;
`;

export { Overlay, CardModal };
