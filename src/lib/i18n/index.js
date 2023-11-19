// src/lib/i18n/index.ts
import { browser } from '$app/environment'
import { init, register } from 'svelte-i18n'

export const defaultLocale = 'en-GB'

register('en-GB', () => import('./locales/en-GB.json'))
register('de-DE', () => import('./locales/de-DE.json'))

init({
	fallbackLocale: defaultLocale,
	initialLocale: browser ? window.navigator.language : defaultLocale,
})