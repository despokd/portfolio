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
  <div class="skills-wrapper">
    <Grid condensed>
      <Row>
        {#each orderedSkills as skill}
          <Column sm={2} md={2} lg={4} xlg={2} max={2} class="skill">
            <a href={skill.url} target="_blank">
              <Tile light={skill.percent <= 50}>
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
  </div>
</Section>

<style>
  .skills-wrapper {
    padding: 0 1rem;
  }
  progress,
  progress::-moz-progress-bar,
  progress::-webkit-progress-bar,
  progress::-webkit-progress-value {
    border: 0;
    border-radius: 0;
    margin-bottom: 1px;
  }
  progress {
    background-color: var(--cds-ui-04);
    width: 100%;
  }
  progress::-moz-progress-bar {
    background-color: var(--cds-interactive-01);
  }
  progress::-webkit-progress-bar {
    background-color: var(--cds-ui-04);
  }
  progress::-webkit-progress-value {
    background-color: var(--cds-interactive-01);
  }
  label progress {
    margin-top: var(--cds-spacing-03);
  }
</style>
