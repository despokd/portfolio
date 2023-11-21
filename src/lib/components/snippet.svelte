<script>
	import { getDateFormatter } from 'svelte-i18n';

	export let snippet;
</script>

<article>
	<a href={'/snippets/' + snippet.slug}>
		<h3>{snippet.title}</h3>
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
