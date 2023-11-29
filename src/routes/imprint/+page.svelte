<script>
	import { _ } from 'svelte-i18n';
	import { getTranslation } from '$lib/directus';

	export let data;

	let imprint = getTranslation(data.global).imprint;
</script>

<svelte:head>
	<title>{$_('pages.imprint.title')} | {$_('common.title')}</title>
	<meta name="description" content={$_('pages.imprint.description')} />
</svelte:head>

<article>
	<h1>{$_('pages.imprint.title')}</h1>
	{@html imprint}
</article>
