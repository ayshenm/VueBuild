<template>
  <h1>{{ title }}</h1>
  <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
</template>

<script>
export default {
  //   props: ["title"],//birinci yol
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
