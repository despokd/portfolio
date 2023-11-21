<script>
	import { getTranslation } from '$lib/directus';
import { _, getDateFormatter } from 'svelte-i18n';
	import SvelteMarkdown from 'svelte-markdown';

	export let data;

	function formatDate(date) {
		return new Date(date).toLocaleDateString(getDateFormatter().locale);
	}

	let tags = [];
	data.snippet.tags.forEach((tag) => {
		let skill = data.skills.find((skill) => skill.key === tag.skill_key);
		if (skill) {
			tags.push(skill);
		}
	});
</script>

<h1>{data.snippet.title}</h1>
<ul class="meta">
	{#if data.snippet.date_created}
		<li>
            {$_('snippets.created')}
			<time datetime={data.snippet.date_created}
				>{formatDate(new Date(data.snippet.date_created))}</time
			>
		</li>
	{/if}
	{#if data.snippet.date_updated}
		<li>
			{$_('snippets.updated')}
			<time datetime={data.snippet.date_updated}
				>{formatDate(new Date(data.snippet.date_updated))}</time
			>
		</li>
	{/if}
	<li>
		{$_('snippets.tags')}
		{#each tags as tag, index}
			{#if index > 0},
			{/if}
			{getTranslation(tag.translations).name}
		{/each}
	</li>
</ul>

<SvelteMarkdown source={data.snippet.content} />

<style lang="scss">
	.meta {
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		margin: 0;
		padding: 0;
		font-size: 0.8em;
		gap: 1em;
	}
</style>
