<script>
	import { _ } from 'svelte-i18n';
	import SectionProjects from '$lib/components/section-projects.svelte';
	import PageMeta from '$lib/components/page-meta.svelte';

	export let data;
</script>

<PageMeta title={$_('pages.projects.title')} description={$_('pages.projects.description')} />

<h1>{$_('pages.projects.title')}</h1>
<p>{$_('pages.projects.description')}</p>

<SectionProjects projects={data.projects} all={true} />