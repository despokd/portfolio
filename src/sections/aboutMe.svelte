<script>
  import data from "../data.json";
  import { _ } from "svelte-i18n";
  import { localString } from "../services/i18n";
  import { Tile, Grid, Row, Column } from "carbon-components-svelte";
  import Section from "../components/section.svelte";

  let isMobile = window.innerWidth <= 671;
  $: about = data.about[$localString] ? data.about[$localString] : "";
  $: about_short = data.about_short[$localString]
    ? data.about_short[$localString]
    : "";
</script>

<Section id="aboutMe" title={$_("aboutMe.title")}>
  <Grid>
    <Row>
      <Column sm={4} class="about">
        <p>{isMobile ? about : about_short}</p>
      </Column>
    </Row>
    <Row>
      <Column sm={4} class="about">
        <h3>{$_("aboutMe.attributes")}</h3>
      </Column>
      {#each data.aboutMe.attributes as attr}
        <Column sm={4} md={8} lg={8} class="about">
          <Tile>{attr[$localString]}</Tile>
        </Column>
      {/each}
    </Row>
    <Row style="margin-top: var(--cds-spacing-06);">
      <Column sm={4} class="about">
        <h3>{$_("aboutMe.languages")}</h3>
      </Column>
      {#each data.aboutMe.languages as lang}
        <Column sm={4} md={8} lg={8} class="about">
          <Tile>{lang.name[$localString]} - {lang.level}</Tile>
        </Column>
      {/each}
    </Row>
    <Row style="margin-top: var(--cds-spacing-06);">
      <Column sm={4} class="about">
        <h3>{$_("aboutMe.interests")}</h3>
      </Column>
      {#each data.aboutMe.hobbies as hobby}
        <Column sm={4} md={8} lg={8} class="about">
          <Tile>{hobby[$localString]}</Tile>
        </Column>
      {/each}
    </Row>
  </Grid>
</Section>
