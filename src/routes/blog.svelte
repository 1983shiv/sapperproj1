<script context="module">
  import { urls } from "../../wp-settings.js";

  export async function preload({ params, query }) {
    const res = await this.fetch(urls.POST);
    const posts = await res.json();

    const catres = await this.fetch(urls.CATEGORIES);
    const catmenu = await catres.json();

    return {
      posts: posts.posts,
      catmenu,
    };
  }
</script>

<script>
  import Grid from "../components/Grid.svelte";
  import Sidebar from "../components/Sidebar.svelte";
  import CatSlider from "../components/CatSlider.svelte";
  import { paginate, LightPaginationNav } from "svelte-paginate";
  import SvelteSeo from "svelte-seo";
  export let posts;
  export let catmenu;


  $: items = posts;
  let currentPage = 1;
  let pageSize = urls.POSTPERPAGE;
  let sliderPosts = [];
  if(posts.length > 3){
    sliderPosts = posts.slice(0,3);
  } else {
    sliderPosts = posts;
  }
  $: paginatedItems = paginate({ items, pageSize, currentPage });
  
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

<CatSlider {sliderPosts} />
<!-- <Bloglayout {paginatedItems} />  -->
<section
  class="flex flex-wrap mx-2 overflow-hidden sm:mx-2 md:mx-4 lg:mx-4 xl:mx-4"
>
<div
class="lg:px-8 px-6 flex flex-wrap justify-center my-1 w-full overflow-hidden sm:my-2 sm:px-2 sm:w-full md:my-2 md:px-2 md:w-2/3 lg:my-2 lg:w-2/3 xl:my-2 xl:px-2 xl:w-2/3"
>
<Grid {paginatedItems} />
<div class="flex mx-auto">
  {#if items.length > urls.POSTPERPAGE }
    <div class="m-8">
      <LightPaginationNav
        totalItems={items.length}
        {pageSize}
        {currentPage}
        limit={1}
        showStepOptions={true}
        on:setPage={(e) => (currentPage = e.detail.page)}
      />
    </div>
  {/if}
</div>
</div>
<div
    class="container my-8 px-6 w-full overflow-hidden sm:my-8 sm:px-8 sm:w-full md:my-2 md:px-2 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:my-2 xl:px-2 xl:w-1/3"
  >
    <Sidebar {catmenu}/>
  </div>
</section>

<!-- <script>
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

<Bloglayout /> -->
