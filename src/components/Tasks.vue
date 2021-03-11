<template>
  <div>
    <div :key="index" v-for="(item,index) in tasks">
      <Task :task="item"></Task>

    </div>
  </div>
</template>

<script>
//子组件再调用子组件，导入的路径格式发了变化
import Task from "./Task"
export default {
  name: "Tasks",
  //接受App.vue(父组件)传来的值
  props: {
    tasks: Array,
  },
  components:{
      Task,
  }
};
</script>

<style></style>
