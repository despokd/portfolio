<script>
	import { _ } from 'svelte-i18n';
	import { page } from '$app/stores';
</script>

<header class:home={$page.url.pathname === '/'}>
	<nav>
		<ul>
			<li><a href="/">{$_('pages.home.title')}</a></li>
			<li><a href="/snippets">{$_('pages.snippets.title')}</a></li>
			<li><a href="/links">{$_('pages.links.title')}</a></li>
			<li><a href="/projects">{$_('pages.projects.title')}</a></li>
			<li><a href="/cv">{$_('pages.cv.title')}</a></li>
		</ul>
	</nav>
</header>

<style lang="scss">
	ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 1em;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	li {
		margin: 0;
	}
</style>
