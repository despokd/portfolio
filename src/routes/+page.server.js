import { readItems } from '@directus/sdk';
import { directus } from '$lib/api';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    let me = await directus.request(readItems('me'));
    let meTranslations = await directus.request(readItems('me_translations'));

    return {
        me,
        meTranslations
    }
};