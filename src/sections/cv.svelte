<script>
  import data from "../data.json";
  import { _ } from "svelte-i18n";
  import { localString } from "../services/i18n";
  import { Grid, Row, Column, Button } from "carbon-components-svelte";
  import Printer16 from "carbon-icons-svelte/lib/Printer16";
  import Section from "../components/section.svelte";
  import Employment from "../components/employment.svelte";

  let orderedByDate = data.cv;
  orderedByDate.sort((a, b) =>
    new Date(a.from) < new Date(b.from)
      ? 1
      : new Date(a.from) === new Date(b.from)
      ? a.institution > b.institution
        ? 1
        : -1
      : -1
  );

  /* 
    order by category
    add employments without category to default
  */
  let orderedByCategory = {
    default: {},
    ...data.cvCategories,
  };
  Object.entries(orderedByCategory).forEach((cat) => {
    cat[1].employments = [];
  });
  Object.entries(orderedByDate).forEach((employment) => {
    let val = employment[1];
    let category = val.category ? val.category : "default";
    orderedByCategory[category].employments.push(val);
  });
  console.log(orderedByCategory);
</script>

<Section id="cv" title={$_("cv.title")}>
  <Grid>
    <Row>
      {#each Object.entries(orderedByCategory) as category, key}
        {#if category[0] !== "default"}
          <Column sm={4}>
            <h3 class={"name-" + key}>
              {category[1].name[$localString]
                ? category[1].name[$localString]
                : ""}
            </h3>
          </Column>
        {/if}
        {#each category[1].employments as employment}
          <Employment {employment} />
        {/each}
      {/each}
    </Row>
  </Grid>
</Section>

<style>
  h3 {
    margin-top: var(--cds-spacing-06);
    margin-bottom: var(--cds-spacing-04);
  }
  .name-1 {
    margin-top: 0;
  }
</style>
