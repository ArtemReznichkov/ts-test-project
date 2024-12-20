import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../shared/Sidebar';
import styles from './MainLayout.module.scss';

const MainLayout: React.FC = () => {
    return (
        <div className={styles.MainLayout}>
            <Sidebar className={styles.sidebar} />
            <section className={styles.content}>
                <div className={styles.page}>
                    <Outlet />
                </div>
            </section>
        </div>
    );
};

export default MainLayout;
