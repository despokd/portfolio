<script>
	export let title = '',
		description = '';

	import { _ } from 'svelte-i18n';

	title = title ? `${title} | ${$_('common.title')}` : $_('common.title');
    description = description || $_('common.description');
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
</svelte:head>
