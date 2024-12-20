import type { TypeResult } from '../../../../types/components.types';

export const resultsSchema: TypeResult[] = [
    {
        field: 'reach',
        label: 'Reach',
    },
    {
        field: 'impressions',
        label: 'Impressions',
    },
    {
        field: 'cpm',
        label: 'CPM',
        prefix: '$',
    },
    {
        field: 'ctr',
        label: 'CTR',
        suffix: '%',
    },
    {
        field: 'uniqueClicks',
        label: 'Unique link clicks',
    },
    {
        field: 'cpc',
        label: 'CPC',
        prefix: '$',
    },
];
