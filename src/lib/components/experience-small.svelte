<script>
	import { _, getDateFormatter } from 'svelte-i18n';
    import { getTranslation } from '$lib/directus';

	export let experience;

    const dateFormat = 'MMMM yyyy'
    const title = experience.type == 'education' ? $_('pages.cv.experience.education') : $_('pages.cv.experience.job');
    const start = experience.start ? getDateFormatter(dateFormat).format(new Date(experience.start)) : null;
    const end = experience.end ? new Date(experience.end).getFullYear() : $_('pages.cv.experience.present');
    const place = getTranslation(experience.translations).place ?? null;
</script>

<div>{title}</div>
<h3>{getTranslation(experience.translations).name}</h3>
<ul>
	{#if place}
		<li>{place}</li>
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
        gap: .5em;
    }

    h3 {
        margin-top: 0;
        margin-bottom: .25em;
    }
</style>