<script context="module">
  import { findByTag } from "@/posts";

  export function preload(page) {
    const { tag } = page.params;
    const posts = findByTag(tag);

    return { tag, posts };
  }
</script>

<script>
  import Sidebar from "../../components/Sidebar.svelte";
  import Bloghero from "../../components/Bloghero.svelte";
  import PostList from "../../components/blog/PostList.svelte";
  import { paginate, LightPaginationNav } from "svelte-paginate";
  export let posts;
  export let tag;

  let items = posts;
  let currentPage = 1;
  let pageSize = 6;
  $: paginatedItems = paginate({ items, pageSize, currentPage });
</script>

<Bloghero title1={tag} title2="Articles..." />
<section
  class="flex flex-wrap mx-2 overflow-hidden sm:mx-2 md:mx-2 lg:mx-2 xl:mx-2"
>
  <div
    class="lg:px-16 px-6 flex flex-wrap justify-center my-1 w-full overflow-hidden sm:my-2 sm:px-2 sm:w-full md:my-2 md:px-2 md:w-2/3 lg:my-2 lg:w-2/3 xl:my-2 xl:px-2 xl:w-2/3"
  >
    <PostList posts={paginatedItems} />
    {#if paginatedItems.pageSize > 6}
      <div class="my-8">
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
  <div
    class="container my-6 px-6 w-full overflow-hidden sm:my-8 sm:px-8 sm:w-full md:my-2 md:px-2 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:my-2 xl:px-2 xl:w-1/3"
  >
    <Sidebar />
  </div>
</section>
