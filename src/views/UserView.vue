<template>
  <ul class="list-group mt-4">
    <li class="list-group-item"><b>Name:</b> {{ user.name }}</li>
    <li class="list-group-item"><b>Email:</b> {{ user.email }}</li>
    <li class="list-group-item"><b>Phone:</b> {{ user.phone }}</li>
    <li class="list-group-item"><b>City:</b> {{ user.address.city }}</li>
    <li class="list-group-item"><b>Street:</b> {{ user.address.street }}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      user: {},
    };
  },
  created() {
    self = this;

    fetch("https://jsonplaceholder.typicode.com/users/" + self.id, {
      method: "GET",
      header: {
        "Content-Type": "content/type",
      },
    })
      .then((res) => res.json())
      .then(function (json) {
        console.log("hh", json);
        self.user = json;
      })
      .catch(function (err) {
        console.log(err);
      });
  },
};
</script>
