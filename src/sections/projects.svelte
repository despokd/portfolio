<script>
  import data from "../data.json";
  import { _ } from "svelte-i18n";
  import {
    Grid,
    Row,
    Column,
    SkeletonPlaceholder,
    Tile,
  } from "carbon-components-svelte";
  import Axios from "axios";
  import Section from "../components/section.svelte";

  // get projects from RSS
  $: feed = {
    title: data.projectsFeed,
    href: data.projectsFeed,
    icon: {
      src: "",
      alt: "Source of projects",
    },
  };

  $: items = [];
  let isLoading = true;
  let isError = false;

  Axios.get(data.projectsFeed, {
    responseType: "document",
  })
    .then((response) => {
      // success
      // format data
      let xmlFeed = response.data.children[0].children[0];
      getFeed(xmlFeed);
      [...xmlFeed.getElementsByTagName("item")].forEach((xmlItem) => {
        items.push(getItem(xmlItem));
      });
    })
    .catch((err) => {
      // error
      console.error(err);
      isError = true;
    })
    .then(() => {
      // always executed
      isLoading = false;
    });

  /**
   * Set feed properties from RSS XML
   * @param xmlFeed
   */
  function getFeed(xmlFeed) {
    feed.title = xmlFeed.getElementsByTagName("title")[0].textContent;
    feed.href = xmlFeed.getElementsByTagName("link")[0].textContent;
    feed.icon.src = xmlFeed
      .getElementsByTagName("image")[0]
      .getElementsByTagName("url")[0].textContent;
    feed.icon.alt = xmlFeed
      .getElementsByTagName("image")[0]
      .getElementsByTagName("title")[0].textContent;
  }

  /**
   * Convert XML RSS item to JS object
   * @param xmlItem
   */
  function getItem(xmlItem) {
    let item = {
      title: "",
      description: "",
      url: "",
      tags: [],
      date: null,
    };

    item.title = xmlItem.getElementsByTagName("title")[0].textContent;
    item.url = xmlItem.getElementsByTagName("link")[0].textContent;
    item.description = xmlItem.getElementsByTagName(
      "description"
    )[0].textContent;
    [...xmlItem.getElementsByTagName("category")].forEach((elem) => {
      item.tags.push(elem.textContent);
    });
    item.date = new Date(
      xmlItem.getElementsByTagName("pubDate")[0].textContent
    );

    return item;
  }
</script>

<Section id="projects" title={$_("projects.title")}>
  <Grid>
    <Row>
      <Column
        sm={4}
        style="margin-top: -0.6rem; margin-bottom: var(--cds-spacing-04);"
      >
        {$_("projects.posted_on")}
        <a href={feed.href} target="_blank">
          {#if feed.icon.src}<img
              class="favicon"
              src={feed.icon.src}
              alt={feed.icon.alt}
            />&nbsp;{/if}
          {feed.title}</a
        >
      </Column>
      {#if isLoading}
        <Column sm={4} md={4} lg={4} class="project">
          <SkeletonPlaceholder style="width: 100%;" />
        </Column>
        <Column sm={4} md={4} lg={4} class="project">
          <SkeletonPlaceholder style="width: 100%;" />
        </Column>
        <Column sm={4} md={4} lg={4} class="project">
          <SkeletonPlaceholder style="width: 100%;" />
        </Column>
        <Column sm={4} md={4} lg={4} class="project">
          <SkeletonPlaceholder style="width: 100%;" />
        </Column>
      {:else if isError}
        <Column>{$_("projects.error")}</Column>
      {:else if items.length == 0}
        <Column>{$_("projects.coming_soon")}</Column>
      {:else}
        {#each items as item}
          <Column sm={4} md={4} lg={4} class="project">
            <a href={item.url} target="_blank">
              <Tile style="height: 100%;">
                <article>
                  <header>
                    <h3>{item.title}</h3>
                  </header>
                  <section>
                    <p>{item.description}</p>
                  </section>
                  <footer>
                    <p>
                      {#if item.date}
                        <time datetime={item.date.toISOString()} class="tag">
                          {item.date.toLocaleDateString()}
                        </time>
                      {/if}
                      {#each item.tags as tag, index}
                        {#if index > 0} ,{/if}<span class="tag">{tag}</span>
                      {/each}
                    </p>
                  </footer>
                </article>
              </Tile>
            </a>
          </Column>
        {/each}
      {/if}
    </Row>
  </Grid>
</Section>

<style>
  a {
    text-decoration: none;
  }
  h3 {
    font-size: var(--cds-productive-heading-03-font-size);
    text-decoration: underline;
    text-decoration-color: var(--cds-inverse-link);
  }

  p {
    padding: 0;
  }
  h3,
  section p {
    margin-bottom: var(--cds-spacing-01);
  }

  .favicon {
    max-height: var(--cds-icon-size-02);
    max-width: var(--cds-icon-size-02);
    margin-bottom: -0.3rem;
  }

  .tag {
    color: var(--cds-text-02);
    font-size: var(--cds-body-short-01-font-size);
    margin: var(--cds-spacing-01);
    word-break: break-all;

    text-decoration: none;
  }
</style>
