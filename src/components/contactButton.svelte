<script>
  import data from "../data.json";
  import { Button } from "carbon-components-svelte";
  import Email20 from "carbon-icons-svelte/lib/Email20";

  export let small = false;

  let size = null;
  if (small) size = "small";
</script>

<Button class="cta" {size} href="mailto:{data.contact.email}" icon={Email20}
  >Contact me</Button
>
