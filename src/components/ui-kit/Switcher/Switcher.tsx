import React, { ChangeEvent, useCallback } from 'react';
import classNames from 'classnames';
import Form from 'react-bootstrap/Form';

import styles from './Switcher.module.scss';

interface ICampaignStatusProps {
    className?: string;
    checked: boolean;
    onChange: (value: boolean) => void;
}

const Switcher: React.FC<ICampaignStatusProps> = (
    props: ICampaignStatusProps
) => {
    const { className, onChange, checked } = props;

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.checked);
    }, []);

    return (
        <Form.Check
            type="switch"
            checked={checked}
            onChange={handleChange}
            className={classNames(styles.Switcher, className)}
        />
    );
};

export default Switcher;
