export type TypesCampaignResults = {
    reach: number;
    impressions: number;
    cpm: number;
    ctr: number;
    uniqueClicks: number;
    cpc: number;
};

export enum EnumCampaignStatuses {
    ACTIVE = 'Active',
    REJECTED = 'Rejected',
}

export type TypeAdResults = {
    reach: number;
    impressions: number;
    budget: number;
    adClicks: number;
    objectiveAction: number;
    ctr: number;
    costPerMile: number;
    costPerAction: number;
};

export interface IAdResultsItem {
    id: number;
    name: string;
    status: EnumCampaignStatuses;
    activationDate: string;
    site?: string;
    fbLink?: string;
    instagramLink?: string;
    coverImageURL: string;
    results: TypeAdResults;
}

export interface ICampaign {
    id: number;
    name: string;
    status: EnumCampaignStatuses;
    activationDate: string;
    site: string;
    fbLink?: string;
    instagramLink?: string;
    coverImageURL: string;
    results: TypesCampaignResults;
    adResults: IAdResultsItem[];
}
