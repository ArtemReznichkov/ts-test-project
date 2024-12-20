import React from 'react';

import { useCampaigns } from '../../../hooks/useCampaigns';

import CampaignCard from '../../shared/CampaignCard';
import PageHeader from '../../shared/PageHeader';

import styles from './CampaignsPage.module.scss';

const CampaignsPage: React.FC = () => {
    const { campaignsIds, campaigns } = useCampaigns();

    return (
        <section className={styles.CampaignsPage}>
            <PageHeader title="Campaigns" />

            <div className={styles.cardBlock}>
                {campaignsIds.map((campaignId: number) => {
                    return (
                        <CampaignCard
                            key={campaignId}
                            campaign={campaigns[campaignId]}
                            className={styles.card}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default CampaignsPage;
