import React, { useCallback, useState } from 'react';
import classNames from 'classnames';

import CampaignInfoBlock from '../CampaignInfoBlock';

import { TypeAdResultTableSchema } from '../../../types/components.types';

import styles from './Table.module.scss';

interface ITableProps {
    className?: string;
    data: any;
    schema: TypeAdResultTableSchema[];
    title?: string;
    onChangeStatus: (index: number) => (value: boolean) => void;
}

type TypeBorders = {
    left: boolean;
    right: boolean;
};

const Table: React.FC<ITableProps> = (props: ITableProps) => {
    const { data, schema, className, title, onChangeStatus } = props;
    const [borders, setBorders] = useState<TypeBorders>({
        left: false,
        right: true,
    });

    const handleScroll = useCallback(
        (e: any) => {
            const { clientWidth, scrollLeft, scrollWidth } = e.target;
            const isEnd = Math.ceil(clientWidth + scrollLeft) >= scrollWidth;
            const isStart = !scrollLeft;

            if (isStart) return setBorders({ left: false, right: true });

            if (!isStart && !borders.left) {
                return setBorders((prev) => ({ ...prev, left: true }));
            }

            if (isEnd) {
                return setBorders((prev) => ({ ...prev, right: false }));
            }

            setBorders({ left: true, right: true });
        },
        [borders]
    );

    return (
        <div className={classNames(styles.Table, className)}>
            {title ? <h4 className={styles.title}>{title}</h4> : null}

            {borders.left ? (
                <div
                    className={classNames(
                        styles.smoothBorder,
                        styles.smoothLeft
                    )}
                />
            ) : null}

            <div onScroll={handleScroll} className={styles.tableBody}>
                <div className={classNames(styles.row, styles.header)}>
                    {schema.map((item) => {
                        return (
                            <div
                                key={item.field}
                                className={classNames(
                                    styles.cell,
                                    styles.headerCell
                                )}
                                style={{
                                    width: item.width,
                                }}
                            >
                                {item.header}
                            </div>
                        );
                    })}
                </div>

                {data.map((item: any, i: number) => {
                    return (
                        <>
                            <CampaignInfoBlock
                                campaign={item}
                                className={styles.info}
                                onToggle={onChangeStatus(i)}
                            />
                            <div className={styles.bodyRow}>
                                {schema.map((el) => {
                                    return (
                                        <div
                                            className={classNames(
                                                styles.cell,
                                                styles.bodyCell
                                            )}
                                            style={{
                                                width: el.width,
                                            }}
                                        >
                                            <div className={styles.value}>
                                                {el.prefix && el.prefix}
                                                {item.results[el.field]}
                                                {el.suffix && el.suffix}
                                            </div>
                                            <div className={styles.label}>
                                                {el.label}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </>
                    );
                })}
            </div>

            {borders.right ? (
                <div
                    className={classNames(
                        styles.smoothBorder,
                        styles.smoothRight
                    )}
                />
            ) : null}
        </div>
    );
};

export default Table;
