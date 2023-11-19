<script>
	import { _ } from 'svelte-i18n';
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
		</ul>
	</nav>
</footer>
