import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';
import { ICampaign } from '../../types/campaign.types';

interface ICampaignState {
    campaignsIds: number[];
    campaigns: any;
}

const initialState: ICampaignState = {
    campaignsIds: [],
    campaigns: {},
};

export const campaignsSlice = createSlice({
    name: 'campaigns',
    initialState,
    reducers: {
        getCampaignsList: (state, { payload }) => {
            state.campaigns = {};
            state.campaignsIds = payload.map((item: ICampaign) => {
                state.campaigns[item.id] = item;
                return item.id;
            });
        },
        changeCampaignStatus: (state, { payload }) => {
            const { campaignId, index, status } = payload;
            const currentCampaign = state.campaigns[campaignId];
            const adResult = currentCampaign.adResults[index];

            adResult.status = status;
            adResult.activationDate = moment().format('MMM DD, YYYY');
        },
    },
});

export const { actions, reducer } = campaignsSlice;
