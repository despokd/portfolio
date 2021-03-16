<script>
  import { Grid, Row, Column } from "carbon-components-svelte";
  import Socials from "../components/socials.svelte";
  import Imprint from "../components/imprint.svelte";

  let isMobile = window.innerWidth <= 671;
</script>

<footer>
  <Grid>
    <Row>
      <Column sm={4} md={6}>
        <Socials cta small />
      </Column>
      <Column class={!isMobile ? "text-right" : ""}>
        <Imprint />
      </Column>
    </Row>
  </Grid>
</footer>

<style>
  footer {
    padding: var(--cds-spacing-04) 0;
  }
</style>
