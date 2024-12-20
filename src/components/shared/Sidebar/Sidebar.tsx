import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import Menu from '../Menu';
// import UserInfo from '../UserInfo';
import Logo from '../../../assets/svg/logo.svg?react';
import { EnumRoutes } from '../../../constants/routes';

import styles from './Sidebar.module.scss';

interface ISidebarProps {
    className?: string;
}

const Sidebar: React.FC<ISidebarProps> = (props: ISidebarProps) => {
    const { className } = props;

    return (
        <aside className={classNames(styles.Sidebar, className)}>
            <div>
                <div className={styles.logoBlock}>
                    <Link to={EnumRoutes.HOME}>
                        <Logo />
                    </Link>
                </div>

                <Menu />
            </div>

            {/* <UserInfo
                user={{
                    name: 'Cosmo Store',
                    link: 'zee.store/cosmostore',
                    notificationCount: 5,
                }}
            /> */}
        </aside>
    );
};

export default Sidebar;
