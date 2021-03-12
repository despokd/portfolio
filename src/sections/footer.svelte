<script>
  import data from "../data.json";
  import { Grid, Row, Column } from "carbon-components-svelte";
  import Socials from "../components/socials.svelte";
  import Imprint from "../components/imprint.svelte";
</script>

<footer style="padding-top: var(--cds-spacing-04);">
  <Grid>
    <Row>
      <Column>
        <Socials cta small />
      </Column>
      <Column style="text-align: right">
        <Imprint />
      </Column>
    </Row>
  </Grid>
</footer>
