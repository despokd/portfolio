<script>
  import data from "../data.json";
  import { _ } from "svelte-i18n";
  import {
    Header,
    HeaderNav,
    HeaderNavItem,
    HeaderUtilities,
    HeaderAction,
    HeaderGlobalAction,
    SideNav,
    SideNavItems,
    SideNavLink,
    SkipToContent,
  } from "carbon-components-svelte";
  import Translate20 from "carbon-icons-svelte/lib/Translate20";
  import Printer20 from "carbon-icons-svelte/lib/Printer20";
  import LocaleSwitcher from "../components/localSwitcher.svelte";

  let isSideNavOpen = false;
  let isOpen = false;

  $: nav = [
    { title: $_("skills.title"), path: "/#skills" },
    { title: $_("cv.title"), path: "/#cv" },
    { title: $_("aboutMe.title"), path: "/#aboutMe" },
    { title: $_("projects.title"), path: "/#projects" },
  ];
</script>

<Header
  persistentHamburgerMenu={true}
  company={data.short_name}
  platformName={$_("app.title")}
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
    <HeaderGlobalAction
      icon={Printer20}
      aria-label="Print"
      on:click={() => window.print()}
    />
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
