<script>
  import { localString, setupI18n } from "../services/i18n";
  import {
    Form,
    FormGroup,
    RadioButtonGroup,
    RadioButton,
  } from "carbon-components-svelte";

  let value = $localString;

  // TODO improve this, by move this to i18n and bind to locals
  let langs = [
    { title: "English", value: "en" },
    { title: "Deutsch", value: "de" },
  ];

  function switchLocale(event) {
    event.preventDefault();
    setupI18n({ withLocale: event.detail });
  }
</script>

<Form style="padding: var(--cds-spacing-04);">
  <FormGroup legendText="Select language">
    <RadioButtonGroup
      on:change={switchLocale}
      orientation="vertical"
      name="select-language"
      bind:selected={value}
    >
      {#each langs as lang}
        <RadioButton labelText={lang.title} value={lang.value} />
      {/each}
    </RadioButtonGroup>
  </FormGroup>
</Form>
