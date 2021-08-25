<template>
  <div class="element">
    <h1>方法三</h1>
    <el-button type="text" @click="exportData()">导出</el-button>
    <el-table
        :data="dataList"
        :span-method="objectSpanMethod"
        border
        style="width: 100%">
      <el-table-column prop="class" label="班级" width="200" align="center"></el-table-column>
      <el-table-column prop="sex" label="性别" width="200" align="center"></el-table-column>
      <el-table-column prop="age" label="年龄" width="200" align="center"></el-table-column>
      <el-table-column prop="hobby" label="爱好" width="200" align="center"></el-table-column>
      <el-table-column prop="name" label="姓名" width="200" align="center"></el-table-column>
      <el-table-column prop="id" label="id"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import {export2Excel} from '../utils/index'

export default {
  name: "methodThree",
  data() {
    return {
      dataList: [
        {id: '1', class: '三年级1班', sex: '男', age: '16岁', hobby: '打篮球', name: '张三1'},
        {id: '2', class: '三年级1班', sex: '男', age: '16岁', hobby: '打篮球', name: '张三2'},
        {id: '3', class: '三年级1班', sex: '男', age: '17岁', hobby: '看书', name: '张三3'},
        {id: '6', class: '三年级1班', sex: '女', age: '16岁', hobby: '看书', name: '赵柳1'},
        {id: '7', class: '三年级1班', sex: '女', age: '16岁', hobby: '看书', name: '赵柳2'},
        {id: '8', class: '三年级1班', sex: '女', age: '16岁', hobby: '旅游', name: '赵柳3'},
        {id: '9', class: '三年级1班', sex: '女', age: '17岁', hobby: '动漫', name: '赵柳4'},
        {id: '10', class: '三年级2班', sex: '男', age: '16岁', hobby: '羽毛球', name: '李四1'},
        {id: '11', class: '三年级2班', sex: '男', age: '17岁', hobby: '羽毛球', name: '李四2'},
        {id: '12', class: '三年级2班', sex: '女', age: '16岁', hobby: '看书', name: '王舞'},
        {id: '13', class: '三年级2班', sex: '女', age: '16岁', hobby: '画画', name: '王舞2'}
      ],
      column: [
        {title: '班级', key: 'class'},
        {title: '性别', key: 'sex'},
        {title: '年龄', key: 'age'},
        {title: '爱好', key: 'hobby'},
        {title: '姓名', key: 'name'},
        {title: 'id', key: 'id'},
      ],
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    /**
     element-table合并单元格的函数
     columnIndex 值表示要合并的列的下标，当前示例是合并前4列。
     如果你是要合并多列，需要添加对应的列号进行判断，并且添加对应的计算方法，
     和对应的计算合并列的方法。
     */
    objectSpanMethod({row, column, rowIndex, columnIndex}) {
      if (columnIndex === 0) {
        return this.ret(row, 'firstSpan')
      } else if (columnIndex === 1) {
        return this.ret(row, 'secondSpan')
      } else if (columnIndex === 2) {
        return this.ret(row, 'thirdSpan')
      } else if (columnIndex === 3) {
        return this.ret(row, 'fourthSpan')
      }
    },
    ret(row, obj) {
      if (row && row[obj] != 0) {
        return {
          rowspan: row[obj],
          colspan: 1
        }
      } else {
        return {
          rowspan: 0,
          colspan: 0
        }
      }
    },
    // 计算第一列合并总数
    computeFirstSpan(firstObj, secondObj, thirdObj, fourthObj) {
      // 遍历计算第一列合并行数
      for (let obj in firstObj) {
        let fristData = this.dataList.filter(d => d.id === firstObj[obj][0])[0]
        // 获取第一条数据，对其添加 'firstSpan' 属性，并设置值
        if (fristData) fristData['firstSpan'] = firstObj[obj].length
        this.computeSecondSpan(firstObj[obj], secondObj, thirdObj, fourthObj)
      }
    },
    // 计算第二列合并总数
    computeSecondSpan(classList, secondObj, thirdObj, fourthObj) {
      let secondList = []
      // 遍历计算第二列合并行数
      for (let obj in secondObj) {
        // 判断两个id数组，取其并集，并集的长度就是合并列的行数
        let secondIds = secondObj[obj].filter(val => {
          return classList.indexOf(val) > -1
        })
        let fristData = this.dataList.filter(d => d.id === secondIds[0])[0]
        // 获取第一条数据，对其添加 'secondSpan' 属性，并设置值
        if (fristData) fristData['secondSpan'] = secondIds.length
        secondList.push(secondIds)
      }
      secondList.forEach(list => {
        this.computeThirdSpan(list, thirdObj, fourthObj)
      })
    },
    // 计算第三列合并总数
    computeThirdSpan(list, thirdObj, fourthObj) {
      let thirdList = []
      // 遍历计算第三列合并行数
      for (let obj in thirdObj) {
        let thirdIds = thirdObj[obj].filter(val => {
          return list.indexOf(val) > -1
        })
        let fristData = this.dataList.filter(d => d.id === thirdIds[0])[0]
        // 获取第一条数据，对其添加 'thirdSpan' 属性，并设置值
        if (fristData) fristData['thirdSpan'] = thirdIds.length
        thirdList.push(thirdIds)
      }
      thirdList.forEach(list => {
        this.computeFourthSpan(list, fourthObj)
      })
    },
    // 计算第四列合并总数
    computeFourthSpan(list, fourthObj) {
      // 遍历计算第四列合并行数
      for (let obj in fourthObj) {
        let fourthIds = fourthObj[obj].filter(val => {
          return list.indexOf(val) > -1
        })
        let fristData = this.dataList.filter(d => d.id === fourthIds[0])[0]
        // 获取第一条数据，对其添加 'fourthSpan' 属性，并设置值
        if (fristData) fristData['fourthSpan'] = fourthIds.length
      }
    },
    /**
     *  构建合并列数据
     *  思路：遍历所有数据，将需要合并的列的内容作为key，数据id作为value，然后依次遍历获取对应的合并列的行数
     */
    buildMerge(dataList) {
      let firstObj = {},
          secondObj = {},
          thirdObj = {},
          fourthObj = {}
      let firstObjKey = '',
          secondObjKey = '',
          thirdObjKey = '',
          fourthObjKey = ''
      // 本示例合并的前四列，对应的字段分别：class、sex、age、hobby
      // 如果你需要合并其他的字段，需修改此处字段名称
      for (let i = 0, len = dataList.length; i < len; i++) {
        firstObjKey = dataList[i].class
        secondObjKey = dataList[i].sex
        thirdObjKey = dataList[i].age
        fourthObjKey = dataList[i].hobby

        if (!firstObj[firstObjKey])
          firstObj[firstObjKey] = new Array(dataList[i].id)
        else {
          firstObj[firstObjKey].push(dataList[i].id)
        }
        if (!secondObj[secondObjKey])
          secondObj[secondObjKey] = new Array(dataList[i].id)
        else {
          secondObj[secondObjKey].push(dataList[i].id)
        }
        if (!thirdObj[thirdObjKey])
          thirdObj[thirdObjKey] = new Array(dataList[i].id)
        else {
          thirdObj[thirdObjKey].push(dataList[i].id)
        }
        if (!fourthObj[fourthObjKey])
          fourthObj[fourthObjKey] = new Array(dataList[i].id)
        else {
          fourthObj[fourthObjKey].push(dataList[i].id)
        }
      }
      this.computeFirstSpan(firstObj, secondObj, thirdObj, fourthObj)
    },

    init() {
      this.buildMerge(this.dataList)
    },
    exportData() {
      export2Excel(this.column, this.dataList);
    },
  }
}
</script>

<style scoped>
.element {
  width: 1200px;
  height: 1000px;
  margin: 30px auto 0;
}
</style>