<script>
	import { _ } from 'svelte-i18n';
	import { page } from '$app/stores';
</script>

{#if $page.url.pathname != '/'}
	<header>
		<nav>
			<ul>
				<li><a href="/">{$_('pages.home.title')}</a></li>
			</ul>
		</nav>
	</header>
{/if}
