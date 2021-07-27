<script context="module">
  import { urls } from "../../../wp-settings.js";
  

  export async function preload({ params, query }) {
    const res = await this.fetch(`${urls.POST}slug:${params.slug}`);
    const data = await res.json();

    const catres = await this.fetch(urls.CATEGORIES);
    const catmenu = await catres.json();

    let authorUrl = 'https://en.gravatar.com/' + data.author.nice_name + '.json';

    const author = await this.fetch(authorUrl);
    const authordata = await author.json();

    return {post: data, author: authordata, catmenu };
  }
</script>

<script>
  
  export let post;
  export let author;
  export let catmenu;
  import Bio from "./../../components/Bio.svelte"
  import Sidebar from "../../components/Sidebar.svelte";
  import TitleHero from "../../components/TitleHero.svelte";
  import SvelteSeo from "svelte-seo";
  import './wp.css';
</script>

<SvelteSeo
  title={post.title}
  description={post.excerpt}
  openGraph={{
    title: post.title,
    description: post.excerpt,
    url: `https://www.webdesign-ninjas.com/${post.slug}`,
    type: "website",
  }}
/>

{#if !post}
<section id="articles"
  class="flex flex-wrap mx-2 overflow-hidden my-4 sm:mx-2 md:mx-4 lg:mx-4 xl:mx-4"
>
  <div>Loading...</div>
  </section>
{/if}
  

<TitleHero title1={post.title} blogdate={post.date}/>
<section id="articles"
  class="flex flex-wrap mx-2 overflow-hidden my-4 sm:mx-2 md:mx-4 lg:mx-4 xl:mx-4"
>

<div
class="lg:px-8 px-6 flex flex-wrap justify-center my-1 w-full overflow-hidden sm:my-2 sm:px-2 sm:w-full md:my-2 md:px-2 md:w-2/3 lg:my-2 lg:w-2/3 xl:my-2 xl:px-2 xl:w-2/3"
>
<div class="content">
  {@html post.content}
 
</div>
<Bio {author}/>
</div>
<div
    class="container my-8 px-6 w-full overflow-hidden sm:my-8 sm:px-8 sm:w-full md:my-2 md:px-2 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:my-2 xl:px-2 xl:w-1/3"
  >
    <Sidebar {catmenu} />
  </div>
</section>