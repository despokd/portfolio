<script>
	import { _, getDateFormatter } from 'svelte-i18n';
	import { getTranslation } from '$lib/directus';

	export let experience, skills;

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

	// get skills
	let tags = [];
	experience.skills.forEach((tag) => {
		let skill = skills.find((skill) => skill.key === tag.skill_key);
		if (skill) {
			tags.push(skill);
		}
	});

    // order tags by key/name
    tags.sort((a, b) => {
        if (a.key < b.key) return -1;
        if (a.key > b.key) return 1;
        return 0;
    });

	// order tags by highlighted
	tags.sort((a, b) => {
		if (a.isHightlighted && !b.isHightlighted) return -1;
		if (!a.isHightlighted && b.isHightlighted) return 1;
		return 0;
	});
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
{#if experience.skills}
	<li>
		<ul>
			{#each tags as skill}
				<li>
					{#if skill.isHightlighted}
						<i>{getTranslation(skill.translations).name}</i>
					{:else}
						{getTranslation(skill.translations).name}
					{/if}
				</li>
			{/each}
		</ul>
	</li>
{/if}
{#if experience.skills}
	<li>
		<ul>
			{#each tags as skill}
				<li>
					{#if skill.isHightlighted}
						<i>{getTranslation(skill.translations).name}</i>
					{:else}
						{getTranslation(skill.translations).name}
					{/if}
				</li>
			{/each}
		</ul>
	</li>
{/if}

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
