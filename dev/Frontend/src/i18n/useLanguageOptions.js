import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { supportedLanguages } from "./index";
import { languageIcons } from "./languageAssets";

export const useLanguageOptions = () => {
    //obtiene_la_funcion_de_traduccion_del_namespace_home
    const { t } = useTranslation("home");

    return useMemo(() => {
        //obtiene_las_opciones_de_idioma_desde_el_json_actual
        const options = t("language.options", {
            returnObjects: true,
            defaultValue: {},
        });

        //convierte_los_idiomas_soportados_en_opciones_para_la_interfaz
        return supportedLanguages
            .map((code) => {
                //busca_la_configuracion_del_idioma_actual
                const option = options?.[code];

                //si_no_existe_configuracion_no_muestra_ese_idioma
                if (!option) {
                    return null;
                }

                //estructura_final_para_el_language_switcher
                return {
                    code,
                    short: option.short,
                    label: option.label,
                    nativeLabel: option.nativeLabel,
                    iconSrc: languageIcons[option.icon],
                };
            })

            //elimina_idiomas_invalidos_o_incompletos
            .filter(Boolean);
    }, [t]);
};