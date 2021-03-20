<script>
  import data from "../data.json";
  import { _ } from "svelte-i18n";
  import {
    Header,
    HeaderNav,
    HeaderNavItem,
    HeaderUtilities,
    HeaderAction,
    SideNav,
    SideNavItems,
    SideNavLink,
    SkipToContent,
  } from "carbon-components-svelte";
  import Translate20 from "carbon-icons-svelte/lib/Translate20";
  import LocaleSwitcher from "../components/localSwitcher.svelte";

  let isSideNavOpen = false;
  let isOpen = false;

  $: nav = [
    { title: $_("skills.title"), path: "#skills" },
    { title: $_("aboutMe.title"), path: "#aboutMe" },
    { title: $_("cv.title"), path: "#cv" },
    { title: $_("projects.title"), path: "#projects" },
  ];
</script>

<Header
  persistentHamburgerMenu={true}
  company={$_("app.title")}
  platformName={data.name}
  bind:isSideNavOpen
>
  <div slot="skip-to-content">
    <SkipToContent />
  </div>

  <HeaderNav>
    {#each nav as navItem}
      <HeaderNavItem href={navItem.path} text={navItem.title} />
    {/each}
  </HeaderNav>
  <HeaderUtilities>
    <HeaderAction icon={Translate20} bind:isOpen aria-label="Language">
      <LocaleSwitcher />
    </HeaderAction>
  </HeaderUtilities>
</Header>

<SideNav bind:isOpen={isSideNavOpen}>
  <SideNavItems>
    {#each nav as navItem}
      <SideNavLink href={navItem.path} text={navItem.title} />
    {/each}
  </SideNavItems>
</SideNav>
