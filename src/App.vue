<template>
  <app-header v-bind:title="title"> </app-header>
  <app-nav></app-nav>
  <RouterView />
</template>

<script>
import Header from "@/components/Header.vue";
import Navbar from "@/components/Navbar.vue";
export default {
  components: {
    "app-header": Header,
    "app-nav": Navbar,
  },
  data() {
    return {
      title: "Page Header",
    };
  },
};
</script>
