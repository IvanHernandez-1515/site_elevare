import { useTranslation } from "react-i18next";

import { HeaderHomeTop } from "../../common/header/HeaderHomeTop";
import { Header } from "../../common/header/HeaderHome";
import { Footer } from "../../common/footer/FooterHome";

export const HomeLayout = ({ children }) => {
    const { t } = useTranslation("home");

    return (
        <>
            <a
                href="#main-content"
                className={[
                    "sr-only",
                    "focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[999]",
                    "focus:rounded-xl focus:bg-elevare-primary focus:px-4 focus:py-3",
                    "focus:text-sm focus:font-semibold focus:text-white",
                ].join(" ")}
            >
                {t("accessibility.skipToContent")}
            </a>

            <header className="relative z-50">
                <HeaderHomeTop />
                <Header />
            </header>

            <main id="main-content">
                {children}
            </main>

            <Footer />
        </>
    );
};