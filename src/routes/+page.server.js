import { readItems } from '@directus/sdk';
import { directus } from '$lib/api';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    let me = await directus.request(readItems('me', {
        fields: ['*', { translations: ['*'] }]
    }));

    let experiences = await directus.request(readItems('experience', {
        fields: ['*', { translations: ['*'] }],
        filter: {
            status: 'published'
        }
    }));

    let projects = await directus.request(readItems('project', {
        fields: ['*', { translations: ['*'] }, { createdAt: ['*'] }],
        filter: {
            status: 'published'
        }
    }));

    return {
        me,
        links: await directus.request(readItems('Links')),
        experiences,
        projects
    }
};