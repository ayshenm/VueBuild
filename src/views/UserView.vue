<template>
  <h1>{{ user.name }}</h1>
  <h2>{{ user.email }}</h2>
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
