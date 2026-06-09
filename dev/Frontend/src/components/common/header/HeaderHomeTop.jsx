import { useTranslation } from "react-i18next";

//components
import { Container } from "../../ui/containers/Container";
import { LanguageSwitcher } from "../language/LanguageSwitcher";

export const HeaderHomeTop = () => {
    const { t } = useTranslation("home");

    return (
        <section
            aria-label={t("language.label")}
            className="hidden border-b border-elevare-border/80 bg-elevare-bg md:block"
        >
            <Container>
                <div className="flex min-h-10 items-center justify-end">
                    <LanguageSwitcher />
                </div>
            </Container>
        </section>
    );
};