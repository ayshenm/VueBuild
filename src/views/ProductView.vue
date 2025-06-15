<template>
  <router-link to="/products" class="btn btn-primary mb-3">← Back to Products</router-link>

  <div class="card mb-3" style="max-width: 540px">
    <div class="row no-gutters">
      <div class="col-md-4 d-flex justify-center items-center">
        <img :src="product.image" class="card-img-top img-fluid" :alt="product.title" style="" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title fw-bold">{{ product.title }}</h5>
          <p class="card-text">
            {{ product.description }}
          </p>
          <p class="card-text">
            <small class="text-danger">{{ product.price }} $</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      product: {},
    };
  },
  created() {
    self = this;

    fetch("https://fakestoreapi.com/products/" + self.id, {
      method: "GET",
      header: {
        "Content-Type": "content/type",
      },
    })
      .then((res) => res.json())
      .then(function (json) {
        console.log("hh", json);
        self.product = json;
      })
      .catch(function (err) {
        console.log(err);
      });
  },
};
</script>
