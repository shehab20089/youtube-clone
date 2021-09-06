<template>
  <div class="listItem">
    <ListChannelItemAvatar
      :img="snippet.thumbnails.default.url"
      class="y-margin-right"
    />
    <ListVideoItemData
      :title="snippet.title"
      :channelName="'160 Videos'"
      :views="'64M Subscribers'"
    />
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
  props: {
    id: { required: true },
    snippet: { required: true },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/components/ListChannelItem";
</style>