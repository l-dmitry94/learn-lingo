import { FC, useState } from 'react';
import clsx from 'clsx';

import { icons } from 'assets/icons';

import { IInput } from './Input.types';
import scss from './Input.module.scss';

const Input: FC<IInput> = ({ inputType, register, value, errorMessage, ...rest }) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };
    return (
        <>
            {inputType === 'password' ? (
                <div>
                    <div className={scss.wrapper}>
                        <input
                            {...rest}
                            type={showPassword ? 'text' : inputType}
                            {...register(value)}
                            className={scss.input}
                        />

                        <button
                            onClick={togglePassword}
                            type="button"
                            className={scss.passwordButton}
                        >
                            <svg className={scss.passwordIcon}>
                                <use
                                    className={clsx('transition-opacity', {
                                        'opacity-0': showPassword,
                                        'opacity-100': !showPassword,
                                    })}
                                    href={`${icons}#icon-eye`}
                                ></use>
                                <use
                                    className={clsx('transition-opacity', {
                                        'opacity-100': showPassword,
                                        'opacity-0': !showPassword,
                                    })}
                                    href={`${icons}#icon-eye-off`}
                                ></use>
                            </svg>
                        </button>
                    </div>
                    {errorMessage && <p className={scss.error}>{errorMessage}</p>}
                </div>
            ) : (
                <div>
                    <input {...rest} type={inputType} {...register(value)} className={scss.input} />
                    {errorMessage && <p className={scss.error}>{errorMessage}</p>}
                </div>
            )}
        </>
    );
};

export default Input;
