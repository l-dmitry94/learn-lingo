import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { INavigation } from './Navigation.types';
import scss from './Navigation.module.scss';

const Navigation: FC<INavigation> = ({ items }) => {
    const [isLogged] = useState(false);

    return (
        <ul className={scss.list}>
            {items.map(({ label, href }) =>
                isLogged || label !== 'Favorite' ? (
                    <li key={label}>
                        <NavLink to={href} className={scss.link}>
                            {label}
                        </NavLink>
                    </li>
                ) : null
            )}
        </ul>
    );
};

export default Navigation;
