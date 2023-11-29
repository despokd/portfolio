<script>
	import { _ } from 'svelte-i18n';
	import Experience from '$lib/components/experience.svelte';
	import PageMeta from '$lib/components/page-meta.svelte';

	export let data;

	let experiences = data.experiences;

	// order by start date format
	experiences.sort((a, b) => {
		const aStart = new Date(a.start);
		const bStart = new Date(b.start);

		if (aStart < bStart) return 1;
		if (aStart > bStart) return -1;
		return 0;
	});

	// split by type
	let types = {};
	experiences.forEach((experience) => {
		if (!types[experience.type]) types[experience.type] = [];
		types[experience.type].push(experience);
	});
</script>

<PageMeta title={$_('pages.cv.title')} description={$_('pages.cv.description')} />

<h1>{$_('pages.cv.title')}</h1>
<p>{$_('pages.cv.description')}</p>

{#each Object.keys(types) as type}
	<section>
		{#if type && type != 'null' && $_(`pages.cv.experience.${type}`)}
			<h2>{$_(`pages.cv.experience.${type}`)}</h2>
		{:else}
			<h2>{$_('pages.cv.experience.other')}</h2>
		{/if}
		<ul>
			{#each types[type] as experience}
				<li>
					<Experience {experience} skills={data.skills} />
				</li>
			{/each}
		</ul>
	</section>
{/each}

<style lang="scss">
	ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	li {
		margin-bottom: 1.5em;
	}
</style>
