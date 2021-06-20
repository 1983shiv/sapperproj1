<script>
  import SvelteSeo from "svelte-seo";
  import Portfoliogaller from "../components/portfolio/Portfoliogaller.svelte";
</script>

<SvelteSeo
  title="Portfolio"
  description="Please check our latest projects and technology we work with."
  openGraph={{
    title: "Portfolio",
    description:
      "Please check our latest projects and technology we work with.",
    url: "https://www.webdesign-ninjas.com/case-studies",
    type: "website",
  }}
/>

<section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap m-12">
      <Portfoliogaller />
    </div>
  </div>
</section>
