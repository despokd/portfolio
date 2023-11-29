<script>
    import { _ } from 'svelte-i18n';
    import { getTranslation } from '$lib/directus';

    export let me;
</script>

<section>
    <h2>{$_('pages.home.section.about')}</h2>
    {@html getTranslation(me.translations).description}
</section>