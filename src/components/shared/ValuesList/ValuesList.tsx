import React from 'react';
import classNames from 'classnames';

import { TypeResult } from '../../../types/components.types';

import styles from './ValuesList.module.scss';

interface IValuesListProps {
    className?: string;
    data: any;
    schema: TypeResult[];
    title?: string;
}

const ValuesList: React.FC<IValuesListProps> = (props: IValuesListProps) => {
    const { data, schema, className, title } = props;

    return (
        <div className={classNames(styles.ValuesList, className)}>
            {title ? <h4 className={styles.title}>{title}</h4> : null}

            {schema.map((item) => {
                return (
                    <div key={item.field} className={styles.row}>
                        <div className={styles.label}>{item.label}</div>
                        <div className={styles.value}>
                            {item.prefix ? `${item.prefix}` : ''}
                            {data[item.field]}
                            {item.suffix ? `${item.suffix}` : ''}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ValuesList;
