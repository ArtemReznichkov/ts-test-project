import React from 'react';
import classNames from 'classnames';
// import { Link } from 'react-router-dom';

// import { EnumRoutes } from '../../../constants/routes';

import styles from './PageHeader.module.scss';

interface IPageHeaderProps {
    className?: string;
    title: string;
}

const PageHeader: React.FC<IPageHeaderProps> = (props: IPageHeaderProps) => {
    const { title, className } = props;

    return (
        <header className={classNames(styles.PageHeader, className)}>
            <h1>{title}</h1>
        </header>
    );
};

export default PageHeader;
