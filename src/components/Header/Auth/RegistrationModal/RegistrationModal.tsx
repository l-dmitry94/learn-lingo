import { SubmitHandler, useForm } from 'react-hook-form';
import Input from 'components/Input';

import { IRegistrationModal } from './RegistrationModal.types';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from './validationSchema';
import { IInput } from 'components/Input/Input.types';
import Button, { Style } from 'components/Button';

import scss from './RegistrationModal.module.scss';

const RegistrationModal = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IRegistrationModal>({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit: SubmitHandler<IRegistrationModal> = (data) => console.log(data);

    const fields: IInput[] = [
        {
            inputType: 'text',
            placeholder: 'Name',
            value: 'name',
            register,
            errorMessage: errors.name?.message,
        },
        {
            inputType: 'text',
            placeholder: 'Email',
            value: 'email',
            register,
            errorMessage: errors.email?.message,
        },
        {
            inputType: 'password',
            placeholder: 'Password',
            value: 'password',
            register,
            errorMessage: errors.password?.message,
        },
    ];

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={scss.form}>
            <div className={scss.formWrapper}>
                {fields.map((field) => (
                    <Input key={field.value} {...field} />
                ))}
            </div>

            <Button buttonType="submit" style={Style.Modal}>
                Sign Up
            </Button>
        </form>
    );
};

export default RegistrationModal;
