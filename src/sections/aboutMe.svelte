<script>
  import data from "../data.json";
  import { _ } from "svelte-i18n";
  import { localString } from "../services/i18n";
  import { Tile, Grid, Row, Column } from "carbon-components-svelte";
  import Section from "../components/section.svelte";
</script>

<Section id="aboutMe" title={$_("aboutMe.title")}>
  <Grid>
    <Row>
      <Column sm={4} class="about">
        {data.aboutMe.text[$localString]}
      </Column>
    </Row>
    <Row>
      {#each data.aboutMe.attributes as attr}
        <Column sm={4} md={8} lg={8} class="about">
          <Tile>{attr[$localString]}</Tile>
        </Column>
      {/each}
    </Row>
    <Row style="margin-top: var(--cds-spacing-06);">
      <Column sm={4} class="about">
        <h3>{$_("aboutMe.interests")}</h3>
      </Column>
      {#each data.aboutMe.hobbys as hobby}
        <Column sm={4} md={8} lg={8} class="about">
          <Tile>{hobby[$localString]}</Tile>
        </Column>
      {/each}
    </Row>
  </Grid>
</Section>
