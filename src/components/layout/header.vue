<template>
  <v-app>
    <v-app-bar app color="#64C4ED" dark>
      <!-- class="d-flex align-center align-content-center" -->
      <div class="d-flex align-center align-content-center">
        <Router-link to="/"><h1>Git recommed</h1></Router-link>
      </div>

      <v-spacer></v-spacer>
      <ul class="flex-1-1-auto d-flex align-center justify-end">
        <li class="mr-2">
          <v-hover>
            <v-btn color="warning">
              <Router-link to="/">Home</Router-link>
            </v-btn>
          </v-hover>
        </li>
        <li class="mr-2">
          <v-hover>
            <v-btn color="warning">
              <Router-link to="/test">About</Router-link>
            </v-btn>
          </v-hover>
        </li>
        <li class="mr-2">
          <v-hover>
            <v-btn color="warning">
              <Router-link to="/login">Login</Router-link>
            </v-btn>
          </v-hover>
        </li>
        <!-- <li class="mr-2">
          <v-hover>
            <v-btn color="warning">
              <Router-link to="/test">Test</Router-link>
            </v-btn>
          </v-hover>
        </li> -->
      </ul>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
li {
  font-family: "Courier New", Courier, monospace;
}
</style>
