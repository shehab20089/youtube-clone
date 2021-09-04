<template>
  <div class="home">
    <TheNavbar />
    <ListItem />
    <ListChannelItem />

    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";
import ListItem from "@/components/ListVideoItem.vue";
import ListChannelItem from "@/components/ListChannelItem.vue";

export default {
  name: "Home",
  components: {
    TheNavbar,
    ListItem,
    ListChannelItem,
  },
};
</script>
