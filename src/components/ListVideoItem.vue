<template>
  <div class="listItem">
    <ListVideoItemShot />
    <ListVideoItemData />
  </div>
</template>

<script>
import ListVideoItemShot from "./ListVideoItemShot.vue";
import ListVideoItemData from "./ListVideoItemData.vue";

export default {
  components: {
    ListVideoItemShot,
    ListVideoItemData,
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/components/ListVideoItem";
</style>