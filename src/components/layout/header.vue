<template>
  <v-app>
    <v-app-bar app color="#64C4ED" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>
      <v-btn> <Router-link to="/">Home</Router-link></v-btn>
      <v-btn> <Router-link to="/about">About</Router-link> </v-btn>
      <v-btn> <Router-link to="/login">Login/Register</Router-link> </v-btn>
      <!-- <v-btn> <Router-link to="/showpage">show</Router-link> </v-btn> -->
    </v-app-bar>

    <v-main>
      <router-view />
      <h2>hwfheo</h2>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "header",
};
</script>

<style></style>
