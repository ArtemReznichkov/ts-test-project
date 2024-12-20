import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useActions } from './useActions';
import { campaignsListMock } from '../mocks/campaign.mock';

export const useCampaigns = (id?: number | undefined) => {
    const state = useSelector((state: any) => state.campaigns);
    const { getCampaignsList } = useActions();

    useEffect(() => {
        getCampaignsList(campaignsListMock);
    }, []);

    return {
        ...state,
        currentCampaign: id ? state.campaigns[id] : {},
    };
};
