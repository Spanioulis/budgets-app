import { useState } from 'react';
import { Modal } from './Modal';
import '../styles/App.css';

export const Button = ({
    classNameAdd,
    classNameInput,
    classNameSub,
    handleClick,
    handleNumber,
    idAdd,
    idInput,
    idSub,
    name,
    type,
    value
}) => {
    const [isOpen, setIsOpen] = useState(false);
    // Cambiar estado del Modal de false (default) a true
    const handleModal = (event) => {
        event.preventDefault();
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button
                className={classNameAdd}
                id={idAdd}
                name={name}
                onClick={handleClick}
                value={value}
            >
                {idAdd === 'add' && '+'}
            </button>
            <input
                className={classNameInput}
                type={type}
                id={idInput}
                value={value}
                onChange={handleNumber}
            />
            <button
                className={classNameSub}
                id={idSub}
                name={name}
                onClick={handleClick}
                value={value}
            >
                {idSub === 'sub' && '-'}
            </button>
            <button className="btn-info" onClick={handleModal} id={idInput}>
                i
            </button>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
                {idInput === 'pages' ? (
                    <>
                        En esta casilla se muestra el número de páginas que necesitas para tu página
                        web. Actualmente has elegido un total de {value} páginas.
                    </>
                ) : (
                    <>
                        En cambio, en esta otra casilla, se muestra el número de idiomas que quieres
                        que hable tu página web. Actualmente son {value} idiomas.
                    </>
                )}
            </Modal>
        </>
    );
};
