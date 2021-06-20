<!-- <script context="module" ✂prettier:content✂="CiAgLy8gaW1wb3J0IHsgZmluZEJ5VGFnIH0gZnJvbSAiQC9wb3N0cyI7CiAgaW1wb3J0IHsgcG9zdHMgfSBmcm9tICJAL3Bvc3RzLmpzIjsKCiAgZXhwb3J0IGZ1bmN0aW9uIHByZWxvYWQocGFnZSkgewogICAgLy8gY29uc3QgeyB0YWcgfSA9IHBhZ2UucGFyYW1zOwogICAgLy8gY29uc3QgcG9zdHMgPSBmaW5kQnlUYWcodGFnKTsKCiAgICBsZXQgdGFncyA9IHBvc3RzLm1hcCgocG9zdCkgPT4gcG9zdC50YWdzKTsKICAgIGNvbnNvbGUubG9nKCJ0YWdzICIsIHRhZ3MpOwoKICAgIHJldHVybiB7IHRhZ3MgfTsKICB9Cg==" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=">{}</script> -->
<script>
  import Tags from "./Tags.svelte";
  import { findAllTag } from "@/posts.js";
</script>

<div class="m-4 p-8 shadow flex flex-wrap">
  <h2
    class="bg-pink-500 text-white rounded p-2 text-xl text-bold shadow w-full mb-4"
  >
    Stack
  </h2>

  <Tags tags={findAllTag()} />
</div>

<div class="m-4 p-8 shadow">
  <div class="contact-form">
    <h2
      class="bg-pink-500 text-white rounded p-2 text-xl text-bold shadow w-full mb-4"
    >
      Contact Us
    </h2>
    <p class="leading-relaxed mb-5 text-gray-600">
      Send your query below and one of ninja will get in touch asap./
    </p>
    <div class="relative mb-4">
      <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
    </div>
    <div class="relative mb-4">
      <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
    </div>
    <div class="relative mb-4">
      <label for="message" class="leading-7 text-sm text-gray-600"
        >Message</label
      >
      <textarea
        id="message"
        name="message"
        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
      />
    </div>
    <button
      class="text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >Let's Talk</button
    >
    <p class="text-xs text-gray-500 mt-3">
      Or You can Skype at <a href="skype:srivastava.shiv">srivasava.shiv</a>
    </p>
  </div>
</div>
