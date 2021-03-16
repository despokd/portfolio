import { derived } from "svelte/store";
import { dictionary, locale, _, date, time, number } from "svelte-i18n";
import data from "../data.json";

const MESSAGE_FILE_URL_TEMPLATE = "./lang/{locale}.json";

let defaultLang = data.defaultLanguage ? data.defaultLanguage : "en";
let cachedLocale;

function setupI18n({ withLocale: _locale } = { withLocale: defaultLang }) {
  const messagesFileUrl = MESSAGE_FILE_URL_TEMPLATE.replace(
    "{locale}",
    _locale
  );

  return fetch(messagesFileUrl)
    .then((response) => response.json())
    .then((messages) => {
      dictionary.set({ [_locale]: messages });

      cachedLocale = _locale;

      locale.set(_locale);
    });
}

function formatDate(date, options) {
  return new Intl.DateTimeFormat(cachedLocale, options).format(new Date(date));
}

const isLocaleLoaded = derived(
  locale,
  ($locale) => typeof $locale === "string"
);

const localString = derived(locale, ($locale) => {
  return $locale;
});

const dir = derived(locale, ($locale) => ($locale === "ar" ? "rtl" : "ltr"));

export {
  _,
  locale,
  localString,
  dir,
  setupI18n,
  formatDate,
  isLocaleLoaded,
  date,
  time,
  number,
};
