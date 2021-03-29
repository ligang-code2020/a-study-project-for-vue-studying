<template>
  <div>
    <div :key="index" v-for="(item, index) in tasks">
      <Task
        :task="item"
        @delete-task="$emit('delete-task', item.id)"
        @toggle-reminder="$emit('toggle-reminder',item.id)"
      ></Task>
    </div>
  </div>
</template>

<script>
//子组件再调用子组件，导入的路径格式发了变化
import Task from "./Task";
export default {
  name: "Tasks",
  //接受Home.vue(父组件)传来的值
  props: {
    tasks: Array,
  },
  components: {
    Task,
  },
  //子组件(Tasks.vue)通过自定义事件(delete-task)与父组件(App.vue)进行通信
  emits: ["delete-task", "toggle-reminder"],
};
</script>

<style></style>
