import { LanguageOption, I18NStrings, LanguageStrings } from './i18n/base';
import './i18n/airdrop';
import './i18n/bounty';
import './i18n/error';

export const LANGUAGE_KEY = 'LANGUAGE_OPTION';

export function getBrowserLang() {
    let lang = (navigator.language || navigator.userLanguage || navigator.browserLanguage);
    if (lang) {
        lang = lang.toLowerCase();
        if (lang.indexOf('zh') > -1) {
            return LanguageOption.CN;
        }
    }

    return LanguageOption.EN;
}

let lang = localStorage.getItem(LANGUAGE_KEY);

if (!lang || (lang != LanguageOption.EN && lang != LanguageOption.CN)) {
    lang =  getBrowserLang();
    localStorage.setItem(LANGUAGE_KEY, lang);
}

// Only use EN now
let CURRENT_LANG = "EN";
let i18n = {
    get: function (langStr) {
        return (I18NStrings[CURRENT_LANG])[langStr] ? (I18NStrings[CURRENT_LANG])[langStr] : (I18NStrings[LanguageOption.EN])[langStr]
    }
};

export { i18n }
export { CURRENT_LANG }
export { LanguageOption };
export const Language = LanguageStrings;

export function updateI18N(/*LanguageOption*/lang) {
    localStorage.setItem(LANGUAGE_KEY, lang);
    CURRENT_LANG = lang;
}
