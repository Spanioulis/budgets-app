/* eslint-disable no-self-assign */
import '../styles/App.css';
import { v4 as uuidv4 } from 'uuid';

export const Budget = ({ budgets, search }) => {
    //* BREAK-POINT
    const filterSearch = (budget) => {
        if (
            budget.customerName.toLowerCase().includes(search.toLowerCase()) ||
            budget.budgetName.toLowerCase().includes(search.toLowerCase())
        ) {
            return budget;
        }
    };
    return (
        <div className="budget-container">
            <table className="budget-table">
                <thead>
                    <tr>
                        <th>
                            <b>Cliente</b>
                        </th>
                        <th>
                            <b>Presupuesto</b>
                        </th>
                        <th>
                            <b>Fecha</b>
                        </th>
                        <th>
                            <b>Importe</b>
                        </th>
                        <th>
                            <b>Servicio</b>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {budgets.filter(filterSearch).map((budget) => {
                        budget.customerName === ''
                            ? (budget.customerName = 'Sin datos')
                            : (budget.customerName = budget.customerName);
                        budget.budgetName === ''
                            ? (budget.budgetName = 'Sin datos')
                            : (budget.budgetName = budget.budgetName);

                        return (
                            <tr key={uuidv4()}>
                                <td>{budget.customerName}</td>
                                <td>{budget.budgetName}</td>
                                <td>{budget.date}</td>
                                <td>{budget.totalImport}€</td>
                                <td>
                                    <i>Web</i> ({budget.web === true ? '✓' : 'x'} - {budget.pages}{' '}
                                    <i>páginas</i>, {budget.languages} <i>idiomas</i>) <i>Seo</i> (
                                    {budget.seo === true ? '✓' : 'x'}) <i>Google Ads</i> (
                                    {budget.google === true ? '✓' : 'x'})
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};
