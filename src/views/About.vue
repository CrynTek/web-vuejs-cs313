<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Show></Show>
    <!-- <v-btn color="success" @click="readData()">text</v-btn>
     {{ profiledata }} -->
    <!-- <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Calories</th>
            <th class="text-left">Calories</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in profiledata" :key="item">
            <td>{{ item.data.data.language }}</td>
            <td>{{ item.data.data.country }}</td>
            <td>{{ item.data.data.year }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table> -->
  </div>
</template>
<script>
import Show from "../components/ShowPage.vue";
// import { ref, getDownloadURL } from "firebase/storage";
// import { storage } from "../plugin/index.js";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../plugins/firebaseInit";

// import { onSnapshot, getDocs } from "firebase/firestore";
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
