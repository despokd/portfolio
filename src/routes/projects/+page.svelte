<script>
	import { _ } from 'svelte-i18n';
	import SectionProjects from '$lib/components/section-projects.svelte';

	export let data;
</script>

<svelte:head>
	<title>{$_('pages.projects.title')}</title>
	<meta name="description" content={$_('pages.projects.description')} />
</svelte:head>


<h1>{$_('pages.projects.title')}</h1>
<p>{$_('pages.projects.description')}</p>

<SectionProjects projects={data.projects} all={true} />