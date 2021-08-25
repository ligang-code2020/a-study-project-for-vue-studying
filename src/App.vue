<template>

  <!--    <div class="container">-->
  <!--      <Header-->
  <!--          title="Task Tracker"-->
  <!--          @show-addtask="showaddtask"-->
  <!--          :showAddTask="showAddTask"-->
  <!--      ></Header>-->
  <!--      <router-view :showAddTask="showAddTask"></router-view>-->
  <!--      <Footer></Footer>-->
  <!--    </div>-->

    <div>
      <topNavMenu></topNavMenu>
      <router-view></router-view>
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
// import Header from "./components/Header";
import Footer from "./components/Footer";
import topNavMenu from "@/components/topNavMenu";


export default {
  name: "App",
  //局部注册组件，可在App.vue中使用注册的组件
  components: {
    // Header,
    // Footer,
    topNavMenu
  },

  data() {
    return {
      showAddTask: true,
    };
  },
  methods: {
    showaddtask() {
      this.showAddTask = !this.showAddTask;
    },

    toMethodTwo() {
      this.$router.push({
        path: '/methodTwo'
      });
    },
    toMethodOne() {
      this.$router.push({
        path: '/methodOne'
      });
    },
    toMethodThree() {
      this.$router.push({
        path: '/methodThree'
      });
    }

  },
}
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
  background-color: #f5f8ff;
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


.bar {
  width: 1000px;
  margin: 10px auto 0;
}

.el-header, .el-footer {
  background-color: #FFFFFF;
  color: #333;
  text-align: center;
  line-height: 60px;
}
</style>