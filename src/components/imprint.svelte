<script>
  import data from "../data.json";
  import { _ } from "svelte-i18n";
  import { Button, Modal } from "carbon-components-svelte";
  import { localString } from "../services/i18n";

  let open = false;
</script>

<Button size="small" kind="tertiary" on:click={() => (open = true)}>
  {$_("imprint.title")}
</Button>

<Modal
  passiveModal
  bind:open
  modalHeading={$_("imprint.title")}
  on:open
  on:close
>
  {#if $localString == "de"}
    <h2>Angaben gemäß &sect; 5 deutsches Telemediengesetz</h2>
    <p>{data.name}<br />Privatperson</p>
    <h3>Kontakt</h3>
    <dl>
      <dt>E-Mail:</dt>
      <dd>{data.contact.email}</dd>
    </dl>
    <h3>Haftung für Inhalte</h3>
    <p>
      Als Diensteanbieter bin ich gemäß &sect; 7 Abs.1 German Telemedia Act für
      eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
      verantwortlich. Nach &sect;&sect; 8 bis 10 German Telemedia Act bin ich
      als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
      gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
      forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
    </p>
    <p>
      Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen
      nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine
      diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer
      konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
      Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
    </p>
    <h3>Haftung für Links</h3>
    <p>
      Mein Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte
      ich keinen Einfluss haben. Deshalb kann ich für diese fremden Inhalte auch
      keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets
      der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die
      verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche
      Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
      Verlinkung nicht erkennbar.
    </p>
    <p>
      Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch
      ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
      Bekanntwerden von Rechtsverletzungen werde ich derartige Links umgehend
      entfernen.
    </p>
    <h3>Urheberrecht</h3>
    <p>
      Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen
      Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
      Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen
      des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen
      Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den
      privaten, nicht kommerziellen Gebrauch gestattet.
    </p>
    <p>
      Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden,
      werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
      Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
      Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
      entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden
      wir derartige Inhalte umgehend entfernen.
    </p>
  {:else}
    <h2>Information according to &sect; 5 German Telemedia Act</h2>
    <p>{data.name}<br />Private individual</p>
    <h3>Contact</h3>
    <dl>
      <dt>E-mail:</dt>
      <dd>{data.contact.email}</dd>
    </dl>
    <h3>Liability for contents</h3>
    <p>
      As a service provider I am according to &sect; 7 Abs.1 German Telemedia
      Act for own contents for own contents on these pages according to the
      general laws. According to &sect; 8 to 10 German Telemedia Act, however, I
      am not obliged as a service provider to to monitor transmitted or stored
      information from third parties or to investigate or to investigate
      circumstances that indicate illegal activity. activity.
    </p>
    <p>
      Obligations to remove or block the use of information according to the
      general laws remain unaffected. A liability in this regard, however, is
      only possible from the time of knowledge of a concrete infringement
      possible. If we become aware of corresponding infringements infringements,
      we will remove this content immediately.
    </p>
    <h3>Liability for links</h3>
    <p>
      My offer contains links to external websites of third parties, on the
      contents of which I have no influence. Therefore I can for these foreign
      contents also take over no guarantee. For the content of the linked pages
      is always the the respective provider or operator of the pages. The linked
      pages were checked at the time of linking for possible legal legal
      violations at the time of linking. Illegal contents were not recognizable
      at the time of not recognizable at the time of linking.
    </p>
    <p>
      A permanent control of the contents of the linked pages is, however not
      reasonable without concrete evidence of a violation of the law. With of
      infringements become known, I will remove such links immediately. remove.
    </p>
    <h3>Copyright</h3>
    <p>
      The contents and works on these pages created by the site operator are
      pages are subject to German copyright law. The duplication, processing,
      distribution and any kind of exploitation outside the limits of copyright
      copyright require the written consent of the respective author or creator.
      author or creator. Downloads and copies of this site are only permitted
      for private, non-commercial use only.
    </p>
    <p>
      As far as the contents on this page were not created by the operator, the
      copyrights of third parties are respected. In particular, contents of
      third parties are marked as such. Should you nevertheless become aware of
      a copyright infringement, please inform us accordingly. appropriate
      notice. If we become aware of any infringements, we will remove the
      relevant we will remove such content immediately.
    </p>
  {/if}
</Modal>
