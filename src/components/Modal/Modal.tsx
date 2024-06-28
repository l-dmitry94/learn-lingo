import { FC, useEffect } from 'react';
import ReactModal from 'react-modal';

import { icons } from 'assets/icons';

import { IModal } from './Modal.types';
import scss from './Modal.module.scss';

ReactModal.setAppElement('#root');

const Modal: FC<IModal> = ({ modalIsOpen, closeModal, title, description, children }) => {
    useEffect(() => {
        if (modalIsOpen) {
            document.body.style.overflow = 'hidden';
        } else document.body.style.overflow = 'visible';
    }, [modalIsOpen]);

    return (
        <ReactModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            closeTimeoutMS={300}
            overlayClassName="fixed top-0 left-0 flex items-center justify-center opacity-0 bg-black/60 p-6 transition-opacity ease-linear duration-300 w-full h-full overlay overflow-y-auto"
            className="relative max-w-[565px] w-full translate-y-12 rounded-[30px] bg-white p-16 content transition-transform duration-300 ease-linear"
        >
            <button onClick={closeModal} className={scss.closeButton}>
                <svg className={scss.closeIcon}>
                    <use href={`${icons}#icon-close`}></use>
                </svg>
            </button>

            <div className={scss.info}>
                <h2 className={scss.title}>{title}</h2>
                <p className={scss.description}>{description}</p>
            </div>

            {children}
        </ReactModal>
    );
};

export default Modal;
