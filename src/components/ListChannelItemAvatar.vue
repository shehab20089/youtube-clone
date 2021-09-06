<template>
  <div class="listItem__videoShot">
    <img class="cover" :src="img" alt="video screenshot" />
  </div>
</template>

<script>
export default {
  props: {
    img: { required: true },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/components/ListChannelItemAvatar";
</style>