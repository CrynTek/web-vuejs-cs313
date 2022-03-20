<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <ShowSlideVue />
    <br />
    <!-- <BookSlideVue /> -->
    <br />
    <!-- <UploadDataVue /> -->
    <ShowBooksVue />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import ShowSlideVue from "../components/layout/ShowSlide.vue";
// import BookSlideVue from "../components/layout/BookSlide.vue";
import ShowBooksVue from "@/components/layout/ShowBooks.vue";
// import UploadDataVue from "../components/UploadData.vue";
export default {
  name: "Home",
  components: {
    HelloWorld,
    ShowSlideVue,
    // BookSlideVue,
    ShowBooksVue,
    // UploadDataVue,
  },
};
</script>
