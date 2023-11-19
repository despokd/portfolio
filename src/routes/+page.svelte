<script>
    import { _ } from 'svelte-i18n';
    import { getTranslation } from '$lib/directus';

    export let data;
</script>

<svelte:head>
    <title>{$_('common.title')}</title>
    <meta name="description" content={$_('common.description')} />
</svelte:head>

<h1>{data.me.name}</h1>
<div>{getTranslation(data.meTranslations).slogan}.</div>