import { EnumRoutes } from '../../../constants/routes';

import Home from '../../../assets/svg/home.svg?react';
import Products from '../../../assets/svg/products.svg?react';
import Ads from '../../../assets/svg/creatives.svg?react';
import Videos from '../../../assets/svg/video.svg?react';
import Campaigns from '../../../assets/svg/promotion.svg?react';

export type TypeMenuLink = {
    name: string;
    path: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

export const schema: TypeMenuLink[] = [
    {
        name: 'Home',
        path: EnumRoutes.HOME,
        icon: Home,
    },
    {
        name: 'Products',
        path: EnumRoutes.PRODUCTS,
        icon: Products,
    },
    {
        name: 'Static ads',
        path: EnumRoutes.ADS,
        icon: Ads,
    },
    {
        name: 'Videos',
        path: EnumRoutes.VIDEOS,
        icon: Videos,
    },
    {
        name: 'Campaigns',
        path: EnumRoutes.CAMPAIGNS,
        icon: Campaigns,
    },
];
