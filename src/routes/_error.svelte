<script>
  export let status
  export let error
  import SvelteSeo from "svelte-seo";
  const dev = process.env.NODE_ENV === 'development'
</script>

<style>
  h1, p {
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  p {
    margin: 1em auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<SvelteSeo
  title={status}
  description="somethign went wrong...."
  openGraph={{
    title: status,
    description: "somethign went wrong....",
    url: `https://www.webdesign-ninjas.com/`,
    type: "website",
  }}
/>

<section id="articles"
  class="flex flex-wrap mx-2 overflow-hidden my-4 sm:mx-2 md:mx-4 lg:mx-4 xl:mx-4"
>
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">{status}</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">{error.message}</p>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Please go back to home</p>
      <a href="." class="p-2 w-full">
          <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Home</button>
      </a>
    </div>
    {#if dev && error.stack}
      <pre>{error.stack}</pre>
    {/if}
  </div>
</section>