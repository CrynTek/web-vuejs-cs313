<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Show></Show>
  </div>
</template>
<script>
import Show from "../components/ShowPage.vue";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../plugins/firebaseInit";

export default {
  name: "Home",
  mounted() {
    this.readData();
  },
  components: {
    Show,
  },
  data() {
    return {
      profiledata: [],
    };
  },
  methods: {
    async readData() {
      console.log(1111);
      const querySnapshot = await getDocs(collection(db, "BookInfo"));
      querySnapshot.forEach((doc) => {
        // console.log(doc);
        this.profiledata.push({ id: doc.id, data: doc.data() });
        // console.log(2);
      });
    },
  },
};
</script>
