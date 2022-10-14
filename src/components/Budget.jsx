/* eslint-disable no-self-assign */
import '../styles/App.css';
import { v4 as uuidv4 } from 'uuid';

export const Budget = ({ budgets }) => {
    return (
        <div className="budget-container">
            {budgets.map((budget) => {
                budget.customerName === ''
                    ? (budget.customerName = 'Sin datos')
                    : (budget.customerName = budget.customerName);
                budget.budgetName === ''
                    ? (budget.budgetName = 'Sin datos')
                    : (budget.budgetName = budget.budgetName);

                return (
                    <p className="budget" key={uuidv4()}>
                        <b>Cliente</b>: {budget.customerName} <b>Presupuesto</b>:{' '}
                        {budget.budgetName} <b>Fecha</b>: {budget.date} - <b>Importe total</b>:{' '}
                        {budget.totalImport}€ - <b>Servicios</b>: <i>Web</i> (
                        {budget.web === true ? '✓' : 'x'} - {budget.pages} <i>páginas</i>,{' '}
                        {budget.languages} <i>idiomas</i>) <i>Seo</i> (
                        {budget.seo === true ? '✓' : 'x'}) <i>Google Ads</i> (
                        {budget.google === true ? '✓' : 'x'})
                    </p>
                );
            })}
        </div>
    );
};
