<script>
	import { _ } from 'svelte-i18n';
	import SectionSnippets from '$lib/components/section-snippets.svelte';
	import PageMeta from '$lib/components/page-meta.svelte';

	export let data;
</script>

<PageMeta title={$_('pages.snippets.title')} description={$_('pages.snippets.description')} />


<h1>{$_('pages.snippets.title')}</h1>
<p>{$_('pages.snippets.description')}</p>

<SectionSnippets snippets={data.snippets} all={true} />