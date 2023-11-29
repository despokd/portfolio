<script>
	import { _ } from 'svelte-i18n';
	import { getTranslation } from '$lib/directus';
	import PageMeta from '$lib/components/page-meta.svelte';

	export let data;

	let imprint = getTranslation(data.global).imprint;
</script>

<PageMeta title={$_('pages.imprint.title')} description={$_('pages.imprint.description')} />

<article>
	<h1>{$_('pages.imprint.title')}</h1>
	{@html imprint}
</article>
