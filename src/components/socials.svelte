<script>
  import data from "../data.json";
  import ContactButton from "./contactButton.svelte";
  import Social from "./social.svelte";

  export let cta = false;
  export let small = false;
</script>

{#if !small}
  <small class="show-on-print">
    <ul class="print-contact">
      <li><a href={"mailto:" + data.contact.email}>{data.contact.email}</a></li>
      <li>- <a href={window.location.href}>{window.location.origin}</a></li>
      {#each data.contact.socials as social}
        <li>- <a href={social.url}>{social.name}</a></li>
      {/each}
    </ul>
  </small>
{/if}

<div class="socials">
  {#if cta}
    <ContactButton {small} />
  {/if}

  {#each data.contact.socials as social}
    <Social {social} {small} />
  {/each}
</div>
