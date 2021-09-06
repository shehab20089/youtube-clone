<template>
  <div class="listItem">
    <ListVideoItemShot
      :img="snippet.thumbnails.default.url"
      :duration="'9:08'"
      class="y-margin-right"
    />
    <ListVideoItemData
      :title="snippet.title"
      :channelName="snippet.channelTitle"
      :views="'64M'"
    />
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
  props: {
    id: { required: true },
    snippet: { required: true },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/components/ListVideoItem";
</style>