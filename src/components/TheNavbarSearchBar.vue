<template>
  <div class="searchbar">
    <i v-if="SearchIconVisable" class="fa fa-search fa-lg"></i>

    <input
      type="search"
      @blur="SearchIconVisable = true"
      @focus="SearchIconVisable = false"
      v-model="searchKey"
      @search="searchVideo"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      SearchIconVisable: true,
      searchKey: "",
    };
  },

  methods: {
    searchVideo() {
      //   TODO Search Video
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/components/TheNavbarSearchBar";
</style>