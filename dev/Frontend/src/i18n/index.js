import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import esHome from './locales/es/home.json';
import enHome from './locales/en/home.json';

const LANGUAGE_STORAGE_KEY = 'elevare_language';

const supportedLanguages = ['es', 'en'];

const getInitialLanguage = () => {
    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);

    if (supportedLanguages.includes(savedLanguage)) {
        return savedLanguage;
    }

    return 'es';
};

i18n.use(initReactI18next).init({
    resources: {
        es: {
            home: esHome,
        },
        en: {
            home: enHome,
        },
    },
    lng: getInitialLanguage(),
    fallbackLng: 'es',
    defaultNS: 'home',
    ns: ['home'],
    interpolation: {
        escapeValue: false,
    },
});

i18n.on('languageChanged', (language) => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    document.documentElement.lang = language;
    document.documentElement.dir = i18n.dir(language);
});

document.documentElement.lang = i18n.language;
document.documentElement.dir = i18n.dir(i18n.language);

export default i18n;