<script>
	export let links;
</script>

{#if links != undefined}
	<ul>
		{#each links as link}
			{#if link.name != 'kdomaratius.de'}
				<li>
					<a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
				</li>
			{/if}
		{/each}
	</ul>
{/if}

<style lang="scss">
	ul {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		list-style: none;
		padding: 0;
		margin: 0;
		gap: 0.5em;
	}
</style>
