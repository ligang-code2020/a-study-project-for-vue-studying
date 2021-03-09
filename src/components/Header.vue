<template>
  <header>
    <h1>{{title}}</h1>
  </header>
</template>

<script>
//导出
export default {
  name: "Header",
  props: {
    title: {
      type: String,
      default:"Hello World"
    },
  },
};
</script>

<style></style>
