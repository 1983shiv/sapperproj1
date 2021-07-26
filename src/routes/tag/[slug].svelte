<script context="module">
  // const apiUrl = process.env.SAPPER_APP_API_URL;
  import { urls } from "../../../wp-settings.js";

  export async function preload({ params, query }) {
    const res = await this.fetch(`${urls.POST}/?tag=${params.slug}`);
    const data = await res.json();

    return {
      posts: data,
      title: params.slug,
    };
  }
</script>

<script>
  import PostsList from "../../components/PostList.svelte";
  import { paginate, LightPaginationNav } from "svelte-paginate";

  export let posts;
  export let title;
  $: items = posts.posts;
  let currentPage = 1;
  let pageSize = urls.POSTPERPAGE;
  $: paginatedItems = paginate({ items, pageSize, currentPage });
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<h2>Tags : {title}</h2>
<PostsList {paginatedItems} />

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
