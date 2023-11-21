<script>
	import { _ } from 'svelte-i18n';
	import { page } from '$app/stores';
</script>

{#if $page.url.pathname != '/'}
	<header>
		<nav>
			<ul>
				<li><a href="/">{$_('pages.home.title')}</a></li>
				<li><a href="/snippets">{$_('pages.snippets.title')}</a></li>
				<li><a href="/links">{$_('pages.links.title')}</a></li>
				<li><a href="/projects">{$_('pages.projects.title')}</a></li>
			</ul>
		</nav>
	</header>
{/if}
