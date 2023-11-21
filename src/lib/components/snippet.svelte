<script>
	import { getDateFormatter } from 'svelte-i18n';

	export let snippet;
</script>

<article>
	<a href={'/snippets/' + snippet.slug}>
		<p><strong>{snippet.title}</strong></p>
	</a>
	<ul>
		{#if snippet.date_created}
			<li>{new Date(snippet.date_created).toLocaleDateString(getDateFormatter())}</li>
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
