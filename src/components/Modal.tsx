import React, {FC} from 'react';

interface ModalType {
    active: boolean;
    title?: string;
    children: any
    onClose: ()=> void;
}

const Modal:FC<ModalType> = ({active,title, children, onClose}) => {
    return (
        <div className={`modal ${active ? "active" : ""}`}>
            <div className="modal__wrap">
                <button onClick={onClose} className="modal__close">x</button>
                {title && <h1>{title}</h1>}
                {children}
            </div>
        </div>
    );
};

export default Modal;