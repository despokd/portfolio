
import { locale } from 'svelte-i18n';
import { get } from 'svelte/store';
import { defaultLocale } from '$lib/i18n';

/**
 * Find fields in a collection with correct  or similar language code
 * @param {any} translations
 * @returns {any}
 */
export function getTranslation(translations) {
    let foundTranslation = {};
    if (!translations) return foundTranslation;

    // code from svelte-i18n or browser language
    let languagesToCheck = [get(locale), defaultLocale];

    // remove duplicates, empty values and undefined
    languagesToCheck.filter((language, index) => languagesToCheck.indexOf(language) === index);
    languagesToCheck.filter((language) => language && language !== '');

    // search for exact match (ISO 639-2, 'en-GB' or 'de-DE')
    languagesToCheck.every((language) => {
        foundTranslation = translations.find((/** @type {{ languages_code: string; }} */ translation) => translation.languages_code === language) ?? foundTranslation;
        return !foundTranslation;
    });

    // search for similar match (ISO 639-1, 'en' or 'de')
    if (!foundTranslation) {
        languagesToCheck.every((language) => {
            foundTranslation = translations.find((/** @type {{ languages_code: string; }} */ translation) => translation.languages_code.slice(0, 2) === language.slice(0, 2))
            return !foundTranslation;
        });
    }

    // use first translation
    if (!foundTranslation) {
        foundTranslation = translations[0] ?? {};
    }

    // debug info
    foundTranslation._checkedLanguages = languagesToCheck;

    return foundTranslation;
}