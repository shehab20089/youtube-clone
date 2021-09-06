<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import Default from "./layout/default.vue";

export default {
  components: {
    Default,
  },
  computed: {
    layout() {
      return this.$route.meta.layout || "Default";
    },
  },
};
</script>
<style lang="scss">
</style>
