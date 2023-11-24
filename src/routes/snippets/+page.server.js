import { readItems } from '@directus/sdk';
import { directus } from '$lib/directus/client';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    let snippets = await directus.request(readItems('post', {
        fields: ['*', { translations: ['*'] }],
        filter: {
            status: 'published'
        }
    }));


    return {
        snippets
    }
};