<template>
  <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
  <button v-on:click="click()">tikk</button>

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
  methods: {
    updateTitle: function (changeTitle) {
      this.title = changeTitle;
    },
    click: function () {
      this.title = "bla bla";
    },
  },
  beforeCreate() {
    alert("beforecreate");
  },
  created() {
    alert("create");
  },
  beforeMount() {
    alert("beforemount");
  },
  mounted() {
    alert("mouned");
  },
  beforeUpdate() {
    alert("beforeupdate");
  },
  updated() {
    alert("update");
  },
};
</script>
