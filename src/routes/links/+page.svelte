<script>
    import { _ } from 'svelte-i18n';
</script>

<svelte:head>
	<title>{$_('pages.links.title')}</title>
	<meta name="description" content={$_('pages.links.description')} />
</svelte:head>

<h1>{$_('pages.links.title')}</h1>
<p>{$_('pages.links.description')}</p>

<iframe
	allowfullscreen
	frameborder="0"
	title={$_('pages.links.iframe')}
	src="https://raindrop.io/despokd/tequilian-13645483/embed/sort=-created&theme=auto&hide=header"
></iframe>

<style lang="scss">
	iframe {
		width: 100%;
		height: 500px;
        min-height: 75vh;
        margin-block: 2.5%;
	}
</style>
