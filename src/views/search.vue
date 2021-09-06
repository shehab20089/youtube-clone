<template>
  <div class="home">
    <template v-for="item in result">
      <div :key="item.id">
        <ListVideoItem
          :snippet="item.snippet"
          :id="item.id.videoId"
          v-if="item.id.kind == 'youtube#video'"
        />
        <ListPlayListItem
          :snippet="item.snippet"
          :id="item.id.playlistId"
          v-else-if="item.id.kind == 'youtube#playlist'"
        />
        <ListChannelItem
          :snippet="item.snippet"
          :id="item.id.channelId"
          v-else-if="'youtube#playlist'"
        />
      </div>
    </template>
  </div>
</template>

<script>
import ListVideoItem from "@/components/ListVideoItem.vue";
import ListChannelItem from "@/components/ListChannelItem.vue";
import ListPlayListItem from "@/components/ListPlayListItem.vue";
import { searchService } from "../services/search.service";

export default {
  name: "Search",
  components: {
    ListVideoItem,
    ListChannelItem,
    ListPlayListItem,
  },
  data() {
    return {
      result: [],
    };
  },
  created() {
    this.getSearchResult();
  },
  computed: {
    key() {
      return this.$route.query.key;
    },
  },
  watch: {
    $route(to, from) {
      // react to route changes...
      if (to !== from) {
        location.reload();
      }
    },
  },

  methods: {
    async getSearchResult() {
      try {
        let res = await searchService.searchYoutube(this.key);
        console.log(res);
        this.result = res.data.items;
      } catch (err) {
        //TODO ERROR HAndling
        console.log("error");
        console.log(err);
      }
    },
  },
};
</script>
<style scoped>
</style>
