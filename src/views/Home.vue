<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod illo velit
      quos minima commodi excepturi dolorem numquam esse amet molestiae impedit
      exercitationem, reiciendis fugiat magnam ea est repellat unde non.
    </h1>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
