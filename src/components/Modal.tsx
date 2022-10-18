import React, {FC} from 'react';

interface ModalType {
    active: boolean;
    title?: string;
    children: any
    onClose: ()=> void;
}

const Modal:FC<ModalType> = ({active, title, children, onClose}) => {
    return (
        <div className={`fixed w-full h-full top-0 left-0 z-50 justify-center items-center before:content-[''] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-gray-100/50  ${active ? "flex" : "hidden"}`}>
            <div className="py-7 px-10 bg-white relative">
                <button onClick={onClose} className="absolute text-2xl top-1 right-2  cursor-pointer hover:text-orange-500">x</button>
                {title && <h1>{title}</h1>}
                {children}
            </div>
        </div>
    );
};

export default Modal;