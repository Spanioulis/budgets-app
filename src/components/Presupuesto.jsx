import { useEffect, useState } from 'react';
import { Fieldset, Form, Label, Legend, Input, Panell } from './App.styled';
import { Button } from './Button';
import '../styles/App.css';

export const Presupuesto = () => {
    // Hooks
    const [presupuesto, setPresupuesto] = useState(
        JSON.parse(localStorage.getItem('Refresh')) || {
            web: false,
            seo: false,
            google: false,
            pages: 1,
            languages: 1,
            budgetName: '',
            customerName: ''
        }
    );
    const [importeTotal, setImporteTotal] = useState(0);
    const [budgets, setBudgets] = useState([]);
    // JSON.parse(localStorage.getItem('Budget')) ||

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

    // Añadir o quitar importe del servicio elegido
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

    // Añadir manualmente número de pages && languages
    const handleNumber = ({ target: { id, value } }) => {
        setPresupuesto({ ...presupuesto, [id]: Number(value) });
    };

    // Añadir o quitar mediante buttons el número de pages && languages
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
    // Enviar datos al local-storage (setItem) al cambiar estado de 'Presupuesto'

    // Añadir nombre al presupuesto
    const handleBudgetName = (event) => {
        setPresupuesto({ ...presupuesto, budgetName: event.target.value });
    };
    // Añadir nombre del cliente/usuario
    const handleCustomerName = (event) => {
        setPresupuesto({ ...presupuesto, customerName: event.target.value });
    };

    // Fecha
    const date = new Date();
    const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };

    // Enviar formulario del presupuesto creado (onSubmit)
    const enviarPresupuesto = (event) => {
        event.preventDefault();
        // let exist = console.log(event.target.value);

        setBudgets([
            ...budgets,
            {
                customerName: presupuesto.customerName,
                budgetName: presupuesto.budgetName,
                web: presupuesto.web,
                pages: presupuesto.pages,
                languages: presupuesto.languages,
                seo: presupuesto.seo,
                google: presupuesto.google,
                totalImport: importeTotal,
                date: date.toLocaleDateString('es-ES', options)
            }
        ]);
    };

    // Guardar información en Local Storage
    useEffect(() => {
        const importeRefresh =
            (presupuesto.web && 500 + presupuesto.pages * presupuesto.languages * 30) +
            (presupuesto.seo && 300) +
            (presupuesto.google && 200);
        setImporteTotal((importeTotal) => (importeTotal = importeRefresh));
        localStorage.setItem('Refresh', JSON.stringify(presupuesto));
        // localStorage.setItem('Budget', JSON.stringify(budget));
    }, [presupuesto]);

    return (
        <>
            <Fieldset>
                <Legend> ¿Qué quieres hacer? </Legend>
                <Form onSubmit={enviarPresupuesto}>
                    <Label htmlFor="web">
                        <Input
                            type="checkbox"
                            id="web"
                            value={500}
                            onClick={handleCheckbox}
                            // Marcar automáticamente al cargar página si es true
                            checked={presupuesto.web && true}
                            // Evitar warning del checked (react-dom)
                            readOnly
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
                                    handleClick={handleClick}
                                    handleNumber={handleNumber}
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
                                    handleClick={handleClick}
                                    handleNumber={handleNumber}
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
                            onClick={handleCheckbox}
                            checked={presupuesto.seo && true}
                            readOnly
                        />
                        Una consultoria SEO (300€)
                    </Label>
                    <Label htmlFor="google">
                        <Input
                            type="checkbox"
                            id="google"
                            value={200}
                            onClick={handleCheckbox}
                            checked={presupuesto.google && true}
                            readOnly
                        />
                        Una campaña de Google Ads (200€)
                    </Label>
                    <Label htmlFor="budgetName">
                        Nombre del presupuesto:{' '}
                        <input
                            className="input-form"
                            type="text"
                            id="budgetName"
                            value={presupuesto.budgetName}
                            onChange={handleBudgetName}
                        />
                    </Label>
                    <Label htmlFor="customerName">
                        Nombre del cliente:{' '}
                        <input
                            className="input-form"
                            type="text"
                            id="customerNamme"
                            value={presupuesto.customerName}
                            onChange={handleCustomerName}
                        />
                    </Label>
                    <hr />
                    <p>
                        <em>Precio:</em> <strong>{importeTotal > 0 ? importeTotal : 0}€</strong>
                    </p>
                    <div className="btn-submit-container">
                        <button className="btn-submit" type="submit">
                            Validar presupuesto
                        </button>
                    </div>
                </Form>
            </Fieldset>
            <Fieldset>
                <Legend>Presupuestos confirmados</Legend>
                <div className="budgets-container">
                    {budgets.map((budget, index) => {
                        budget.web === true ? (budget.web = 'Sí') : (budget.web = 'No');
                        budget.seo === true ? (budget.seo = 'Sí') : (budget.seo = 'No');
                        budget.google === true ? (budget.google = 'Sí') : (budget.google = 'No');

                        return (
                            <p className="budget" key={index}>
                                <b>Cliente</b>: {budget.customerName} <b>Presupuesto</b>:{' '}
                                {budget.budgetName} <b>Fecha</b>: {budget.date} -{' '}
                                <b>Importe total</b>: {budget.totalImport}€ - <b>Servicios</b>:{' '}
                                <i>Web</i> ({budget.web} - {budget.pages} <i>páginas</i>,{' '}
                                {budget.languages} <i>idiomas</i>) <i>Seo</i> ({budget.seo}){' '}
                                <i>Google Ads</i> ({budget.google})
                            </p>
                        );
                    })}
                </div>
            </Fieldset>
        </>
    );
};
