<script>
  import { Button } from "carbon-components-svelte";
  import Link20 from "carbon-icons-svelte/lib/Link20";
  import LogoXing20 from "carbon-icons-svelte/lib/LogoXing20";
  import LogoLinkedin20 from "carbon-icons-svelte/lib/LogoLinkedIn20";
  import LogoGithub20 from "carbon-icons-svelte/lib/LogoGithub20";
  import Fork20 from "carbon-icons-svelte/lib/Fork20";

  export let social = "custom";
  export let small = false;

  let size = small ? "small" : null;
  let desc = social.name;
  let icon;

  switch (social.name) {
    case "Xing":
      icon = LogoXing20;
      break;
    case "LinkedIn":
      icon = LogoLinkedin20;
      break;
    case "GitHub":
      icon = LogoGithub20;
      break;
    case "GitLab":
      icon = Fork20;
      break;
    default:
      icon = Link20;
  }
</script>

<Button
  href={social.url}
  target="_blank"
  kind="tertiary"
  {size}
  {icon}
  iconDescription={desc}
/>
