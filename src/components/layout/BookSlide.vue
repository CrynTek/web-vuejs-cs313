<template>
  <v-sheet class="mx-auto" elevation="8" max-width="800" max-height="500">
    <h1></h1>
    <v-slide-group v-model="model" class="pa-4" show-arrows>
      <v-slide-item
        v-for="(data, index) in csDoc"
        :key="index"
        v-slot="{ active, toggle }"
      >
        <v-card
          :color="active ? '#C3E5AE' : 'white'"
          class="ma-4"
          height="180"
          width="100"
          @click="toggle"
        >
          <v-row class="fill-height" align="center" justify="center">
            <v-scale-transition>
              <v-img
                :src="data.data.linkfile"
                max-height="150px"
                contain
              ></v-img>
              <v-icon
                v-if="active"
                color="white"
                size="48"
                v-text="'mdi-close-circle-outline'"
              ></v-icon>
            </v-scale-transition>
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>

    <v-expand-transition>
      <v-sheet v-if="model != null" height="200" tile>
        <v-row class="fill-height" align="center" justify="center">
          <h3 class="text-h6">Selected {{ model + 1 }}</h3>
          <h3 class="text-h6">Name: {{ model + 1 }}</h3>
        </v-row>
      </v-sheet>
    </v-expand-transition>
  </v-sheet>
</template>
<script>
// import Show from "../components/ShowPage.vue";
// import { ref, getDownloadURL } from "firebase/storage";
// import { storage } from "../plugin/index.js";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../plugins/firebaseInit";

// import { onSnapshot, getDocs } from "firebase/firestore";
export default {
  mounted() {
    this.readData();
  },
  components: {},
  data() {
    return {
      model: null,
      csDoc: [],
    };
  },
  methods: {
    async readData() {
      console.log(1111);
      const querySnapshot = await getDocs(collection(db, "BookInfo"));
      querySnapshot.forEach((doc) => {
        // console.log(doc);
        this.csDoc.push({ id: doc.id, data: doc.data() });
        // console.log(2);
      });
    },
  },
};
</script>
