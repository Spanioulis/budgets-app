import { useState } from 'react';
import { Fieldset, Form, Label, Legend, Input, Panell } from './StyledComponent';
import '../styles/App.css';

export const Presupuesto = () => {
    // HOOKS
    const [presupuesto, setPresupuesto] = useState({
        web: false,
        seo: false,
        google: false,
        pages: 0,
        languages: 0
    });
    const [importeTotal, setImporteTotal] = useState(0);
    // Calcular extras
    const { pages, languages } = presupuesto;
    let totalExtras = (pages + languages) * 30;
    // HANDLES
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

    //! BREAK-POINT

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
                            <input
                                className="panell-input"
                                type="number"
                                id="pages"
                                value={presupuesto.pages}
                                min={0}
                                onChange={handleNumber}
                            />
                        </div>
                        <div className="panell-label">
                            <label htmlFor="languages">Número de idiomas: </label>
                            <input
                                className="panell-input"
                                type="number"
                                id="languages"
                                value={presupuesto.languages}
                                min={0}
                                onChange={handleNumber}
                            />
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
