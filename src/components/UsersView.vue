<template>
  <div>Usersler</div>

  <div v-for="user in users" :key="user.id">
    <router-link v-bind:to="'/users/' + user.id">
      <h2>{{ user.name }}</h2>
    </router-link>
    <h3>{{ user.username }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    self = this;

    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
      header: {
        "Content-Type": "content/type",
      },
    })
      .then((res) => res.json())
      .then(function (json) {
        console.log("hh", json);
        self.users = json;
      })
      .catch(function (err) {
        console.log(err);
      });
  },
};
</script>
