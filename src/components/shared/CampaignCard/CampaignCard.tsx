import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { ICampaign } from '../../../types/campaign.types';
import { EnumRoutes } from '../../../constants/routes';

import styles from './CampaignCard.module.scss';

interface ICampaignCardProps {
    className?: string;
    campaign: ICampaign;
}

const CampaignCard: React.FC<ICampaignCardProps> = (
    props: ICampaignCardProps
) => {
    const { campaign, className } = props;

    return (
        <Link
            to={`${EnumRoutes.CAMPAIGNS}/${campaign.id}`}
            className={classNames(styles.CampaignCard, className)}
        >
            <img
                src={campaign.coverImageURL}
                alt="campaign image"
                className={styles.cardImage}
            />
            <p className={styles.name}>{campaign.name}</p>
        </Link>
    );
};

export default CampaignCard;
