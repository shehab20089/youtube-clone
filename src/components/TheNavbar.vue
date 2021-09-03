<template>
  <div class="navbar">
    <div class="navbar__avatar">
      <img src="../assets/whiteLogo.png" alt="" srcset="" />
    </div>
    <div class="navbar__searchbar">
      <TheNavbarSearchBar />
    </div>
  </div>
</template>

<script>
import TheNavbarSearchBar from "./TheNavbarSearchBar.vue";
export default {
  components: {
    TheNavbarSearchBar,
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/components/TheNavbar";
</style>