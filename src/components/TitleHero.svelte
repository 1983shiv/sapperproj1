<script>
  export let title1 = '';
  export let title2 = '';
  export let blogdate = null;
  import moment from "moment";
</script>

<div
  class="lg:px-6 px-6 py-8 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-50 mx-auto text-center "
>
  <h1
    class="mt-4 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-2xl md:text-2xl mb-8"
  >
    <span class="block inline italic">{title1}</span>
    <span class="block text-gray-600 inline">{title2}</span>
  </h1>
  {#if blogdate}
    <p class="text-md text-gray-900">
      Posted at : {blogdate ? moment(blogdate).format("Do MMMM YYYY") : ""}
    </p>
    <!-- <p class="text-md text-gray-900">Author By : Ninja Team</p> -->
  {/if}
</div>
