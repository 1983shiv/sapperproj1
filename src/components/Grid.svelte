<script>
  import { urls } from "../../wp-settings.js";
  import Card from "./Card.svelte";
  export let paginatedItems;
</script>

{#if urls.gridCol === 1}
  <div
    class="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-full xl:my-1 xl:px-1 xl:w-full"
  >
    {#each paginatedItems as item, i}
      <div
        class="my-1 px-1 w-1/2 overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2"
      >
        <Card
          title={item.title}
          date={item.date}
          slug={item.slug}
          imgsrc={item.featured_image}
          cats={item.categories}
        />
      </div>
    {/each}
  </div>
{/if}

{#if urls.gridCol === 2}
  <div
    class="flex flex-wrap -mx-1 overflow-hidden sm:-mx-1 md:-mx-1 lg:-mx-1 xl:-mx-1"
  >
    {#each paginatedItems as item, i}
      <div
        class="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2"
      >
        <Card
          title={item.title}
          date={item.date}
          slug={item.slug}
          imgsrc={item.featured_image}
          cats={item.categories}
        />
      </div>
    {/each}
  </div>
{/if}

{#if urls.gridCol === 3}
  <div
    class="flex flex-wrap -mx-1 overflow-hidden sm:-mx-1 md:-mx-1 lg:-mx-1 xl:-mx-1"
  >
    {#each paginatedItems as item, i}
      <div
        class="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/3 xl:my-1 xl:px-1 xl:w-1/3"
      >
        <Card
          title={item.title}
          date={item.date}
          slug={item.slug}
          imgsrc={item.featured_image}
          cats={item.categories}
        />
      </div>
    {/each}
  </div>
{/if}

{#if urls.gridCol === 4}
  <div
    class="flex flex-wrap -mx-1 overflow-hidden sm:-mx-1 md:-mx-1 lg:-mx-1 xl:-mx-1"
  >
    {#each paginatedItems as item, i}
      <div
        class="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/4 xl:my-1 xl:px-1 xl:w-1/4"
      >
        <Card
          title={item.title}
          date={item.date}
          slug={item.slug}
          imgsrc={item.featured_image}
          cats={item.categories}
        />
      </div>
    {/each}
  </div>
{/if}
