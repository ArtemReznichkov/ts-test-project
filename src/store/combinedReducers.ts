import { combineReducers } from '@reduxjs/toolkit';
import { reducer as CampaignsReducer } from './slices/campaigns.slice';

export const reducers = combineReducers({
    campaigns: CampaignsReducer,
});
