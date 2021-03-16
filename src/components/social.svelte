<script>
  import { Button } from "carbon-components-svelte";
  import Link20 from "carbon-icons-svelte/lib/Link20";
  import LogoXing20 from "carbon-icons-svelte/lib/LogoXing20";
  import LogoLinkedin20 from "carbon-icons-svelte/lib/LogoLinkedIn20";
  import LogoGithub20 from "carbon-icons-svelte/lib/LogoGithub20";

  export let social = "custom";
  export let small = false;

  let size = null;
  if (small) size = "small";

  let desc = social.type;
  let icon = Link20;

  switch (social.type) {
    case "xing":
      desc = "Xing";
      icon = LogoXing20;
      break;
    case "linkedIn":
      desc = "LinkedIn";
      icon = LogoLinkedin20;
      break;
    case "github":
      desc = "Github";
      icon = LogoGithub20;
      break;
    case "stackOverflow":
      desc = "Stack Overflow";
      break;
    case "reddit":
      desc = "Reddit";
      break;
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
