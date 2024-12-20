import React from 'react';
import classNames from 'classnames';

import { ICampaign } from '../../../types/campaign.types';
import CampaignStatus from '../../ui-kit/CampaignStatus';
import Switcher from '../../ui-kit/Switcher';
import SocialLink from '../../ui-kit/SocialLink';

import { EnumCampaignStatuses } from '../../../types/campaign.types';
import { EnumSocials } from '../../../types/components.types';

import styles from './CampaignInfoBlock.module.scss';

interface ICampaignInfoBlockProps {
    className?: string;
    campaign: ICampaign;
    onToggle?: (value: boolean) => void;
    size?: 'small' | 'normal';
}

const CampaignInfoBlock: React.FC<ICampaignInfoBlockProps> = (
    props: ICampaignInfoBlockProps
) => {
    const { campaign, className, onToggle, size = 'normal' } = props;

    return (
        <div className={classNames(styles.CampaignInfoBlock, className)}>
            <img
                src={campaign.coverImageURL}
                alt="campaign image"
                className={styles.image}
            />
            <div className={styles.info}>
                <div className={styles.infoWrapper}>
                    <p
                        className={classNames(styles.name, {
                            [styles.smallName]: size === 'small',
                        })}
                    >
                        {campaign.name}
                    </p>
                    <div className={styles.links}>
                        <CampaignStatus
                            status={campaign.status}
                            date={campaign.activationDate}
                        />
                        {campaign.fbLink ? (
                            <SocialLink
                                type={EnumSocials.fb}
                                link={campaign.fbLink}
                            />
                        ) : null}
                        {campaign.instagramLink ? (
                            <SocialLink
                                type={EnumSocials.ig}
                                link={campaign.instagramLink}
                            />
                        ) : null}
                    </div>
                </div>
                {onToggle && (
                    <Switcher
                        onChange={onToggle}
                        checked={
                            campaign.status === EnumCampaignStatuses.ACTIVE
                        }
                    />
                )}
            </div>
        </div>
    );
};

export default CampaignInfoBlock;
