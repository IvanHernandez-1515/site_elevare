import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {
    const { t, i18n } = useTranslation('home');

    const currentLanguage = i18n.resolvedLanguage || i18n.language;

    const handleChangeLanguage = (event) => {
        i18n.changeLanguage(event.target.value);
    };

    return (
        <div>
            <label htmlFor="language-select" className="sr-only">
                {t('language.label', { defaultValue: 'Idioma' })}
            </label>

            <select
                id="language-select"
                value={currentLanguage}
                onChange={handleChangeLanguage}
                aria-label={t('language.label', { defaultValue: 'Idioma' })}
            >
                <option value="es">ES</option>
                <option value="en">EN</option>
            </select>
        </div>
    );
}