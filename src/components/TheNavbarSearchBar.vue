<template>
  <div class="searchbar">
    <i v-if="SearchIconVisable" class="fa fa-search fa-lg"></i>

    <input
      type="search"
      id="search"
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
      this.$router.push({ name: "search", query: { key: this.searchKey } });
      //   TODO Search Video
    },
  },
};
</script>

<style lang="scss" >
@import "../styles/components/TheNavbarSearchBar";
</style>