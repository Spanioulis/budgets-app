import React from 'react';
import { CardModal, Overlay } from './Modal.styled';

export const Modal = ({ children, isOpen, setIsOpen }) => {
    const handleCloseModal = ({ target: { id } }) => {
        // Cerrar únicamente cuando se haga click en la parte gris ('modal')
        if (id === 'modal') {
            setIsOpen(!isOpen);
        }
    };
    return (
        <>
            {isOpen && (
                <Overlay id="modal" onClick={handleCloseModal}>
                    <CardModal id="card">{children}</CardModal>
                </Overlay>
            )}
        </>
    );
};
