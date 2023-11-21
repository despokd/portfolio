<script>
	import { _ } from 'svelte-i18n';
	import Snippet from '$lib/components/snippet.svelte';

	export let snippets;
</script>

<section>
	<h2>{$_('pages.snippets.title')}</h2>
	<p>{$_('pages.snippets.description')}</p>
	<div>
		{#each snippets as snippet, index}
			{#if index < 3}
				<Snippet {snippet} />
			{/if}
		{/each}
	</div>
</section>

<style lang="scss">
	div {
		display: grid;
		grid-template-columns: 1fr;

		@media screen and (min-width: 600px) {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}
</style>
