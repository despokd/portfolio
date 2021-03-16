<script>
  import data from "../data.json";
  import { _ } from "svelte-i18n";
  import { localString } from "../services/i18n";
  import { Grid, Row, Column } from "carbon-components-svelte";
  import Section from "../components/section.svelte";
  import Socials from "../components/socials.svelte";

  $: about = data.about[$localString] ? data.about[$localString] : "";
</script>

<Section id={$_("hero.title")}>
  <Grid>
    <Row>
      <Column class="align-center" padding md={6} lg={10}>
        <h1>{data.name}</h1>
        <h2 class="slogan">{data.slogan}</h2>
        <p class="description">{about}</p>
        <Socials cta />
      </Column>
      <Column sm={0} md={2} lg={{ span: 4, offset: 2 }}>
        <img
          class="portrait img-responsive"
          src="img/portrait.jpg"
          alt={data.name}
        />
      </Column>
    </Row>
  </Grid>
</Section>

<style>
  .portrait {
    transition: transform 0.5s ease-in;
  }
  .portrait:hover {
    transform: rotateY(180deg);
  }

  .slogan {
    margin-bottom: var(--cds-spacing-04);
  }

  .description {
    margin-bottom: var(--cds-spacing-02);
  }
</style>
