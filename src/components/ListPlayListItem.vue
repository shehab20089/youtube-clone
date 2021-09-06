<template>
  <div class="listItem">
    <ListPlayListItemShot
      :img="snippet.thumbnails.default.url"
      :videoCount="videoCount"
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
import ListPlayListItemShot from "./ListPlayListItemShot.vue";
import ListVideoItemData from "./ListVideoItemData.vue";

export default {
  components: {
    ListPlayListItemShot,
    ListVideoItemData,
  },
  props: {
    id: { required: true },
    snippet: { required: true },
    videoCount: { default: "40" },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/components/ListChannelItem";
</style>