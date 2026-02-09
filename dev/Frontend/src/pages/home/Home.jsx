import React from 'react';
import { HomeLayout } from '../../components';

import HeroSection from './HeroSection';
import FeatureSection from './FeaturesSection';
import SolutionSection from './SolutionSection';

const HomePage = () => {
    return (
        <>
            <HomeLayout>
                <HeroSection />
                <SolutionSection />
                <FeatureSection />
            </HomeLayout>
        </>
    );
}
export default HomePage;