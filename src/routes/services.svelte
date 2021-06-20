<script>
  import SvelteSeo from "svelte-seo";
  import Services from "../components/home/Services.svelte";
  import Contact from "../components/Contact.svelte";
</script>

<SvelteSeo
  title="What we do"
  description="We prioritize your feedback to make sure that each and every specification is according to your requirements. If you need a web professional who can give you the attention and focus to your project deserves, you’ve come to the right place."
  openGraph={{
    title: "What we do",
    description:
      "We prioritize your feedback to make sure that each and every specification is according to your requirements. If you need a web professional who can give you the attention and focus to your project deserves, you’ve come to the right place.",
    url: "https://www.webdesign-ninjas.com/services",
    type: "website",
  }}
/>

<Services />
<Contact contactbg="bg-gradient-to-r from-gray-100 via-gray-50 to-gray-0" />
