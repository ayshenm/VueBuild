<template>
  <div class="d-flex flex-wrap align-content-lg-between">
    <div v-for="product in products" :key="product.id" class="card mr-3 mb-3" style="width: 18rem">
      <div class="card-body">
        <h2 class="h-5 card-title">
          {{ product.title }}
        </h2>
        <p class="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eos fuga neque saepe
          iusto ullam consequuntur harum doloremque rerum totam?
        </p>
        <router-link :to="'/products/' + product.id" class="btn btn-primary">
          Go to details
        </router-link>
      </div>
    </div>
  </div>

  <!-- <div v-for="user in users" :key="user.id">
    <router-link v-bind:to="'/users/' + user.id">
      <h2>{{ user.name }}</h2>
    </router-link>
  </div> -->
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  created() {
    self = this;

    fetch("https://fakestoreapi.com/products", {
      method: "GET",
      header: {
        "Content-Type": "content/type",
      },
    })
      .then((res) => res.json())
      .then(function (json) {
        console.log("hh", json);
        self.products = json;
      })
      .catch(function (err) {
        console.log(err);
      });
  },
};
</script>
