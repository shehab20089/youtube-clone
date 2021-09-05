<template>
  <div class="listItem">
    <ListChannelItemAvatar class="y-margin-right" />
    <ListVideoItemData />
  </div>
</template>

<script>
import ListChannelItemAvatar from "./ListChannelItemAvatar.vue";
import ListVideoItemData from "./ListVideoItemData.vue";

export default {
  components: {
    ListChannelItemAvatar,
    ListVideoItemData,
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/components/ListChannelItem";
</style>