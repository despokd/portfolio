<script>
	import { _ } from 'svelte-i18n';
	import { getTranslation } from '$lib/directus';
	import PageMeta from '$lib/components/page-meta.svelte';

	export let data;

	let privacy = getTranslation(data.global).privacy_policy;
</script>

<PageMeta title={$_('pages.privacy.title')} description={$_('pages.privacy.description')} />

<article>
	<h1>{$_('pages.privacy.title')}</h1>
	{@html privacy}
</article>
