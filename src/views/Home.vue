<template>
  <div>
    <AddTask v-if="showAddTask" @add-task="addTask"></AddTask>
    <Tasks
      :tasks="tasks"
      @delete-task="deleteTask"
      @toggle-reminder="toggleReminder"
    ></Tasks>
  </div>
</template>

<script>
import Tasks from "../components/Tasks";
import AddTask from "../components/AddTask";
export default {
  name: "Home",
  props: {
    showAddTask: Boolean,
  },
  components: {
    Tasks,
    AddTask,
  },
  data() {
    return {
      tasks: [],
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
