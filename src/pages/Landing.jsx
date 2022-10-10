import { Link } from 'react-router-dom';
import '../styles/Landing.css';
import card from '../assets/images/card.jpg';

export const Landing = () => {
    return (
        <>
            <header className="text-center">
                <h1> [CreamosTuWeb.com]</h1>
            </header>
            <main className="text-center">
                <div className="container">
                    <div className="card">
                        <img src={card} alt="Pedir presupuesto" />
                    </div>
                    <Link to="/presupuesto">
                        <button className="btn">Pide tu presupuesto</button>
                    </Link>
                </div>
                <div className="welcome">
                    <p className="welcome-paragraph">
                        Bienvenido a <i>CreamosTuWeb.com</i>. En nuestra empresa te garantizamos el
                        tópico: <i>"El mejor producto, al mejor precio."</i>
                    </p>
                    <p className="welcome-paragraph">
                        Si quieres una web eficiente, interactiva, bien posicionada y creada para
                        tus clientes, tenemos el producto que necesitas.
                    </p>
                    <p>
                        Página web en los idiomas y número de páginas que necesites/desees, adméas
                        de los servicios de consultoría SEO y posicionamento web{' '}
                        <i>(con Google Ads)</i>.
                    </p>
                </div>
            </main>
        </>
    );
};
