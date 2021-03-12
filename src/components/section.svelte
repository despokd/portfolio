<script>
  import { Grid, Row, Column } from "carbon-components-svelte";

  export let id = "";
  export let title = "";
</script>

<section {id} style="padding: var(--cds-spacing-04) 0;">
  {#if title}
    <Grid>
      <Row>
        <Column><h2>{title}</h2></Column>
      </Row>
    </Grid>
  {/if}
  <slot />
</section>
