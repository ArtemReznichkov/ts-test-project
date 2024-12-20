import React, { memo } from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import { schema, TypeMenuLink } from './schema';

import styles from './Menu.module.scss';

interface IMenuProps {
    className?: string;
}

const Menu: React.FC<IMenuProps> = (props: IMenuProps) => {
    const { className } = props;

    return (
        <menu className={classNames(styles.Menu, className)}>
            {schema.map((item: TypeMenuLink) => {
                const Icon = item.icon;

                return (
                    <li key={item.path} className={styles.menuItem}>
                        <NavLink
                            to={item.path}
                            className={({ isActive }) =>
                                isActive
                                    ? classNames(styles.link, styles.activeLink)
                                    : styles.link
                            }
                        >
                            <Icon className={styles.icon} />
                            {item.name}
                        </NavLink>
                    </li>
                );
            })}
        </menu>
    );
};

export default memo(Menu);
