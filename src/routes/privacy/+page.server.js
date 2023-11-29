import { readItems } from '@directus/sdk';
import { directus } from '$lib/directus/client';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    let global = await directus.request(readItems('global_translations'));

    return {
        global
    }
};