<template>
  <div class="container">
    <Header title="Task Tracker"></Header>
    <AddTask @add-task="addTask"></AddTask>
    <Tasks
      :tasks="tasks"
      @delete-task="deleteTask"
      @toggle-reminder="toggleReminder"
    ></Tasks>
  </div>
</template>

<script>
//导入
/*
App.vue是主组件;
Header.vue是App.vue的一号子组件;
Button.vue是header.vue的子组件;
Tasks.vue是App.vue的二号子组件;
Task.vue是Tasks.vue的子组件;
*/
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

export default {
  name: "App",
  //局部注册组件，可在App.vue中使用注册的组件
  components: {
    Header,
    Tasks,
    AddTask,
  },
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    addTask(task) {
      // ...this.tasks是用来展开数组
      this.tasks = [...this.tasks, task]  //等价于 this.tasks.push(task)
      
    },
    deleteTask(id) {
      //fliter
      if (confirm("Are you sure?")) {
        this.tasks = this.tasks.filter((item) => {
          return item.id !== id;
        });
      }
    },
    toggleReminder(id) {
      this.tasks = this.tasks.map((task) =>
        //{ ...task, reminder: !task.reminder }为对象新增属性
        task.id === id ? { ...task, reminder: !task.reminder } : task
      );
    },
  },
  created() {
    this.tasks = [
      {
        id: 1,
        text: "吃饭",
        day: "2021-01-17",
        reminder: true,
      },
      {
        id: 2,
        text: "睡觉",
        day: "2021-02-17",
        reminder: true,
      },
      {
        id: 3,
        text: "打豆豆",
        day: "2021-02-26",
        reminder: false,
      },
    ];
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: "Poppins", sans-serif;
}
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>
