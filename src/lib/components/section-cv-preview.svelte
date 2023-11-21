<script>
	import { _ } from 'svelte-i18n';
	import ExperienceSmall from '$lib/components/experience-small.svelte';

	export let experiences;

	function getLatestExperience(experiences, type = null) {
		experiences = experiences.sort((a, b) => {
			return new Date(b.start) - new Date(a.start);
		});

		if (type) {
			experiences = experiences.filter((experience) => {
				return experience.type === type;
			});
		}

		return experiences[0] || null;
	}

	const job = getLatestExperience(experiences, 'job');
	const education = getLatestExperience(experiences, 'education');
</script>

<section>
	<h2>{$_('pages.home.section.career')}</h2>
	<ul>
		{#if job}
			<li>
				<ExperienceSmall experience={job} />
			</li>
		{/if}
		{#if education}
			<li>
				<ExperienceSmall experience={education} />
			</li>
		{/if}
	</ul>
</section>


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