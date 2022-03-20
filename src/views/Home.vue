<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <ShowSlideVue />
    <br />
    <br />
    <ShowBooksVue />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import ShowSlideVue from "../components/layout/ShowSlide.vue";
import ShowBooksVue from "@/components/layout/ShowBooks.vue";
export default {
  name: "Home",
  components: {
    HelloWorld,
    ShowSlideVue,
    ShowBooksVue,
  },
};
</script>
