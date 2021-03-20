<script>
  import data from "./data.json";
  import { setupI18n, isLocaleLoaded } from "./services/i18n";
  import { Loading, Grid, Row, Column } from "carbon-components-svelte";
  import Header from "./sections/header.svelte";
  import Hero from "./sections/hero.svelte";
  import Skills from "./sections/skills.svelte";
  import CV from "./sections/cv.svelte";
  import AboutMe from "./sections/aboutMe.svelte";
  import Projects from "./sections/projects.svelte";
  import Footer from "./sections/footer.svelte";
  import Credits from "./components/credits.svelte";

  // set language
  $: if (!$isLocaleLoaded) setupI18n();

  /** @type {"white" | "g10" | "g90" | "g100"} */
  let theme;
  $: document.documentElement.setAttribute("theme", theme);

  /**
   * Sets theme color based on user preferences
   */
  function setTheme() {
    theme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "g100"
      : "white";
  }

  // set theme on mode change
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      setTheme();
    });

  // init theme
  setTheme();

  // setup web manifest
  var dynamicManifest = {
    name: data.name,
    short_name: data.short_name,
    description: "Portfolio of " + data.name,
    start_url: window.location.origin,
    scope: window.location.origin,
    icons: [
      {
        src: "icon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "icon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
  const stringManifest = JSON.stringify(dynamicManifest);
  const blob = new Blob([stringManifest], { type: "application/json" });
  const manifestURL = URL.createObjectURL(blob);
  document.querySelector("#webmanifest").setAttribute("href", manifestURL);
</script>

<svelte:head>
  <title>{data.name}</title>
  <meta name="author" content={data.name} />
  <meta name="description" content="Portfolio page for {data.name}" />

  <meta property="og:title" content={data.name} />
  <meta property="og:description" content="Portfolio page for {data.name}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={window.location.href} />
  <meta property="og:image" content="img/social.jpg" />

  <meta name="twitter:card" content="summary" />
  <meta name="twitter:creator" content={data.name} />
  <meta name="twitter:title" content={data.name} />
  <meta name="twitter:description" content="Portfolio page for {data.name}" />
  <meta name="twitter:image" content="img/social.jpg" />
</svelte:head>

{#if $isLocaleLoaded}
  <Header />
  <main>
    <Hero />
    <Skills />
    <Grid style="padding: 0;">
      <Row>
        <Column><AboutMe /></Column>
        <Column sm={4} md={5}><CV /></Column>
      </Row>
    </Grid>
    <Projects />
    <Footer />
    <Credits />
  </main>
{:else}
  <main><Loading /></main>
{/if}

<style>
  main {
    padding-top: var(--cds-spacing-10);
  }
</style>
