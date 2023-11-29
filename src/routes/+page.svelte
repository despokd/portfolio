<script>
	import { _ } from 'svelte-i18n';
	import SectionHero from '$lib/components/section-hero.svelte';
	import SectionCVPreview from '$lib/components/section-cv-preview.svelte';
	import SectionDescription from '$lib/components/section-description.svelte';
	import SectionProjects from '$lib/components/section-projects.svelte';
	import SectionSnippets from '$lib/components/section-snippets.svelte';

	export let data;
</script>

<svelte:head>
	<title>{$_('common.title')}</title>
	<meta name="description" content={$_('common.description')} />
</svelte:head>

<SectionHero me={data.me} links={data.links} />
<div class="columns">
	<SectionCVPreview experiences={data.experiences} />
	<SectionDescription me={data.me}/>
</div>
<SectionProjects projects={data.projects} />
<SectionSnippets snippets={data.snippets} />

<style lang="scss">
	.columns {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		grid-gap: 1rem;
	}
</style>
