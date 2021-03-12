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
              {employment.institution}
            </Tile>
          </a>
        </Column>
      {/each}
    </Row>
  </Grid>
</Section>
