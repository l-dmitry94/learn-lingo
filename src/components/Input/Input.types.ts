import { DOMAttributes, HTMLInputTypeAttribute } from 'react';
import { UseFormRegister } from 'react-hook-form';

export interface IInput extends DOMAttributes<HTMLInputElement> {
    register: UseFormRegister<any>;
    value: string;
    placeholder: string;
    inputType: HTMLInputTypeAttribute;
    errorMessage?: string;
}
