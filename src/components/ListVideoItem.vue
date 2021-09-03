<template>
  <div class="listItem">
    <ListVideoItemShot />
    <div class="listItem__videoData">
      <div class="videoData__title">
        Spongebob in Real Life Episode 2 dqjdoiqjdoiqjdqioj qoidjqiodjqoij dqd
        qdqdq qd qd qd qq dqjdoiqjdoiqjdqiojdq fq qd qdqd qdq qdqdqd
        qdojqiodjqoijd qoidjqiodjqd
      </div>
      <div class="videoData__chName small-text">SpongebobMovid</div>
      <div class="videoData__noOfViews small-text">54,0400,4000 views</div>
    </div>
  </div>
</template>

<script>
import ListVideoItemShot from "./ListVideoItemShot.vue";
export default {
  components: {
    ListVideoItemShot,
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/components/ListVideoItem";
</style>