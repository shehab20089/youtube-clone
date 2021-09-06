<template>
  <div class="listItem__videoData">
    <div class="videoData__title">
      {{ title }}
    </div>
    <div class="videoData__chName small-text">{{ channelName }}</div>
    <div class="videoData__noOfViews small-text">{{ views }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: { required: true },
    channelName: { required: true },
    views: { required: false },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/components/ListVideoItemData";
</style>