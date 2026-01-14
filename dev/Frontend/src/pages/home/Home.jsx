import React from 'react';
import { HomeLayout } from '../../components';

import HeroSection from './HeroSection';
import FeatureSection from './FeaturesSection';

const HomePage = () => {
    return (
        <>
            <HomeLayout>
                <HeroSection />
                <FeatureSection />
            </HomeLayout>
        </>
    );
}
export default HomePage;