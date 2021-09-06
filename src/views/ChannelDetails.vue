<template>
  <div>
    <ChannelDetailsHeader
      :cover="channelDetails.snippet.thumbnails.high.url"
      :avatar="channelDetails.snippet.thumbnails.default.url"
      :title="channelDetails.snippet.title"
      :subCount="channelDetails.statistics.subscriberCount"
    />
    <div v-for="item in videos" :key="item.id">
      <ListPlayListItem
        :id="item.id"
        :snippet="item.snippet"
        :videoCount="item.contentDetails.itemCount"
      />
    </div>
  </div>
</template>

<script>
import ChannelDetailsHeader from "../components/ChannelDetailsHeader.vue";
import ListPlayListItem from "../components/ListPlayListItem.vue";
import { chanelService } from "../services/channel.service";

export default {
  components: {
    ChannelDetailsHeader,
    ListPlayListItem,
  },
  data() {
    return {
      channelDetails: {},
      videos: [],
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  created() {
    this.getChannel().then(this.getChannelVideos);
  },
  methods: {
    async getChannel() {
      try {
        let res = await chanelService.getChannel(this.id);
        console.log(res);
        this.channelDetails = res.data.items[0];
      } catch (err) {
        //TODO ERROR HAndling
        console.log("error");
        console.log(err);
      }
    },
    async getChannelVideos() {
      try {
        let res = await chanelService.getChannelPlayList(this.id);
        console.log(res);
        this.videos = res.data.items;
      } catch (err) {
        //TODO ERROR HAndling
        console.log("error");
        console.log(err);
      }
    },
    navigateTo(loc, payload) {
      this.$router.push({ name: loc, params: { id: payload } });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>