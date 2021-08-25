<template>
  <div>
    <div class="bar">
      <el-button type="primary" style="margin-bottom:10px" @click="toMethodOne">动态合并单元格方法一</el-button>
      <el-button type="primary" @click="toMethodTwo">动态合并单元格方法二</el-button>
      <el-button type="primary" @click="toMethodThree">动态合并单元格方法三</el-button>
    </div>

    <router-view></router-view>
  </div>
</template>


<script>

import methodOne from "@/views/methodOne";
export default {
  name: "element-table",
  data() {
    return {
    }
  },
  components:{

  },
  methods: {

    toMethodOne() {
      this.$router.push({
        path: '/elementTable/methodOne',
        // query: {name: '方法一'}
      });
    },
    toMethodTwo() {
      this.$router.push({
        path: '/elementTable/methodTwo',
        // query: {name: '方法二'}
      });
    },
    toMethodThree() {
      this.$router.push({
        path: '/elementTable/methodThree',
        // query: {name: '方法三'}
      });
    }
  }
}
</script>

<style scoped>
.bar {
  width: 1000px;
  margin: 10px auto 0;
}
</style>