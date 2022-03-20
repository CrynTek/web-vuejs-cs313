<template>
  <div class="mt-2">
    <div class="container-lg shadow p-3 mb-5 bg-body rounded ms-2">
      <!-- <div class="d-grid gap-2 d-md-flex justify-content-md-center mt-2">
        <v-btn color="success" @click="addData()">บันทึกข้อมูล</v-btn>
        <v-btn color="success" @click="readData()">อ่านข้อมูล</v-btn>
      </div> -->
      {{ idbox }}
    </div>
    <h1>{{ uemail }}</h1>
    <h1>{{ uid }}</h1>
    <table class="table mx-auto">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Titlle</th>
          <th scope="col">Author</th>
          <th scope="col">Country</th>
          <th scope="col">Language</th>
          <th scope="col">Pages</th>
          <th scope="col">Year</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody v-for="(data, index) in csDoc" :key="index" style="color: black">
        <tr style="border-color: blue">
          <th style="" scope="row">{{ (index += 1) }}</th>
          <td>
            {{ data.data.title }}
          </td>
          <td>
            {{ data.data.author }}
          </td>
          <td>
            {{ data.data.country }}
          </td>
          <td>
            {{ data.data.language }}
          </td>
          <td>
            {{ data.data.pages }}
          </td>
          <td>
            {{ data.data.year }}
          </td>
          <td>
            <v-btn class="red" @click="deleteBook(index)">delete</v-btn>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {
  collection,
  addDoc,
  deleteDoc,
  // getDocs,
  query,
  onSnapshot,
  doc,
} from "firebase/firestore";
import { db } from "../plugins/firebaseInit";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../plugins/firebaseInit";

export default {
  mounted() {
    this.readData();
    this.checkLogin();
  },
  components: {},
  data() {
    return {
      show: false,
      csDoc: [],
      idbox: [],
    };
  },
  methods: {
    loadOnce() {
      location.reload();
    },
    async deleteBook(i) {
      await deleteDoc(doc(db, "BookInfo", this.idbox[i]));
    },
    // await deleteDoc(doc(db, "Datapost", this.idbox[i]));
    // import { deleteDoc } from "firebase/firestore";
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
        } else {
          // User is signed out
          // ...กรณีlogin ไม่ได้ให้เปลี่ยนไปหน้า login
          alert("Please Login First");
          this.$router.push("/login");
        }
      });
    },

    async addData() {
      try {
        await addDoc(collection(db, "users"), {
          fname: this.fname,
          lname: this.lname,
          date: this.date,
          atk: this.atk,
          tel: this.tel,
          email: this.email,
        });
        // console.log("Document written with ID: ", docRef.id);
        // this.readData();
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
    async readData() {
      // const querySnapshot = await getDocs(collection(db, "users"));
      // querySnapshot.forEach((doc) => {
      //   console.log(`${doc.id} => ${doc.data()}`);
      //   this.csDoc.push(doc.data());
      // });
      const q = query(collection(db, "BookInfo"));
      onSnapshot(q, (querySnapshot) => {
        this.csDoc = [];
        querySnapshot.forEach((doc) => {
          this.csDoc.push(doc.data());
          this.idbox.push(doc.id);
        });
      });
    },
  },
};
</script>

<style>
.container {
  margin: 10px 70px 70px;
  box-shadow: 0px 35px 30px rgb(19, 19, 19);
}
.form_wrapper {
  background: #fff;
  width: 400px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 25px;
  margin: 8% auto 0;
  position: relative;
  z-index: 1;
  border-top: 5px solid;
  /* -webkit-box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); */
}
/* h1,
label {
  font-size: medium;
  color: #1f1d36;
} */
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    align-items: center;
  }
}
</style>
