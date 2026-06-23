import { useTranslation } from "react-i18next";
//commons
import {PageMeta} from "../../components/common/seo/PageMeta";
//layouts
import { HomeLayout } from '../../components';
//sections
import HeroSection from "./HeroSection";

const HomePage2 = () => {
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
            </HomeLayout>
        </>
    );
}
export default HomePage2;