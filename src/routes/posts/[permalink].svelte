<script context="module">
  import { findPost } from "@/posts";

  export function preload(page) {
    return { post: findPost(page.params.permalink) };
  }
</script>

<script>
  import SvelteSeo from "svelte-seo";
  import highlight from "@/highlight";
  import Tags from "@/components/Tags.svelte";
  export let post;
  import Heading from "../../components/common/Heading.svelte";
  import moment from "moment";
  import Sidebar from "../../components/Sidebar.svelte";
</script>

<!-- <svelte:head>
  <title>{post.title}</title>
</svelte:head> -->

<SvelteSeo
  title={post.title}
  description={post.summery ? post.summery : ""}
  openGraph={{
    title: post.title,
    description: post.summery ? post.summery : "",
    url: `/posts/${post.permalink}`,
    type: "website",
    images: [
      {
        url: post.image ? post.image : "",
        width: 850,
        height: 650,
        alt: post.title,
      },
    ],
  }}
/>

<section
  class="flex flex-wrap my-6 mx-2 overflow-hidden sm:mx-2 md:mx-2 lg:mx-2 xl:mx-2"
>
  <div
    class="lg:px-16 px-6 flex flex-wrap justify-center my-1 w-full overflow-hidden sm:my-2 sm:px-2 sm:w-full md:my-2 md:px-2 md:w-2/3 lg:my-2 lg:w-2/3 xl:my-2 xl:px-2 xl:w-2/3"
  >
    <div
      class="flex flex-wrap w-full border-1 border-pink-500 hover:shadow-lg py-12 px-36 mb-20 flex-col"
    >
      <Heading
        text={post.title}
        size="text-2xl sm:text-4xl md:text-4xl"
        heading="font-heading1 text-center mb-8"
        color="text-pink-500"
      />

      <img src={post.image} alt={post.title} width="800px" height="auto" />

      <div use:highlight>
        {@html post.html}
      </div>

      <div class="my-8 p-8 bg-gray-50">
        <div class="inline-block">Stacks : <Tags tags={post.tags} /></div>
        <div class="block">
          Posted at : {post.date
            ? moment(post.date).format("Do MMMM YYYY")
            : ""}
        </div>
      </div>
    </div>
  </div>
  <div
    class="container my-8 px-6 w-full overflow-hidden sm:my-8 sm:px-8 sm:w-full md:my-2 md:px-2 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:my-2 xl:px-2 xl:w-1/3"
  >
    <Sidebar />
  </div>
</section>
