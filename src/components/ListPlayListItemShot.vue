<template>
  <div class="listItem__playListShot">
    <img class="cover" :src="img" alt="video screenshot" />
    <div class="playListShot__playIcon">
      <p class="playIcon__number">{{ videoCount }}</p>
      <img src="../assets/playlist-videos.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: { required: true },
    videoCount: { required: true },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/components/ListPlayListItemShot";
</style>