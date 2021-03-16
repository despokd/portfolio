<script>
  import { Grid, Row, Column } from "carbon-components-svelte";

  export let id = "";
  export let title = "";
</script>

<section {id} style="margin: var(--cds-spacing-04) 0;">
  {#if title}
    <Grid>
      <Row>
        <Column><h2>{title}</h2></Column>
      </Row>
    </Grid>
  {/if}
  <slot />
</section>

<style>
  h2 {
    margin-bottom: var(--cds-spacing-04);
  }

  /* avoid overlapping header by scroll to anchor */
  :target::before {
    content: "";
    display: block;
    height: 60px; /* fixed header height*/
    margin: -60px 0 0; /* negative fixed header height */
  }
</style>
