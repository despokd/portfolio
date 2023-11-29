<script>
	import { _ } from 'svelte-i18n';
	import PageMeta from '$lib/components/page-meta.svelte';

	const raindropUrl = 'https://raindrop.io/despokd/shared-39428323';
	const raindropOptions = {
		sort: '-created',
		theme: 'auto',
		hide: 'header'
	};

	const raindropEmbedUrl = `${raindropUrl}/embed/${Object.entries(raindropOptions)
		.map(([key, value]) => `${key}=${value}`)
		.join('&')}`;
</script>

<PageMeta title={$_('pages.links.title')} description={$_('pages.links.description')} />

<h1>{$_('pages.links.title')}</h1>
<p>
	{$_('pages.links.description')}.
	<a href={raindropUrl} target="_blank" rel="noopener noreferrer">{$_('pages.links.showCollection')}</a>
</p>

<iframe allowfullscreen frameborder="0" title={$_('pages.links.iframe')} src={raindropEmbedUrl}
></iframe>

<style lang="scss">
	iframe {
		width: 100%;
		height: 500px;
		min-height: 75vh;
		margin-block: 2.5%;
	}
</style>
