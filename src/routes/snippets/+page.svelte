<script>
	import { _ } from 'svelte-i18n';
	import SectionSnippets from '$lib/components/section-snippets.svelte';

	export let data;
</script>

<svelte:head>
	<title>{$_('pages.snippets.title')}</title>
	<meta name="description" content={$_('pages.snippets.description')} />
</svelte:head>


<h1>{$_('pages.snippets.title')}</h1>
<p>{$_('pages.snippets.description')}</p>

<SectionSnippets snippets={data.snippets} all={true} />