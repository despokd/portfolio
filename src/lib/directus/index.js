
import { locale } from 'svelte-i18n';
import { get } from 'svelte/store';
import { defaultLocale } from '$lib/i18n';

/**
 * Find fields in a collection with correct language code
 * @param {any} translations
 * @returns {any}
 */
export function getTranslation(translations) {
    if (!translations) return {};

    const languagesToCheck = [get(locale), defaultLocale];
    const translation = translations.find((translation) => languagesToCheck.includes(translation.languages_code));

    return translation ?? translations[0] ?? {};
}