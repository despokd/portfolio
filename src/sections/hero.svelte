<script>
  import data from "../data.json";
  import { Grid, Row, Column } from "carbon-components-svelte";
  import Section from "../components/section.svelte";
  import Socials from "../components/socials.svelte";
</script>

<Section id="hero">
  <Grid>
    <Row>
      <Column class="align-center" padding md={6} lg={10}>
        <h1>{data.name}</h1>
        <h2 class="slogan">{data.slogan}</h2>
        <p class="description">
          <small>
            {data.about}
          </small>
        </p>
        <Socials cta />
      </Column>
      <Column sm={0} md={2} lg={{ span: 4, offset: 2 }}>
        <img
          class="portrait img-responsive"
          src="img/portrait.jpg"
          alt={data.name}
        />
      </Column>
    </Row>
  </Grid>
</Section>
