import { FC } from 'react';
import clsx from 'clsx';

import { icons } from 'assets/icons';

import { IButton, Style } from './Button.types';
import scss from './Button.module.scss';

const Button: FC<IButton> = ({ buttonType, style, children }) => {
    return (
        <button
            type={buttonType}
            className={clsx(
                scss.button,
                style === Style.Register && scss.buttonRegister,
                style === Style.Modal && scss.buttonModal,
                style === Style.Lesson && scss.buttonLesson,
                style === Style.Login && scss.buttonLogin
            )}
        >
            {style === Style.Login && (
                <svg className={scss.loginIcon}>
                    <use href={`${icons}#icon-login`}></use>
                </svg>
            )}
            {children}
        </button>
    );
};

export default Button;
