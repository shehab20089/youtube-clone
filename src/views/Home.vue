<template>
  <div class="home">
    <TheNavbar />
    <ListItem />
    <ListChannelItem />
    <ListPlayListItem />

    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";
import ListItem from "@/components/ListVideoItem.vue";
import ListChannelItem from "@/components/ListChannelItem.vue";
import ListPlayListItem from "@/components/ListPlayListItem.vue";

export default {
  name: "Home",
  components: {
    TheNavbar,
    ListItem,
    ListChannelItem,
    ListPlayListItem,
  },
};
</script>
