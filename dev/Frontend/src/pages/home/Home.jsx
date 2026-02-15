//layouts
import { HomeLayout } from '../../components';
//sections
import HeroSection from './HeroSection';
import ProblemSection from './ProblemSection';
import FeatureSection from './FeaturesSection';
import SolutionSection from './SolutionSection';
import DifferenceProduct from './DifferenceProduct';

const HomePage = () => {
    return (
        <>
            <HomeLayout>
                <HeroSection />
                <ProblemSection />
                <SolutionSection />
                <FeatureSection />
                <DifferenceProduct />
            </HomeLayout>
        </>
    );
}
export default HomePage;