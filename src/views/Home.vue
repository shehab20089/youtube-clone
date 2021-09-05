<template>
  <div class="home">
    <TheNavbar />
    <channel-details-header />
    <ListItem />
    <ListChannelItem />
    <ListPlayListItem />
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";
import ListItem from "@/components/ListVideoItem.vue";
import ListChannelItem from "@/components/ListChannelItem.vue";
import ListPlayListItem from "@/components/ListPlayListItem.vue";
import ChannelDetailsHeader from "@/components/ChannelDetailsHeader.vue";

export default {
  name: "Home",
  components: {
    TheNavbar,
    ListItem,
    ListChannelItem,
    ListPlayListItem,
    ChannelDetailsHeader,
  },
};
</script>
<style scoped>
</style>
