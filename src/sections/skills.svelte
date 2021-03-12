<script>
  import data from "../data.json";
  import { Tile, Grid, Row, Column } from "carbon-components-svelte";
  import Section from "../components/section.svelte";

  let orderedSkills = data.skills;
  orderedSkills.sort((a, b) =>
    a.percent < b.percent
      ? 1
      : a.percent === b.percent
      ? a.desc > b.desc
        ? 1
        : -1
      : -1
  );
</script>

<Section id="skills" title="Skills">
  <Grid condensed style="margin: var(--cds-spacing-03) var(--cds-spacing-05);">
    <Row>
      {#each orderedSkills as skill}
        <Column sm={2} md={2} lg={4} xlg={2} max={2} class="skill">
          <a href={skill.url} target="_blank">
            <Tile light={skill.percent > 50}>
              <label>
                {skill.name}
                <progress max="100" value={skill.percent} />
              </label>
            </Tile>
          </a>
        </Column>
      {/each}
    </Row>
  </Grid>
</Section>
