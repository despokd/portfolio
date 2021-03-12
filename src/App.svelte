<script>
  import Hero from "./sections/hero.svelte";
  import Skills from "./sections/skills.svelte";
  import CV from "./sections/cv.svelte";
  import Footer from "./sections/footer.svelte";

  /** @type {"white" | "g10" | "g90" | "g100"} */
  let theme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "g100"
    : "white";
  $: document.documentElement.setAttribute("theme", theme);
</script>

<main style="padding-top: var(--cds-spacing-10);">
  <Hero />
  <Skills />
  <CV />
  <Footer />
</main>
