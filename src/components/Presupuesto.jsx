import { useEffect, useState } from 'react';
import { Fieldset, Form, Label, Legend, Input, Panell } from './StyledComponent';
import { Button } from './Button';

export const Presupuesto = () => {
    // Hooks
    const [presupuesto, setPresupuesto] = useState(
        JSON.parse(localStorage.getItem('Refresh')) || {
            web: false,
            seo: false,
            google: false,
            pages: 1,
            languages: 1
        }
    );
    // Prevenir pages || languages negativas
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
    // Añadir o quitar importe del servicio elegido
    const handleCheckbox = ({ target: { id, value, checked } }) => {
        // TODO: Trabajar aquí el punto de volver a clickar...
        console.log('handleCheckbox');
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
    // Añadir manualmente número de pages && languages
    const handleNumber = ({ target: { id, value } }) => {
        setPresupuesto({ ...presupuesto, [id]: Number(value) });
    };
    // Añadir o quitar mediante buttons el número de pages && languages
    //TODO: Destructuring 'event'
    const handleClick = (event) => {
        event.preventDefault();
        const value = Number(event.target.value);
        if (event.target.id === 'add') {
            setPresupuesto({
                ...presupuesto,
                [event.target.name]: value + 1
            });
        } else if (event.target.id === 'sub') {
            setPresupuesto({
                ...presupuesto,
                [event.target.name]: value - 1
            });
        }
    };

    // Recuperar datos del local-storage (getItem) al recargar página
    // useEffect(() => {
    //     const data = JSON.parse(localStorage.getItem('Refresh'));
    //     if (data) {
    //         setPresupuesto(data);
    //     }
    // }, []);
    // Enviar datos al local-storage (setItem) al cambiar estado de 'Presupuesto'
    useEffect(() => {
        const importeRefresh =
            (presupuesto.web && 500 + presupuesto.pages * presupuesto.languages * 30) +
            (presupuesto.seo && 300) +
            (presupuesto.google && 200);
        setImporteTotal((importeTotal) => (importeTotal = importeRefresh));
        localStorage.setItem('Refresh', JSON.stringify(presupuesto));
    }, [presupuesto]);

    //! BREAK-POINT

    return (
        <Fieldset>
            <Legend> ¿Qué quieres hacer? </Legend>
            <Form>
                <Label htmlFor="web">
                    <Input
                        type="checkbox"
                        id="web"
                        value={500}
                        onClick={handleCheckbox}
                        // checked={presupuesto.web && true}
                    />
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
                                idAdd="add"
                                idInput="pages"
                                idSub="sub"
                                name="pages"
                                handleNumber={handleNumber}
                                // onclick={(e) => {
                                //     handleClick(e);
                                //     setLocalStorage(e);
                                // }}
                                onclick={handleClick}
                                type="text"
                                value={presupuesto.pages}
                            ></Button>
                        </div>
                        <div className="panell-label">
                            <label htmlFor="languages">Número de idiomas: </label>
                            <Button
                                classNameAdd="button-add"
                                classNameInput="panell-input"
                                classNameSub="button-sub"
                                idAdd="add"
                                idInput="languages"
                                idSub="sub"
                                name="languages"
                                handleNumber={handleNumber}
                                // onclick={(e) => {
                                //     handleClick(e);
                                //     setLocalStorage(e);
                                // }}
                                onclick={handleClick}
                                type="text"
                                value={presupuesto.languages}
                            ></Button>
                        </div>
                    </Panell>
                )}
                <Label htmlFor="seo">
                    <Input
                        type="checkbox"
                        id="seo"
                        value={300}
                        // onClick={(e) => {
                        //     handleCheckbox(e);
                        //     setLocalStorage(e);
                        // }}
                        // onClick={setLocalStorage}
                        onClick={handleCheckbox}
                    />
                    Una consultoria SEO (300€)
                </Label>
                <Label htmlFor="google">
                    <Input
                        type="checkbox"
                        id="google"
                        value={200}
                        // onClick={(e) => {
                        //     handleCheckbox(e);
                        //     setLocalStorage(e);
                        // }}
                        onClick={handleCheckbox}
                    />
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
