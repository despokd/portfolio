<script>
    import { _ } from 'svelte-i18n';

    export let description;
</script>

<section>
    <h2>{$_('pages.home.section.about')}</h2>
    {@html description}
</section>