import { Presupuesto } from './components/Presupuesto';
import { GlobalStyle } from './components/StyledComponent';

function App() {
    return (
        <>
            <GlobalStyle />
            <header>
                <h2>Presupuestos páginas web</h2>
            </header>
            <main>
                <Presupuesto />
                {/* <div>Parte derecha</div> */}
            </main>
        </>
    );
}

export default App;
