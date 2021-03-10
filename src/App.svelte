<script>
  import { Button } from "carbon-components-svelte";

  export let name;

  /** @type {"white" | "g10" | "g90" | "g100"} */
  let theme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "g90"
    : "white";

  $: document.documentElement.setAttribute("theme", theme);
</script>

<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
  <Button>Primary button</Button>
</main>
