import { useState } from 'react';
import { GlobalStyle, Fieldset, Form, Label, Legend, Input } from './components/StyledComponent';

function App() {
    const [totalPresupuesto, setTotalPresupuesto] = useState(0);

    // Manejar evento por si está checkeado o no
    const handleOnChange = ({ target }) => {
        const isChecked = target.checked;
        console.log(`Se ha clicado el ckeck de ${target.id} con valor ${+target.value}`);

        isChecked
            ? setTotalPresupuesto(totalPresupuesto + Number(target.value))
            : setTotalPresupuesto(totalPresupuesto - Number(target.value));
    };

    return (
        <>
            <GlobalStyle />
            <header>
                <h2>Presupuestos páginas web</h2>
            </header>
            <main>
                <Fieldset>
                    <Legend> ¿Qué quieres hacer? </Legend>
                    <Form>
                        <Label htmlFor="web">
                            <Input type="checkbox" id="web" value={500} onChange={handleOnChange} />
                            Una página web (500€)
                        </Label>
                        <Label htmlFor="seo">
                            <Input
                                type="checkbox"
                                id="seo"
                                value={300}
                                onChange={handleOnChange}
                                // onClick={(event) => {
                                //     console.log(event);
                                //     console.log(event.target.checked);
                                // }}
                            />
                            Una consultoria SEO (300€)
                        </Label>
                        <Label htmlFor="google">
                            <Input type="checkbox" id="google" value={200} onChange={handleOnChange} />
                            Una campaña de Google Ads (200€)
                        </Label>
                        <hr />
                        <p>
                            <em>Precio:</em> <strong>{totalPresupuesto > 0 ? totalPresupuesto : 0}€</strong>
                        </p>
                    </Form>
                </Fieldset>
                <div>Parte derecha</div>
            </main>
        </>
    );
}

export default App;
