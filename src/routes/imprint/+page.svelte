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

<article class="prose lg:prose-lg dark:prose-invert mx-auto max-w-none">
	<h1 class="text-center">{$_('pages.imprint.title')}</h1>
	{@html imprint}
</article>
