<template>
  <div class="listItem">
    <ListPlayListItemShot />
    <ListVideoItemData />
  </div>
</template>

<script>
import ListPlayListItemShot from "./ListPlayListItemShot.vue";
import ListVideoItemData from "./ListVideoItemData.vue";

export default {
  components: {
    ListPlayListItemShot,
    ListVideoItemData,
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/components/ListChannelItem";
</style>