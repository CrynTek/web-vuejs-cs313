<template>
  <div>
    <h1>Test Login</h1>
    <!-- <li v-if="login">
      <Routerlink to="/login">login</Routerlink>
    </li> -->
    <h1>{{ uemail }}</h1>
    <h1>{{ uid }}</h1>
  </div>
</template>

<script>
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../plugins/firebaseInit";
export default {
  mounted() {
    this.checkLogin();
  },
  data() {
    return {
      uemail: "",
      uid: "",
      login: true,
    };
  },
  methods: {
    checkLogin() {
      // const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          console.log(uid);
          // ...แสดง user:email,uid ในหน้าจอ
          this.uemail = user.email;
          this.uid = user.uid;
          this.login = false;
        } else {
          // User is signed out
          // ...กรณีlogin ไม่ได้ให้เปลี่ยนไปหน้า login
          // alert("Please Login First");
          this.$router.push("/login");
        }
      });
    },
  },
};
</script>

<style></style>
