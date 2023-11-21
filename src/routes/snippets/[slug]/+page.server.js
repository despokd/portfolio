import { readItems } from '@directus/sdk';
import { directus } from '$lib/api';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    let snippet = await directus.request(readItems('post', {
        fields: ['*', { tags: ['*'] }],
        filter: {
            status: 'published'
        }
    })).then(res => {
        return res.find(item => item.slug === params.slug);
    });

    let skills = await directus.request(readItems('skill', {
        fields: ['*', { translations: ['*'] }]
    }));

    return {
        snippet,
        skills
    }
};