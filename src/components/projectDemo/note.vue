<template>
  <div class="container">
    <Header title="Task Tracker"
            @show-addtask="showaddtask"
            :showAddTask="showAddTask">
    </Header>


  </div>


</template>

<script>
import footer from "@/components/Footer";
import Header from "@/components/Header"

export default {
  name: "note",
  components: {

    Header
  },
  data() {
    return {
      showAddTask: true,
    }
  }
}
</script>

<style scoped>

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");

.container {
  max-width: 500px;
  margin: 30px auto;
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