import { createDirectus, rest } from '@directus/sdk';
import { API_SERVER } from '$env/static/private';

let directus = createDirectus(API_SERVER)
    .with(rest())

export { directus };