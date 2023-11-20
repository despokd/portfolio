<script>
	import { _, locale, locales } from 'svelte-i18n';

	/**
	 * Change current locale
	 * @param {string | null | undefined} localeCode
	 */
	function setLocale(localeCode) {
		locale.set(localeCode);
	}
</script>

<footer>
	<nav>
		<ul>
			<li><a href="/imprint">{$_('pages.imprint.title')}</a></li>
			<li>
				<a href="https://github.com/despokd/portfolio" target="_blank" rel="noopener noreferrer"
					>{$_('common.repository')}</a
				>
			</li>
			{#each $locales as option}
				<li>
					<button
						class:active={$locale === option}
						class="a"
						type="button"
						on:click={() => setLocale(option)}
						on:keydown={() => setLocale(option)}
						on:touchend={() => setLocale(option)}
						disabled={$locale === option}
					>{option}</button>
				</li>
			{/each}
		</ul>
	</nav>
</footer>

<style lang="scss">
	footer {
		padding: 1rem;
	}

	ul {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		list-style: none;
		margin: 0;
		padding: 0;
		gap: 1rem;
	}

	a, .a {
		text-decoration: none;
	}
</style>