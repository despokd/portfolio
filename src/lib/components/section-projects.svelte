<script>
	import { _ } from 'svelte-i18n';
	import Project from '$lib/components/project.svelte';

	export let projects,
		all = false;

	// order projects by year
	projects.sort((a, b) => {
		if (a.year < b.year) {
			return 1;
		}
		if (a.year > b.year) {
			return -1;
		}
		return 0;
	});
</script>

<section>
	{#if !all}
		<h2>{$_('pages.projects.title')}</h2>
		<p>{$_('pages.projects.description')}</p>
	{/if}
	<div>
		{#each projects as project, index}
			{#if all || index < 3}
				<Project {project} />
			{/if}
		{/each}
	</div>
	{#if !all}
		<a href="/projects">{$_('pages.home.section.projects.all')}</a>
	{/if}
</section>

<style lang="scss">
	div {
		display: grid;
		grid-template-columns: 1fr;
		margin-bottom: 1rem;

		@media screen and (min-width: 600px) {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}
</style>
