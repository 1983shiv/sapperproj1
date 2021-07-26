<script context="module">
  // const apiUrl = process.env.SAPPER_APP_API_URL;
  import { urls } from "../../../wp-settings.js";

  export async function preload({ params, query }) {
    const res = await this.fetch(`${urls.POST}/?category=${params.slug}`);
    const data = await res.json();

    const catres = await this.fetch(urls.CATEGORIES);
    const catmenu = await catres.json();

    return {
      posts: data,
      title: params.slug,
      catmenu
    };
  }
</script>

<script>
  import TitleHero from "../../components/TitleHero.svelte";
  import { paginate, LightPaginationNav } from "svelte-paginate";
  import Grid from "../../components/Grid.svelte";
  import Sidebar from "../../components/Sidebar.svelte";
  import SvelteSeo from "svelte-seo";

  export let posts;
  export let catmenu;
  export let title;
  $: items = posts.posts;
  let currentPage = 1;
  let pageSize = urls.POSTPERPAGE;
  $: paginatedItems = paginate({ items, pageSize, currentPage });

  // Convert API date to human readable
  const convertDate = (date) => {
    // Add your time zone to get accurate date
    let timezone = "PST";
    let nd = new Date(`${date} ${timezone}`);

    let prettyDate = nd.toLocaleDateString("en-EN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    return prettyDate;
  };
</script>

<SvelteSeo
  title={title}
  description="{title} | articles, technology overview and usage, how-tos"
  openGraph={{
    title: title,
    description: "{title} | articles, technology overview and usage, how-tos",
    url: "https://www.webdesign-ninjas.com/category/{title}",
    type: "website",
  }}
/>

<TitleHero title1="Articles from #" title2={title} />

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

<!-- <PostsList {paginatedItems} {currentPage} /> -->

<!-- {#each paginatedItems as item, i}
  <Timeline
    title={item.title}
    date={item.date}
    left={i % 2 === 0}
    eventID={item.ID}
    slug={item.slug}
    imgsrc={item.featured_image}
  />
{/each}

<div class="m-8">
  <LightPaginationNav
    totalItems={items.length}
    {pageSize}
    {currentPage}
    limit={1}
    showStepOptions={true}
    on:setPage={(e) => (currentPage = e.detail.page)}
  />
</div> -->
