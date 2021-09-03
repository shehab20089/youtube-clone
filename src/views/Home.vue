<template>
  <div class="home">
    <TheNavbar />
    <ListItem />
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";
import ListItem from "@/components/ListVideoItem.vue";

export default {
  name: "Home",
  components: {
    TheNavbar,
    ListItem,
  },
};
</script>
