<template>
  <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      contain
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "slide",
  data() {
    return {
      items: [
        {
          src: "https://storage.naiin.com/system/application/bookstore/resource/banner/202203/c8359df232124371baa3b023456f4c39.jpg",
        },
        {
          src: "https://storage.naiin.com/system/application/bookstore/resource/banner/202203/65cfeebcc49842f2b97353a855a62c63.jpg",
        },
        {
          src: "https://storage.naiin.com/system/application/bookstore/resource/banner/202203/f9a63bb9053b46fca6af58158ece3137.jpg",
        },
        {
          src: "https://storage.naiin.com/system/application/bookstore/resource/banner/202203/3d277ec7b69940d397cf48832150484d.jpg",
        },
      ],
    };
  },
};
</script>
