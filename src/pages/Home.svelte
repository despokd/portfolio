<script>
  import { Grid, Row, Column } from "carbon-components-svelte";

  import Hero from "../sections/hero.svelte";
  import Skills from "../sections/skills.svelte";
  import CV from "../sections/cv.svelte";
  import AboutMe from "../sections/aboutMe.svelte";
  import Projects from "../sections/projects.svelte";
  import Footer from "../sections/footer.svelte";
  import Credits from "../components/credits.svelte";
</script>

<Hero />
<Skills />
<Grid style="padding: 0;">
  <Row>
    <Column sm={4} md={5}><CV /></Column>
    <Column><AboutMe /></Column>
  </Row>
</Grid>
<Projects />
<Footer />
<Credits />
