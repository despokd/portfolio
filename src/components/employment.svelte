<script>
  import { Tile, Column } from "carbon-components-svelte";
  import { localString } from "../services/i18n";
  import dateFormat from "dateformat";

  export let employment;

  $: title = employment.title[$localString]
    ? employment.title[$localString]
    : "";
  $: description =
    employment.description && employment.description[$localString]
      ? employment.description[$localString]
      : "";

  let dateFormated = "mm/yyyy";
  let dateFrom = new Date(employment.from);
  let dateTo = !isNaN(Date.parse(employment.to))
    ? new Date(employment.to)
    : employment.to;
  let isActive = dateTo === "now" || dateTo === "" || dateTo >= new Date();
  let isHightlight = isActive || employment.isHighlight;
</script>

<Column sm={4} class="employment">
  <a href={employment.url} target="_blank">
    <Tile light={!isHightlight}>
      <p class="institution">{employment.institution}</p>
      <p class="title">{title}</p>
      {#if description}
        <p class="description">{description}</p>
      {/if}
      <p class="employed">
        {dateFrom instanceof Date
          ? dateFormat(dateFrom, dateFormated)
          : dateFrom}
        {#if dateFormat(dateFrom, dateFormated) !== dateFormat(dateTo, dateFormated)}
          -
          <span class:text-highlight={isActive}>
            {#if dateTo instanceof Date}
              {dateFormat(dateTo, dateFormated)}
            {:else}
              {dateTo === "now" || dateTo == "" ? "Now" : dateTo}
            {/if}
          </span>
        {/if}
      </p>
    </Tile>
  </a>
</Column>

<style>
  a {
    text-decoration: none;
  }
  p {
    padding: 0;
  }

  .institution {
    text-decoration: underline;
    -webkit-text-decoration-color: var(--cds-inverse-link);
    text-decoration-color: var(--cds-inverse-link);
  }
  .institution,
  .title,
  .description {
    margin-bottom: var(--cds-spacing-01);
  }
  .institution,
  .employed,
  .description {
    color: var(--cds-text-02);
    font-size: var(--cds-body-short-01-font-size);
  }
  .title {
    font-size: var(--cds-body-short-02-font-size);
  }

  .title,
  .employed {
    text-decoration: 0 solid transparent;
  }

  .text-highlight {
    color: var(--cds-interactive-01);
  }
</style>
