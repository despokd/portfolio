<script>
  import data from "../data.json";
  import { _ } from "svelte-i18n";
  import { Grid, Row, Column } from "carbon-components-svelte";
  import LogoGithub16 from "carbon-icons-svelte/lib/LogoGithub16";

  let creator = "Kilian Domaratius";
</script>

<Grid>
  <Row>
    <Column style="margin-bottom: var(--cds-spacing-04);">
      {#if creator !== data.name}
        <p>{$_("credits.customized_by")} {data.name}</p>
      {/if}
      <p>
        {$_("credits.build_by")}
        <LogoGithub16 style="margin-bottom: -0.2rem;" />
        <a href="https://github.com/despokd" target="_blank">{creator}</a>
      </p>
    </Column>
  </Row>
</Grid>

<style>
  p {
    font-size: var(--cds-body-short-01);
    padding-bottom: var(--cds-spacing-01);
    text-align: right;
  }
</style>
