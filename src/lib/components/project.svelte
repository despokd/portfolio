<script>
	import { getTranslation } from '$lib/directus';

	export let project;

	const name = getTranslation(project.translations).name;
	const url = project.url ?? '';
	const urlLabel = url
		.replace('https://', '')
		.replace('http://', '')
		.replace('www.', '')
		.replace(/\/$/, '');
</script>

<article>
	<p><a href={url} target="_blank" rel="noopener noreferrer">{name ?? urlLabel ?? ''}</a></p>
	<ul>
		{#if project.year}
			<li>{project.year}</li>
		{/if}
	</ul>
</article>

<style lang="scss">
	ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 0.5em;
	}
</style>
