<template>
  <div class="showbook">
    <h1>Best Book recommended</h1>
    <v-container grid-list-md>
      <v-row justify="center">
        <v-col
          height="420px"
          width="180px"
          v-for="(data, index) in csDoc"
          :key="index"
        >
          <v-card class="mx-auto" max-width="344">
            <v-hover>
              <v-img
                :src="data.data.linkfile"
                max-height="250px"
                contain
              ></v-img>
            </v-hover>

            <v-card-title> {{ data.data.data.title }} </v-card-title>

            <v-card-subtitle>
              Author: {{ data.data.data.author }}
              <br />
              Language: {{ data.data.data.language }}
              <br />
            </v-card-subtitle>
            <v-expansion-panels hover>
              <v-expansion-panel>
                <v-expansion-panel-header>More info</v-expansion-panel-header>
                <v-expansion-panel-content>
                  Country: {{ data.data.data.country }}
                  <br />
                  Pages: {{ data.data.data.pages }} Year:
                  {{ data.data.data.year }}
                  <br />
                  <a :href="data.data.data.link" target="_blank">
                    More infomation in Wiki :
                  </a>
                  <!-- <a href=""+{{data.data.data.link}}+""></a>-->
                  <!-- More infomation in Wiki :  -->
                  <!-- {{ data.data.data.link }} -->
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../plugins/firebaseInit";

export default {
  mounted() {
    this.readData();
  },
  components: {},
  data() {
    return {
      show: false,
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
