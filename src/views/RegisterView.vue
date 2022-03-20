<template>
  <div>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Register form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Username"
                    type="text"
                    v-model="form.username"
                    placeholder="Enter Username"
                    required
                  ></v-text-field>
                  <v-text-field
                    label="Email"
                    type="email"
                    v-model="form.email"
                    required
                  ></v-text-field>
                  <v-text-field
                    id="password"
                    label="Password"
                    type="password"
                    v-model="form.password"
                    required
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="login()">Sign In</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../plugins/firebaseInit";
export default {
  data() {
    return {
      form: {
        username: "",
        email: "",
        password: "",
      },
    };
  },
  create() {
    //  const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.$router.push("/");
      }
    });
  },
  methods: {
    onSubmit(event) {
      event.preventDefult();
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then(async (userCredential) => {
          // Signed in
          await updateProfile(userCredential, { displayName: this.form.name });
          this.$router.push("/home").catch(() => {});
        })

        .catch((error) => {
          alert(error.message);
        });
    },
  },
};
</script>

<style></style>
