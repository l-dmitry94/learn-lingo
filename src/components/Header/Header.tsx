import Logo from './Logo';
import Navigation from './Navigation';
import Auth from './Auth';

import navigationItems from './navigation.json';

import scss from './Header.module.scss';

const Header = () => {
    return (
        <header className={scss.header}>
            <div className={scss.container}>
                <div className={scss.wrapper}>
                    <Logo />
                    <Navigation items={navigationItems} />
                    <Auth />
                </div>
            </div>
        </header>
    );
};

export default Header;
