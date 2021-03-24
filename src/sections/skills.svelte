<script>
  import data from "../data.json";
  import { _ } from "svelte-i18n";
  import { localString } from "../services/i18n";
  import { Tile, Grid, Row, Column } from "carbon-components-svelte";
  import Section from "../components/section.svelte";

  let orderedByValue = data.skills;
  orderedByValue.sort((a, b) =>
    a.percent < b.percent
      ? 1
      : a.percent === b.percent
      ? a.desc > b.desc
        ? 1
        : -1
      : -1
  );

  /* 
    order by category
    add skills without category to 'other'
  */
  let orderedByCategory = {
    ...data.skillsCategories,
    other: {},
  };
  Object.entries(orderedByCategory).forEach((cat) => {
    cat[1].skills = [];
  });
  Object.entries(orderedByValue).forEach((skill) => {
    let val = skill[1];
    let category = val.category ? val.category : "other";
    orderedByCategory[category].skills.push(val);
  });
  console.log(orderedByCategory);
</script>

<Section id="skills" title={$_("skills.title")}>
  <div class="skills-wrapper">
    <Grid condensed>
      {#each Object.entries(orderedByCategory) as category, key}
        <Row>
          <Column sm={4}>
            {#if category[0] !== "other"}
              <h3 class={"name-" + key}>
                {category[1].name[$localString]
                  ? category[1].name[$localString]
                  : ""}
              </h3>
            {:else if category[0] === "other" && key !== 0}
              <h3 class={"name-" + key}>
                {$_("skills.other")}
              </h3>
            {/if}
          </Column>
          {#each category[1].skills as skill}
            <Column
              sm={2}
              md={4}
              lg={2}
              xlg={2}
              max={2}
              class={skill.percent <= 40 ? "skill hide-on-print" : "skill"}
            >
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
      {/each}
    </Grid>
  </div>
</Section>

<style>
  h3 {
    margin-top: var(--cds-spacing-06);
    margin-bottom: var(--cds-spacing-04);
  }
  .name-0 {
    margin-top: 0;
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

  label {
    cursor: pointer;
  }
  label progress {
    margin-top: var(--cds-spacing-03);
  }
</style>
