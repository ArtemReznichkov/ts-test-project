import React from 'react';
import { Link } from 'react-router-dom';

import Menu from '../Menu';
import Logo from '../../../assets/svg/logo.svg?react';
import { EnumRoutes } from '../../../constants/routes';

import styles from './Sidebar.module.scss';

const Sidebar: React.FC = () => {
    return (
        <aside className={styles.Sidebar}>
            <div className={styles.logoBlock}>
                <Link to={EnumRoutes.HOME}>
                    <Logo />
                </Link>
            </div>

            <Menu />
        </aside>
    );
};

export default Sidebar;
