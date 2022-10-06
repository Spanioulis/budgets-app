import { useState } from 'react';
import { Fieldset, Form, Label, Legend, Input, Panell } from './StyledComponent';
import { Button } from './Button';

export const Presupuesto = () => {
    // Hooks
    const [presupuesto, setPresupuesto] = useState({
        web: false,
        seo: false,
        google: false,
        pages: 0,
        languages: 0
    });
    // Prevenir pages or languages negativas
    if (presupuesto.pages < 0) {
        setPresupuesto({
            ...presupuesto,
            pages: 0
        });
    } else if (presupuesto.languages < 0) {
        setPresupuesto({
            ...presupuesto,
            languages: 0
        });
    }
    const [importeTotal, setImporteTotal] = useState(0);
    // Calcular extras web
    const { pages, languages } = presupuesto;
    let totalExtras = (pages + languages) * 30;
    // Handles
    const handleCheckbox = ({ target: { id, value, checked } }) => {
        const isChecked = checked;
        // Resetear pages & languages al deseleccionar opción Web
        id === 'web'
            ? setPresupuesto({ ...presupuesto, [id]: isChecked, pages: 0, languages: 0 })
            : setPresupuesto({ ...presupuesto, [id]: isChecked });
        // Añadir importe o no según estado del check
        isChecked
            ? setImporteTotal(importeTotal + Number(value))
            : setImporteTotal(importeTotal - Number(value));
    };
    const handleNumber = ({ target: { id, value } }) => {
        setPresupuesto({ ...presupuesto, [id]: Number(value) });
    };
    //TODO: Destructuring 'event'
    const handleClick = (event) => {
        event.preventDefault();

        if (event.target.id === 'add') {
            setPresupuesto({
                ...presupuesto,
                [event.target.name]: presupuesto[event.target.name] + 1
            });
        } else {
            setPresupuesto({
                ...presupuesto,
                [event.target.name]: presupuesto[event.target.name] - 1
            });
        }
    };

    return (
        <Fieldset>
            <Legend> ¿Qué quieres hacer? </Legend>
            <Form>
                <Label htmlFor="web">
                    <Input type="checkbox" id="web" value={500} onChange={handleCheckbox} />
                    Una página web (500€)
                </Label>
                {presupuesto.web && (
                    <Panell className="panell">
                        <div className="panell-label">
                            <label htmlFor="pages">Número de páginas: </label>
                            <Button
                                classNameAdd="button-add"
                                classNameInput="panell-input"
                                classNameSub="button-sub"
                                handleClick={handleClick}
                                idAdd="add"
                                idInput="pages"
                                idSub="sub"
                                name="pages"
                                handleNumber={handleNumber}
                                type="number"
                                value={presupuesto.pages}
                            ></Button>
                        </div>
                        <div className="panell-label">
                            <label htmlFor="languages">Número de idiomas: </label>
                            <Button
                                classNameAdd="button-add"
                                classNameInput="panell-input"
                                classNameSub="button-sub"
                                handleClick={handleClick}
                                idAdd="add"
                                idInput="languages"
                                idSub="sub"
                                name="languages"
                                handleNumber={handleNumber}
                                type="number"
                                value={presupuesto.languages}
                            ></Button>
                        </div>
                    </Panell>
                )}
                <Label htmlFor="seo">
                    <Input type="checkbox" id="seo" value={300} onChange={handleCheckbox} />
                    Una consultoria SEO (300€)
                </Label>
                <Label htmlFor="google">
                    <Input type="checkbox" id="google" value={200} onChange={handleCheckbox} />
                    Una campaña de Google Ads (200€)
                </Label>
                <hr />
                <p>
                    <em>Precio:</em>{' '}
                    <strong>{importeTotal > 0 ? importeTotal + totalExtras : 0}€</strong>
                </p>
            </Form>
        </Fieldset>
    );
};
