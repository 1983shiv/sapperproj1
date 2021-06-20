<script>
  import SvelteSeo from "svelte-seo";
  import Bloglayout from "../components/Bloglayout.svelte";
  import Bloghero from "../components/Bloghero.svelte";
</script>

<SvelteSeo
  title="Blog"
  description="Ninja articles, technology overview and usage, how-tos"
  openGraph={{
    title: "Blog",
    description: "Ninja articles, technology overview and usage, how-tos",
    url: "https://www.webdesign-ninjas.com/blog",
    type: "website",
  }}
/>

<Bloghero title1="Latest" title2="Articles..." />

<Bloglayout />
