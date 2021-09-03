<template>
  <div class="home">
    <TheNavbar />

    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";

export default {
  name: "Home",
  components: {
    TheNavbar,
  },
};
</script>
