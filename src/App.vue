<template>
  <div class="container">
    <Header
      title="Task Tracker"
      @show-addtask="showaddtask"
      :showAddTask="showAddTask"
    ></Header>
    <div v-if="showAddTask">
      <AddTask @add-task="addTask"></AddTask>
    </div>

    <Tasks
      :tasks="tasks"
      @delete-task="deleteTask"
      @toggle-reminder="toggleReminder"
    ></Tasks>
    <router-view></router-view>
    <Footer></Footer>
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
import Footer from "./components/Footer";

export default {
  name: "App",
  //局部注册组件，可在App.vue中使用注册的组件
  components: {
    Header,
    Tasks,
    AddTask,
    Footer,
  },
  data() {
    return {
      tasks: [],
      showAddTask: true,
    };
  },
  methods: {
    // async fetchTasks() {
    //   const res = await fetch("http://localhost:3002/tasks");
    //   const data = await res.json();
    //   return data;
    // },
    getTasks() {
      this.$axios.get("http://localhost:3002/tasks").then((res) => {
        this.tasks = res.data;
      });
    },
    async getTask(id) {
      const res = await fetch(`http://localhost:3002/tasks/${id}`);
      const data = await res.json();
      return data;
    },
    // getTask(id) {
    //   this.$axios
    //     .get("http://localhost:3002/tasks", {
    //       params: {
    //         id,
    //       },
    //     })
    //     .then((res) => {
    //       return res.data;
    //     });
    // },

    showaddtask() {
      this.showAddTask = !this.showAddTask;
    },
    addTask(task) {
      /*
        // 这种写法也可以，不过要加上async、await

        const res = await fetch("http://localhost:3002/tasks", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(task),

      });
      const data = await res.json();
      this.tasks = [...this.tasks,data]
      */
      this.$axios({
        method: "post",
        url: "http://localhost:3002/tasks",
        data: task,
      }).then((task) => {
        // ...this.tasks是用来展开数组
        this.tasks = [...this.tasks, task.data]; //等价于 this.tasks.push(task)
      });
    },
    async deleteTask(id) {
      //fliter
      if (confirm("Are you sure?")) {
        const res = await fetch(`http://localhost:3002/tasks/${id}`, {
          method: "DELETE",
        });
        res.status === 200
          ? (this.tasks = this.tasks.filter((item) => {
              return item.id !== id;
            }))
          : alert("Error deleting task");
      }
    },
    async toggleReminder(id) {
      // 首先获取到对应id的task的reminder，将它保存起来
      const taskToToggle = await this.getTask(id);
      const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

      // 然后将reminder信息通过api更新
      const res = await fetch(`http://localhost:3002/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updTask),
      });

      const data = await res.json();

      this.tasks = this.tasks.map((task) =>
        //{ ...task, reminder: !task.reminder }为对象新增属性
        task.id === id ? { ...task, reminder: data.reminder } : task
      );
    },
  },
  async created() {
    this.getTasks();
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
