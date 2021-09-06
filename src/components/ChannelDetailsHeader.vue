<template>
  <div class="channelHeader">
    <div class="channelHeader__cover">
      <img :src="cover" alt="" />
    </div>
    <div class="channelHeader__details">
      <div class="details__avatar">
        <img :src="avatar" alt="" />
      </div>
      <div class="details__info">
        <div class="info__title">{{ title }}</div>
        <div class="info__subscribe">
          <i class="fa fa-youtube-play"></i> SUBSCRIBE
          <span class="small-text">{{ subCount }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cover: {},
    avatar: {},
    title: {},
    subCount: {},
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/components/ChannelHeaderDetails";
</style>