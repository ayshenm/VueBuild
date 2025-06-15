<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <button v-on:click="clickTitle">
        {{ title }}
      </button>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExample07"
        aria-controls="navbarsExample07"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample07">
        <app-nav></app-nav>

        <form class="form-inline my-2 my-md-0">
          <input class="form-control" type="text" placeholder="Search" aria-label="Search" />
        </form>
      </div>
    </div>
  </nav>

  <!-- <p><strong>Current route path:</strong> {{ $route.fullPath }}</p> -->
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  //   props: ["title"],//birinci yol
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  components: {
    "app-nav": Navbar,
  },
  methods: {
    clickTitle: function () {
      this.$emit("changeTitle", "Page title changed!");
    },
  },
};
</script>
