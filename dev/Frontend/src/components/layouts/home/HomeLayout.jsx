import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { HeaderHomeTop } from "../../common/header/home/HeaderHomeTop";
import { HeaderHomeMain } from "../../common/header/home/HeaderHomeMain";
import { HeaderHomeOffcanvas } from "../../common/header/home/HeaderHomeOffcanvas";
import { Footer } from "../../common/footer/home/FooterHome";

const HOME_MOBILE_MENU_ID = "home-mobile-offcanvas";

export const HomeLayout = ({ children }) => {
    const { t } = useTranslation("home");

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuButtonRef = useRef(null);

    const openMobileMenu = () => {
        if (isMenuOpen) return;

        setIsMenuOpen(true);
    };

    const closeMobileMenu = () => {
        if (!isMenuOpen) return;

        setIsMenuOpen(false);

        window.requestAnimationFrame(() => {
            menuButtonRef.current?.focus();
        });
    };

    return (
        <>
            <a
                href="#main-content"
                className={[
                    "sr-only",
                    "focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[999]",
                    "focus:px-4 focus:py-3",
                    "focus:font-sans focus:text-sm focus:font-semibold focus:text-white",
                    "focus:bg-elevare-primary",
                    "focus:rounded-xl",
                ].join(" ")}
            >
                {t("accessibility.skipToContent")}
            </a>

            <header className="relative z-50">
                <HeaderHomeTop />

                <HeaderHomeMain
                    isMenuOpen={isMenuOpen}
                    menuButtonRef={menuButtonRef}
                    mobileMenuId={HOME_MOBILE_MENU_ID}
                    onOpenMobileMenu={openMobileMenu}
                />

                <HeaderHomeOffcanvas
                    id={HOME_MOBILE_MENU_ID}
                    isOpen={isMenuOpen}
                    onClose={closeMobileMenu}
                />
            </header>

            <main id="main-content">
                {children}
            </main>
            
            <footer>
                <Footer />
            </footer>
        </>
    );
};