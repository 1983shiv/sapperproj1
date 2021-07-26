<script context="module">
  // const apiUrl = process.env.SAPPER_APP_API_URL;
  import { urls } from "../../../wp-settings.js";

  export async function preload({ params, query }) {
    console.log("p", query.s);
    const res = await this.fetch(`${urls.POST}/?search=${query.s}`);
    const data = await res.json();

    const catres = await this.fetch(urls.CATEGORIES);
    const catmenu = await catres.json();

    return {
      posts: data,
      title: query.s,
      catmenu
    };
  }
</script>

<script>
  import Grid from "../../components/Grid.svelte";
  import { paginate, LightPaginationNav } from "svelte-paginate";
  import TitleHero from "../../components/TitleHero.svelte";
  import Sidebar from "../../components/Sidebar.svelte";
  import SvelteSeo from "svelte-seo";

  export let posts;
  export let title;
  export let catmenu;
  $: items = posts.posts;
  let currentPage = 1;
  let pageSize = urls.POSTPERPAGE;
  $: paginatedItems = paginate({ items, pageSize, currentPage });
</script>

<SvelteSeo
  title="searching for {title}"
  description="searching for {title}"
  openGraph={{
    title: "searching for {title}",
    description: "searching for {title}",
    url: `${urls.POST}/search/?=${title}`,
    type: "website",
  }}
/>
<TitleHero title1="You have searched for" title2={title} />

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

