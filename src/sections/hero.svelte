<script>
  import data from "../data.json";
  import { _ } from "svelte-i18n";
  import { localString } from "../services/i18n";
  import { Grid, Row, Column } from "carbon-components-svelte";
  import Section from "../components/section.svelte";
  import Socials from "../components/socials.svelte";

  let isMobile = window.innerWidth <= 671;
  $: about = data.about[$localString] ? data.about[$localString] : "";
  $: about_short = data.about_short[$localString]
    ? data.about_short[$localString]
    : "";
</script>

<Section id={$_("hero.title")}>
  <Grid>
    <Row>
      <Column sm={4} md={0}>
        <img class="portrait" src="img/profile.jpg" alt={data.name} />
      </Column>
      <Column class="align-center" padding md={6} lg={10}>
        <h1>{data.name}</h1>
        <h2 class="slogan">{data.slogan}</h2>
        <p class="description">{isMobile ? about_short : about}</p>
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
    max-width: 128px;
  }

  .slogan {
    margin-bottom: var(--cds-spacing-04);
  }

  .description {
    margin-bottom: var(--cds-spacing-02);
  }

  @media (max-width: 671px) {
    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.85rem;
    }
  }
</style>
