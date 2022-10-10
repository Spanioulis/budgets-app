import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { AppPresupuestos } from './pages/AppPresupuestos';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/presupuesto" element={<AppPresupuestos />}></Route>
                    <Route path="/" element={<Landing />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}
export default App;
