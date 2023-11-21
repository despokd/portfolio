<script>
    import { getTranslation } from '$lib/directus';
    import Socials from '$lib/components/socials.svelte';

    export let me, links;
</script>

<section>
	<div class="main">
		<h1>{me.name}</h1>
		<p>{getTranslation(me.translations).slogan}.</p>
	</div>
	<div class="socials">
		<Socials links={links} />
	</div>
	<picture>
		<source srcset={me.image_portrait} media="(min-width: 600px)" />
		<img src={me.image} alt={me.name} />
	</picture>
</section>

<style lang="scss">
	section {
		display: grid;
		grid-template-columns: 1fr 3fr;
		column-gap: 5%;
        row-gap: 10%;
		margin-block: 5%;

		.main {
			grid-column: 2 / 3;
			font-size: 1.5em;
			display: flex;
			flex-direction: column;
			justify-content: center;
			gap: 0.25em;

			> * {
				margin-top: 0;
				margin-bottom: 0;
				line-height: 2.5rem;
			}
		}

		.socials {
			grid-column: 1 / -1;
			grid-row: 2;
			margin-bottom: auto;
		}

		picture {
			grid-column: 1 / 2;
			grid-row: 1;

			img {
				width: 100%;
				height: auto;
				object-fit: contain;
			}
		}

		@media (min-width: 600px) {
			grid-template-columns: 2fr 1fr;

			.main {
				margin-top: auto;
				grid-column: 1 / 2;
				font-size: clamp(1.5em, 3vw, 5em);

				> * {
					line-height: initial;
				}
			}

			.socials {
				grid-column: 1 / 2;
				grid-row: 2;
			}

			picture {
				grid-column: 2 / 3;
				grid-row: 1 / 3;
			}
		}
	}
</style>
