import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

import MainLayout from './components/layouts/MainLayout';

import HomePage from './components/pages/HomePage';
import ProductsPage from './components/pages/ProductsPage';
import AdsPage from './components/pages/AdsPage';
import VideosPage from './components/pages/VideosPage';
import CampaignsPage from './components/pages/CampaignsPage';
import CampaignPage from './components/pages/CampaignPage';

import { EnumRoutes } from './constants/routes';

const App: React.FC = () => (
    <HashRouter>
        <Routes>
            <Route
                path="*"
                element={<Navigate to={EnumRoutes.HOME} replace />}
            />
            <Route element={<MainLayout />}>
                <Route path={EnumRoutes.HOME} element={<HomePage />} />
                <Route path={EnumRoutes.PRODUCTS} element={<ProductsPage />} />
                <Route path={EnumRoutes.ADS} element={<AdsPage />} />
                <Route path={EnumRoutes.VIDEOS} element={<VideosPage />} />
                <Route
                    path={EnumRoutes.CAMPAIGNS}
                    element={<CampaignsPage />}
                />
                <Route path={EnumRoutes.CAMPAIGN} element={<CampaignPage />} />
            </Route>
        </Routes>
    </HashRouter>
);

export default App;
