<script>
  import data from "../data.json";
  import ContactButton from "./contactButton.svelte";
  import Social from "./social.svelte";

  export let cta = false;
  export let small = false;
</script>

<div class="socials">
  {#if cta}
    <ContactButton {small} />
  {/if}

  {#each data.contact.socials as social}
    <Social {social} {small} />
  {/each}
</div>
