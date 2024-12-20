import type { TypeAdResultTableSchema } from '../../../../types/components.types';

export const adSchema: TypeAdResultTableSchema[] = [
    {
        field: 'reach',
        header: 'Reach',
        label: 'Unique viewers',
        width: 125,
    },
    {
        field: 'impressions',
        label: 'Total views',
        header: 'Impressions',
        width: 125,
    },
    {
        field: 'budget',
        label: 'Spent',
        header: 'Budget',
        prefix: '$',
        width: 125,
    },
    {
        field: 'adClicks',
        label: 'Clicks',
        header: 'Ad clicks',
        width: 125,
    },
    {
        field: 'objectiveAction',
        header: 'Objective Action',
        label: 'Targeted clicks',
        width: 125,
    },
    {
        field: 'ctr',
        header: 'CTR',
        label: 'Click-throuth rate',
        suffix: '%',
        width: 125,
    },
    {
        field: 'costPerMile',
        label: 'Per 1k impressions',
        header: 'Cost per mile',
        prefix: '$',
        width: 125,
    },
    {
        field: 'costPerAction',
        label: 'Per 1 action',
        header: 'Cost per action',
        prefix: '$',
        width: 125,
    },
];
