import { useTranslation } from "react-i18next";
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
    const { t, i18n } = useTranslation("home");
    return (
        <>
            <PageMeta
                title={t("meta.title")}
                description={t("meta.description")}
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