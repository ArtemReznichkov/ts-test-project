import { ICampaign, EnumCampaignStatuses } from '../types/campaign.types';

export const campaign1: ICampaign = {
    id: 1,
    name: 'Campaign 1',
    status: EnumCampaignStatuses.ACTIVE,
    activationDate: 'Feb 29, 2024',
    site: 'testsite.com.ua',
    coverImageURL:
        'https://dev-users-files.s3.us-east-2.amazonaws.com/ef685e1e-2fe0-4d9c-a8a7-d4d5dc6346ef/image_picker_EDF3E72E-7F01-4FDF-A4E6-5C84BAC7BB1F-27276-000003DE9FAEE27E.jpg',
    results: {
        reach: 22589,
        impressions: 30678,
        cpm: 23.47,
        ctr: 2.09,
        uniqueClicks: 40,
        cpc: 18.78,
    },
    adResults: [
        {
            id: 5,
            name: 'Instagram stories 1',
            status: EnumCampaignStatuses.ACTIVE,
            activationDate: 'Feb 29, 2024',
            site: 'testsite.com.ua',
            fbLink: 'https://www.facebook.com/',
            instagramLink: 'https://instagram.com',
            coverImageURL:
                'https://dev-users-files.s3.us-east-2.amazonaws.com/ef685e1e-2fe0-4d9c-a8a7-d4d5dc6346ef/image_picker_8C554A20-F875-4C09-9734-3ACF9F60C76E-25979-000003CDB5A73AFF.jpg',
            results: {
                reach: 5,
                impressions: 2,
                budget: 54,
                adClicks: 67,
                objectiveAction: 6,
                ctr: 3,
                costPerMile: 2,
                costPerAction: 1,
            },
        },
        {
            id: 6,
            name: 'Instagram stories 2',
            status: EnumCampaignStatuses.ACTIVE,
            activationDate: 'May 2, 2023',
            site: 'test.com.ua',
            instagramLink: 'https://instagram.com',
            coverImageURL:
                'https://dev-users-files.s3.us-east-2.amazonaws.com/ef685e1e-2fe0-4d9c-a8a7-d4d5dc6346ef/image_picker_7B6127AC-4AC1-4EE8-BE7A-61C990DA9DC2-26409-000003D6053FBD89.png',
            results: {
                reach: 7,
                impressions: 5,
                budget: 23,
                adClicks: 23,
                objectiveAction: 4,
                ctr: 3,
                costPerMile: 2,
                costPerAction: 1,
            },
        },
        {
            id: 7,
            name: 'Instagram stories 3',
            status: EnumCampaignStatuses.REJECTED,
            activationDate: 'May 19, 2023',
            site: 'campaign.com.ua',
            fbLink: 'https://www.facebook.com/',
            coverImageURL:
                'https://dev-users-files.s3.us-east-2.amazonaws.com/ef685e1e-2fe0-4d9c-a8a7-d4d5dc6346ef/image_picker_14BC5ED2-0114-436B-AFA1-7E1421899DC9-47726-00000746E5BD6E88.jpg',
            results: {
                reach: 45,
                impressions: 23,
                budget: 27,
                adClicks: 25,
                objectiveAction: 2,
                ctr: 7,
                costPerMile: 8,
                costPerAction: 2,
            },
        },
    ],
};

export const campaign2: ICampaign = {
    id: 2,
    name: 'Campaign 2',
    status: EnumCampaignStatuses.REJECTED,
    activationDate: 'Feb 26, 2023',
    site: 'test.com',
    coverImageURL:
        'https://dev-users-files.s3.us-east-2.amazonaws.com/ef685e1e-2fe0-4d9c-a8a7-d4d5dc6346ef/image_picker_F4FD9F0F-DC3E-47B5-B010-C25745BE9408-27320-000003E084079D04.jpg',
    results: {
        reach: 11223,
        impressions: 23456,
        cpm: 15.4,
        ctr: 1.19,
        uniqueClicks: 32,
        cpc: 14.99,
    },
    adResults: [
        {
            id: 5,
            name: 'Instagram stories 1',
            status: EnumCampaignStatuses.ACTIVE,
            activationDate: 'Feb 29, 2024',
            site: 'testsite.com.ua',
            fbLink: 'https://www.facebook.com/',
            instagramLink: 'https://instagram.com',
            coverImageURL:
                'https://dev-users-files.s3.us-east-2.amazonaws.com/ef685e1e-2fe0-4d9c-a8a7-d4d5dc6346ef/image_picker_8C554A20-F875-4C09-9734-3ACF9F60C76E-25979-000003CDB5A73AFF.jpg',
            results: {
                reach: 5,
                impressions: 2,
                budget: 54,
                adClicks: 67,
                objectiveAction: 6,
                ctr: 3,
                costPerMile: 2,
                costPerAction: 1,
            },
        },
        {
            id: 6,
            name: 'Instagram stories 2',
            status: EnumCampaignStatuses.ACTIVE,
            activationDate: 'May 2, 2023',
            site: 'test.com.ua',
            instagramLink: 'https://instagram.com',
            coverImageURL:
                'https://dev-users-files.s3.us-east-2.amazonaws.com/ef685e1e-2fe0-4d9c-a8a7-d4d5dc6346ef/image_picker_7B6127AC-4AC1-4EE8-BE7A-61C990DA9DC2-26409-000003D6053FBD89.png',
            results: {
                reach: 7,
                impressions: 5,
                budget: 23,
                adClicks: 23,
                objectiveAction: 4,
                ctr: 3,
                costPerMile: 2,
                costPerAction: 1,
            },
        },
        {
            id: 7,
            name: 'Instagram stories 3',
            status: EnumCampaignStatuses.REJECTED,
            activationDate: 'May 19, 2023',
            site: 'campaign.com.ua',
            fbLink: 'https://www.facebook.com/',
            coverImageURL:
                'https://dev-users-files.s3.us-east-2.amazonaws.com/ef685e1e-2fe0-4d9c-a8a7-d4d5dc6346ef/image_picker_14BC5ED2-0114-436B-AFA1-7E1421899DC9-47726-00000746E5BD6E88.jpg',
            results: {
                reach: 45,
                impressions: 23,
                budget: 27,
                adClicks: 25,
                objectiveAction: 2,
                ctr: 7,
                costPerMile: 8,
                costPerAction: 2,
            },
        },
    ],
};

export const campaignsListMock: ICampaign[] = [campaign1, campaign2];
