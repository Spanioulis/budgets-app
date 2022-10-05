import { useState } from 'react';
import { Fieldset, Form, Label, Legend, Input } from './StyledComponent';

export const Presupuesto = () => {
    const [presupuesto, setPresupuesto] = useState({
        web: false,
        seo: false,
        google: false,
        pages: 1,
        lang: 1
    });
    const [importeTotal, setImporteTotal] = useState(0);
    // Manejar evento por si está checkeado o no
    const handleCheckbox = ({ target }) => {
        const isChecked = target.checked;
        setPresupuesto({ ...presupuesto, [target.id]: isChecked });
        isChecked
            ? setImporteTotal(importeTotal + Number(target.value))
            : setImporteTotal(importeTotal - Number(target.value));
    };

    return (
        <Fieldset>
            <Legend> ¿Qué quieres hacer? </Legend>
            <Form>
                <Label htmlFor="web">
                    <Input type="checkbox" id="web" value={500} onChange={handleCheckbox} />
                    Una página web (500€)
                </Label>
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
                    <em>Precio:</em> <strong>{importeTotal > 0 ? importeTotal : 0}€</strong>
                </p>
            </Form>
        </Fieldset>
    );
};
