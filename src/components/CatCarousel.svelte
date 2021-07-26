<script>
  import Carousel from "@beyonk/svelte-carousel";
  import { ChevronLeftIcon, ChevronRightIcon } from "svelte-feather-icons";
  import Card from "./Card.svelte";
  export let paginatedItems;
  export let title1;
  export let title2;

  function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
  }

  // console.log(
  //   "categori",
  //   getKeyByValue(paginatedItems[0].categories, "health")
  // );
  // $: innerWidth = 0;
  // let noslides = innerWidth > 700 ? 3 : 1;
</script>

<!-- <svelte:window bind:innerWidth /> -->

<div
  class="lg:px-6 px-6 py-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-50"
>
  <h1
    class="mt-4 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-2xl md:text-2xl mb-8 border-b-4 border-gray-800"
  >
    <span class="inline italic">{title1}</span>
    <span class="inline text-gray-600 ">{title2}</span>
  </h1>
</div>
<!-- 
<Carousel autoplay={30000} perPage={4}>
  <span class="control" slot="left-control">
    <ChevronLeftIcon />
  </span>
  {#each paginatedItems as item, i}
    <div class="slide-content mx-2">
      
      <Card
        title={item.title}
        date={item.date}
        left={i % 2 === 0}
        eventID={item.ID}
        excerpt={item.excerpt}
        slug={item.slug}
        imgsrc={item.featured_image}
        cats={item.categories}
      />
      
    </div>
  {/each}
  <span class="control" slot="right-control">
    <ChevronRightIcon />
  </span>
</Carousel> -->
