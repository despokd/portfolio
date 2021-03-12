<script>
  import data from "../data.json";
  import { Tile, Grid, Row, Column } from "carbon-components-svelte";
  import Section from "../components/section.svelte";

  let orderedCv = data.cv;
  orderedCv.sort((a, b) =>
    new Date(a.from) < new Date(b.from)
      ? 1
      : new Date(a.from) === new Date(b.from)
      ? a.institution > b.institution
        ? 1
        : -1
      : -1
  );
</script>

<Section id="cv" title="CV">
  <Grid>
    <Row>
      {#each orderedCv as employment}
        <Column sm={4} class="employment">
          <a href={employment.url} target="_blank">
            <Tile>
              <p class="institution">{employment.institution}</p>
              <p class="title">{employment.title}</p>
              <p class="employed">{employment.from} - {employment.to}</p>
            </Tile>
          </a>
        </Column>
      {/each}
    </Row>
  </Grid>
</Section>

<style>
  p {
    padding: 0;
  }
  .institution,
  .title {
    margin-bottom: var(--cds-spacing-01);
  }
  .institution,
  .employed {
    color: var(--cds-text-02);
    font-size: var(--cds-body-short-01-font-size);
  }
  .title {
    font-size: var(--cds-body-short-02-font-size);
  }
</style>
