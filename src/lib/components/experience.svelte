<script>
	import { _, getDateFormatter } from 'svelte-i18n';
	import { getTranslation } from '$lib/directus';

	export let experience;

	const dateFormat = {
		month: 'short',
		year: 'numeric'
	};
	const start = experience.start
		? getDateFormatter(dateFormat).format(new Date(experience.start))
		: null;
	const end = experience.end
		? getDateFormatter(dateFormat).format(new Date(experience.end))
		: $_('pages.cv.experience.present');
	const place = getTranslation(experience.translations).place ?? null;
	const url = experience.place_url;
</script>

<h3>{getTranslation(experience.translations).name}</h3>
<ul>
	{#if place}
		<li>
			{#if url}
				<a href={url} target="_blank" rel="noopener noreferrer">{place}</a>
			{:else}
				{place}
			{/if}
		</li>
	{/if}
	<li>{start ?? ''}{end ? ` - ${end}` : ''}</li>
</ul>

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

	h3 {
		margin-top: 0;
		margin-bottom: 0.25em;
	}
</style>
