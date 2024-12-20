import React from 'react';
import classNames from 'classnames';

import styles from './UserInfo.module.scss';

interface IUserInfoProps {
    className?: string;
    user: {
        name: string;
        link: string;
        notificationCount: number;
    };
}

const UserInfo: React.FC<IUserInfoProps> = (props: IUserInfoProps) => {
    const { className, user } = props;
    const { name, link, notificationCount } = user;

    return (
        <div className={classNames(styles.UserInfo, className)}>
            <div className={styles.avatar}>
                {name[0]}
                {!!notificationCount && (
                    <span className={styles.badge}>{notificationCount}</span>
                )}
            </div>
            <div className={styles.info}>
                <div className={styles.name}>{name}</div>
                <div className={styles.link}>{link}</div>
            </div>
        </div>
    );
};

export default UserInfo;
