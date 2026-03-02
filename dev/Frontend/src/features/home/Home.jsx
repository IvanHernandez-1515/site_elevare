//commons
import {PageMeta} from "../../components/common/seo/PageMeta";
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
            <PageMeta
                description="Crea y gestiona tu CV de forma simple y profesional"
                canonicalPath="/"
            />
            <HomeLayout>
                <HeroSection />
                <ProblemSection />
                <SolutionSection />
                <FeatureSection />
                {/* <DifferenceProduct /> */}
            </HomeLayout>
        </>
    );
}
export default HomePage;