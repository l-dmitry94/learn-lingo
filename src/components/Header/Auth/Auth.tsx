import { useState } from 'react';

import Button, { Style } from 'components/Button';
import Modal from 'components/Modal';
import RegistrationModal from './RegistrationModal';
import LoginModal from './LoginModal';

import scss from './Auth.module.scss';

const Auth = () => {
    const [loginModalIsOpen, setLoginModalIsOpen] = useState<boolean>(false);
    const [registrationModalIsOpen, setRegistrationModalIsOpen] = useState<boolean>(false);

    return (
        <>
            <ul className={scss.list}>
                <li onClick={() => setLoginModalIsOpen(true)}>
                    <Button buttonType="button" style={Style.Login}>
                        Log in
                    </Button>
                </li>
                <li onClick={() => setRegistrationModalIsOpen(true)}>
                    <Button buttonType="button" style={Style.Register}>
                        Registration
                    </Button>
                </li>
            </ul>

            <Modal
                modalIsOpen={loginModalIsOpen}
                closeModal={() => setLoginModalIsOpen(false)}
                title="Log In"
                description="Welcome back! Please enter your credentials to access your account and continue your search for an teacher."
            >
                <LoginModal />
            </Modal>

            <Modal
                modalIsOpen={registrationModalIsOpen}
                closeModal={() => setRegistrationModalIsOpen(false)}
                title="Registration"
                description="Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information"
            >
                <RegistrationModal />
            </Modal>
        </>
    );
};

export default Auth;
