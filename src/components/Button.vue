<template>
  <button class="btn" @click="onClick()" :style="{ background: color }">Add Task</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    color: String,
  },
  methods: {
    onClick() {
      console.log(111);
    },
  },
};
</script>

<style></style>
