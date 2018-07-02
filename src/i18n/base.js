let LanguageStrings = {};

const LanguageOption = {
    EN: 'EN',
    CN: 'CN',
};

let I18NStrings = {
    [LanguageOption.EN]:{},
    [LanguageOption.CN]:{},
};

export { LanguageOption, LanguageStrings, I18NStrings };

export function updateLanguageStrings(newLanguageStrings) {
    LanguageStrings =
        {
            ...LanguageStrings,
            ...newLanguageStrings
        };
}

export function updateI18NStrings(newI18NStrings) {
    I18NStrings[LanguageOption.EN] =
        {
            ...I18NStrings[LanguageOption.EN],
            ...newI18NStrings[LanguageOption.EN]
        };
    I18NStrings[LanguageOption.CN] =
        {
            ...I18NStrings[LanguageOption.CN],
            ...newI18NStrings[LanguageOption.CN]
        };
}
