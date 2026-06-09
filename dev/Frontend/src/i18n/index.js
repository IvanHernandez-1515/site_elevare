import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import esHome from "./locales/es/home.json";
import enHome from "./locales/en/home.json";

//clave_para_guardar_el_idioma_en_el_navegador
const LANGUAGE_STORAGE_KEY = "elevare_language";

//diccionario_principal_de_traducciones
const resources = {
    es: {
        home: esHome,
    },
    en: {
        home: enHome,
    },
};

//idiomas_disponibles_generados_desde_resources
export const supportedLanguages = Object.keys(resources);

//obtiene_el_idioma_inicial_de_la_app
const getInitialLanguage = () => {
    //busca_si_el_usuario_ya_habia_elegido_un_idioma
    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);

    //usa_el_idioma_guardado_si_existe_y_es_valido
    if (supportedLanguages.includes(savedLanguage)) {
        return savedLanguage;
    }

    //idioma_por_defecto
    return "es";
};

//inicializa_i18next_para_react
i18n.use(initReactI18next).init({
    //traducciones_disponibles
    resources,

    //idiomas_permitidos
    supportedLngs: supportedLanguages,

    //idioma_inicial
    lng: getInitialLanguage(),

    //idioma_de_respaldo_si_falta_alguna_traduccion
    fallbackLng: "es",

    //namespace_principal
    defaultNS: "home",

    //namespaces_disponibles
    ns: ["home"],

    interpolation: {
        //react_ya_protege_contra_html_inseguro
        escapeValue: false,
    },
});

//se_ejecuta_cada_vez_que_cambia_el_idioma
i18n.on("languageChanged", (language) => {
    //guarda_el_idioma_seleccionado
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);

    //actualiza_el_atributo_lang_del_html
    document.documentElement.lang = language;

    //actualiza_la_direccion_del_texto
    document.documentElement.dir = i18n.dir(language);
});

//configura_el_html_con_el_idioma_inicial
document.documentElement.lang = i18n.language;

//configura_la_direccion_inicial_del_texto
document.documentElement.dir = i18n.dir(i18n.language);

export default i18n;