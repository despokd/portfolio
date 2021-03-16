<script>
  import { setupI18n, isLocaleLoaded } from "./services/i18n";
  import Header from "./sections/header.svelte";
  import Hero from "./sections/hero.svelte";
  import Skills from "./sections/skills.svelte";
  import CV from "./sections/cv.svelte";
  import Projects from "./sections/projects.svelte";
  import Footer from "./sections/footer.svelte";

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
</script>

{#if $isLocaleLoaded}
  <Header />
  <main>
    <Hero />
    <Skills />
    <CV />
    <Projects />
    <Footer />
  </main>
{:else}
  <main><p>Loading...</p></main>
{/if}

<style>
  main {
    padding-top: var(--cds-spacing-10);
  }
</style>
