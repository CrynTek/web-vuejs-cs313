<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Show></Show>
  </div>
</template>
<script>
import Show from "../components/ShowPage.vue";

export default {
  name: "Home",

  components: {
    Show,
  },
};
</script>
