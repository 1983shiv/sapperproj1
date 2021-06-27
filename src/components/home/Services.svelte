<script>
  import { services } from "../../services";
  import Heading from "../common/Heading.svelte";
</script>

<section id="services" class="text-gray-600 body-font">
  <div class="pt-24 mx-auto">
    <div
      class="flex flex-wrap sm:w-full mb-4 flex-col items-center text-center"
    >
      <Heading
        text="Ninja Services"
        size="text-4xl sm:text-5xl md:text-6xl"
        heading="font-heading1 text-center mb-8"
        color="text-pink-500"
      />

      <p
        class="lg:w-1/2 sm:w-full p-4 leading-relaxed text-gray-500 text-justify"
      >
        We offer tailor made solutions for all size companies and SMEs and
        StartUps. We prioritize your feedback to make sure that each and every
        specification is according to your requirements. With our long and
        successful career, We know what it takes to bring your business to next
        level. If you need a web professional who can give you the attention and
        focus to your project deserves, you’ve come to the right place.
      </p>
    </div>
  </div>
</section>

<section class="text-gray-600 body-font">
  <div class="px-5 py-2 mb-8 mx-auto ">
    <div
      class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 text-center"
    >
      {#each services as { title, svg, desc }}
        <div class="xl:w-1/3 md:w-1/2 p-4 min-h-48">
          <div class="shadow p-6 rounded-lg">
            <div
              class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4"
            >
              {@html svg}
            </div>
            <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
              {title}
            </h2>
            <p class="leading-relaxed text-justify">
              {desc}
            </p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  #services {
    clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
    padding-bottom: 100px;
  }
</style>
