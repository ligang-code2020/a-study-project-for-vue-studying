<template>
  <footer>
    <p>Copyright &copy; 2021</p>
  <router-link :to="{name:'About',params:{userid:1111}}">About</router-link>

    <button @click="toRouter">111</button>
  </footer>
</template>

<script>
export default {
    name:"Footer",

    methods:{
      toRouter(){
        this.$router.push({
          path:'/about',
          query:{
            number:222,
          }
        });
      }
    }
    
}
</script>

<style scoped>
a {
  color: #333;
}

footer {
  margin-top: 30px;
  text-align: center;
}
</style>
