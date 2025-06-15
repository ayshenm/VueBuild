<template>
  <app-header v-bind:title="title"> </app-header>

  <div class="container mt-4">
    <RouterView />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  components: {
    "app-header": Header,
  },
  data() {
    return {
      title: "Vue Logo",
    };
  },
};
</script>
