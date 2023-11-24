import { readItems } from '@directus/sdk';
import { directus } from '$lib/directus/client';

export async function GET(params) {
    let snippets = await directus.request(readItems('post', {
        fields: ['*', { translations: ['*'] }],
        filter: {
            status: 'published'
        }
	}));

	return new Response(
		`
		<?xml version="1.0" encoding="UTF-8" ?>
		<urlset
			xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
			xmlns:xhtml="https://www.w3.org/1999/xhtml"
			xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
			xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
			xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
			xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
		>
		<url>
				<loc>${params.url.origin}</loc>
				<priority>1.0</priority>
			</url>
			<url>
				<loc>${params.url.origin}/snippets</loc>
				<priority>0.8</priority>
			</url>
			<url>
				<loc>${params.url.origin}/projects</loc>
				<priority>0.8</priority>
			</url>
			<url>
				<loc>${params.url.origin}/links</loc>
				<priority>0.8</priority>
			</url>
			${snippets.map(snippet => `
				<url>
					<loc>${params.url.origin}/snippets/${snippet.slug}</loc>
					<lastmod>${snippet.date_updated ?? snippet.date_created}</lastmod>
					<changefreq>monthly</changefreq>
					<priority>0.6</priority>
				</url>
			`).join('')}
		</urlset>`.trim(),
		{
			headers: {
				'Content-Type': 'application/xml'
			}
		}
	);
}