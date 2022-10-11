import { Link } from 'react-router-dom';
import { Presupuesto } from '../components/Presupuesto';
import { GlobalStyle, Footer } from '../components/App.styled';
import '../styles/App.css';

const AppPresupuestos = () => {
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
            <Footer>
                <Link to="/">
                    <span className="link">Volver a inicio</span>
                </Link>
            </Footer>
        </>
    );
};

export { AppPresupuestos };
