import React, { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import PageHeader from '../../shared/PageHeader';
import CampaignInfoBlock from '../../shared/CampaignInfoBlock';
import ValuesList from '../../shared/ValuesList';
import Table from '../../shared/Table';

import { useCampaigns } from '../../../hooks/useCampaigns';

import { resultsSchema } from './schemas/resultsSchema';
import { adSchema } from './schemas/adSchema';

import styles from './CampaignPage.module.scss';
import { useActions } from '../../../hooks/useActions';
import { EnumCampaignStatuses } from '../../../types/campaign.types';

const CampaignPage: React.FC = () => {
    const { id } = useParams();
    const { changeCampaignStatus } = useActions();

    const { currentCampaign } = useCampaigns(Number(id));

    const handleChangeStatus = useCallback((index: number) => {
        return (value: boolean) => {
            changeCampaignStatus({
                campaignId: Number(id),
                index,
                status: value
                    ? EnumCampaignStatuses.ACTIVE
                    : EnumCampaignStatuses.REJECTED,
            });
        };
    }, []);

    return (
        <div className={styles.CampaignPage}>
            <PageHeader title={currentCampaign?.name} />
            {currentCampaign ? (
                <div className={styles.content}>
                    <CampaignInfoBlock
                        campaign={currentCampaign}
                        className={styles.infoBlock}
                    />
                    <ValuesList
                        schema={resultsSchema}
                        data={currentCampaign.results || {}}
                        title={'Results'}
                        className={styles.results}
                    />
                    <Table
                        schema={adSchema}
                        data={currentCampaign.adResults || []}
                        title={'Individual ad results'}
                        onChangeStatus={handleChangeStatus}
                    />
                </div>
            ) : null}
        </div>
    );
};

export default CampaignPage;
