<script>
  export let tags;
</script>

<nav
  class="flex flex-wrap flex-row  sm:items-start sm:text-left text-center items-center -mb-1"
>
  {#each tags as tag}
    <a
      href={`/tag/${tag}`}
      title={tag}
      class="p-2 hover:p-4 hover:translate-x-2 hover:bg-gray-50">#{tag}</a
    >
  {/each}
</nav>
