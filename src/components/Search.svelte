<script>
    // Menu Source: https://github.com/justalever/tailwind-navbar/blob/master/public/index.html
    import { goto } from "@sapper/app";
  
    let searchTerm = "";
  
    const handleSubmit = () => {
      // there should be some parsing before putting it in the url, but it's not the subject
      goto(`/search?s=${searchTerm}`);
      searchTerm = "";
    };
  
</script>

<div class="relative flex w-full flex-wrap items-stretch mb-0">
    <form on:submit|preventDefault={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        bind:value={searchTerm}
        class="h-8 px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10"
      />

      <span
        class="searchbtn"
      >
        <svg
          class="h-4 w-4 text-pink-500"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <circle cx="10" cy="10" r="7" />
          <line x1="21" y1="21" x2="15" y2="15" /></svg
        >
      </span>
    </form>
  </div>

  <style>
      .searchbtn{ 
        float: right;
        margin-top: 8px !important;
        position: absolute;
        margin-left: -30px;
      }
  </style>