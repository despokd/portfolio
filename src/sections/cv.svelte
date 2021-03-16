<script>
  import data from "../data.json";
  import { _ } from "svelte-i18n";
  import { Grid, Row } from "carbon-components-svelte";
  import Section from "../components/section.svelte";
  import Employment from "../components/employment.svelte";

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

<Section id="cv" title={$_("cv.title")}>
  <Grid>
    <Row>
      {#each orderedCv as employment}
        <Employment {employment} />
      {/each}
    </Row>
  </Grid>
</Section>
