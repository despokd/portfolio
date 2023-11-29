<script>
	import { _ } from 'svelte-i18n';
	import { getTranslation } from '$lib/directus';

	export let data;

	let privacy = getTranslation(data.global).privacy_policy;
</script>

<svelte:head>
	<title>{$_('pages.privacy.title')} | {$_('common.title')}</title>
	<meta name="description" content={$_('pages.privacy.description')} />
</svelte:head>

<article>
	<h1>{$_('pages.privacy.title')}</h1>
	{@html privacy}
</article>
