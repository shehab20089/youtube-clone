<template>
  <div>
    <TheNavbar />
    <slot />
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";

export default {
  components: {
    TheNavbar,
  },
};
</script>

<style lang="scss" scoped>
</style>