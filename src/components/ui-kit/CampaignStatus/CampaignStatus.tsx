import React from 'react';
import classNames from 'classnames';
// import { Link } from 'react-router-dom';

import { EnumCampaignStatuses } from '../../../types/campaign.types';

import styles from './CampaignStatus.module.scss';

interface ICampaignStatusProps {
    className?: string;
    status: EnumCampaignStatuses;
    date?: string;
}

const CampaignStatus: React.FC<ICampaignStatusProps> = (
    props: ICampaignStatusProps
) => {
    const { status, date, className } = props;

    return (
        <div className={classNames(styles.CampaignStatus, className)}>
            <span
                className={classNames(styles.indicator, {
                    [styles.active]: status === EnumCampaignStatuses.ACTIVE,
                    [styles.rejected]: status === EnumCampaignStatuses.REJECTED,
                })}
            />
            <span className={styles.statusValue}>
                {status === EnumCampaignStatuses.ACTIVE
                    ? `${status} ${date}`
                    : status}
            </span>
        </div>
    );
};

export default CampaignStatus;
