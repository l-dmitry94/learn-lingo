import { ReactNode } from 'react';

export enum Style {
    Register = 'register',
    Login = 'login',
    Modal = 'modal',
    Lesson = 'lesson',
}
export interface IButton {
    buttonType: 'reset' | 'submit' | 'button';
    style: Style;
    children: ReactNode;
}
