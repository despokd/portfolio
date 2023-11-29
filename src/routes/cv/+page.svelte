<script>
	import { _ } from 'svelte-i18n';
	import SectionCVPreview from '$lib/components/section-cv-preview.svelte';

	export let data;
</script>

<svelte:head>
	<title>{$_('pages.cv.title')}</title>
	<meta name="description" content={$_('pages.cv.description')} />
</svelte:head>


<h1>{$_('pages.cv.title')}</h1>
<p>{$_('pages.cv.description')}</p>

<SectionCVPreview experiences={data.experiences} />
