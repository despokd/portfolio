<script>
	import { _ } from 'svelte-i18n';
	import Snippet from '$lib/components/snippet.svelte';

	export let snippets,
		all = false;

	// order by date
	snippets.sort((a, b) => {
		return new Date(b.date_created) - new Date(a.date_created);
	});
</script>

<section>
	{#if !all}
		<h2>{$_('pages.snippets.title')}</h2>
		<p>{$_('pages.snippets.description')}</p>
	{/if}
	<div>
		{#each snippets as snippet, index}
			{#if all || index < 3}
				<Snippet {snippet} />
			{/if}
		{/each}
	</div>
	{#if !all}
		<a href="/snippets">{$_('pages.home.section.snippets.all')}</a>
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
