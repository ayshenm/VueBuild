<template>
  <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
  <!-- <button v-on:click="click()">tikk</button> -->

  <div class="container mt-4">
    <RouterView />
  </div>
  <app-footer>
    <template #head>
      <p>1</p>
    </template>
    <template #headsecond>
      <p>2</p>
    </template>
  </app-footer>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    "app-header": Header,
    "app-footer": Footer,
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
    // click: function () {
    //   this.title = "bla bla";
    // },
  },
  // beforeCreate() {
  //   alert("beforecreate");
  // },
  // created() {
  //   alert("create");
  // },
  // beforeMount() {
  //   alert("beforemount");
  // },
  // mounted() {
  //   alert("mouned");
  // },
  // beforeUpdate() {
  //   alert("beforeupdate");
  // },
  // updated() {
  //   alert("update");
  // },
};
</script>
