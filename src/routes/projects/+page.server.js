import { readItems } from '@directus/sdk';
import { directus } from '$lib/api';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    let projects = await directus.request(readItems('project', {
        fields: ['*', { translations: ['*'] }],
        filter: {
            status: 'published'
        }
    }));


    return {
        projects
    }
};