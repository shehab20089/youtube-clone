<template>
  <div class="listItem__videoShot">
    <img class="cover" :src="img" alt="video screenshot" />
    <div class="videoShot__videoDuration">{{ duration }}</div>
  </div>
</template>

<script>
export default {
  props: {
    img: { required: true },
    duration: { required: true },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/components/LisyVideoItemShot";
</style>