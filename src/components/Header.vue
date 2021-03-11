<template>
  <header>
    <h1>{{title}}</h1>
    <Button text="Add Task" color="green"></Button>
  </header>
</template>

<script>
import Button from "./Button"



//导出
export default {
  //组件的名称
  name: "Header",

  //静态声明父组件传给子组件的值
  props: {
    title: {
      type: String,
    },
  },
  components:{
    Button
    
  }
};
</script>

<style scoped>
header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  
}
</style>
