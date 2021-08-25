<template>
  <div class="element">
    <h1>方法二</h1>
    <el-button type="text" @click="exportExcel()">导出</el-button>
    <div ref="table">
      <el-table
          style="margin-bottom: 20px"
          size="small"
          :data="originTableData1"
          :span-method="cellMerge"
          border>
        <el-table-column
            v-for="(column,index) in columns1"
            :key="index"
            :prop="column.prop"
            :label="column.label"
            :width="column.width"
            show-overflow-tooltip
        />

      </el-table>


      <el-table
          size="small"
          :data="tableData"
          :span-method="objectSpanMethod"
          border>

        <el-table-column
            v-for="(column,index) in columns2"
            :key="index"
            :prop="column.prop"
            :label="column.label"
            :width="column.width"
            show-overflow-tooltip
        />


      </el-table>


    </div>

  </div>
</template>

<script>

import XLSX from 'xlsx'
import dynamicMerge from "@/mixin/dynamicMerge";
import dynamicMergeTwo from "@/mixin/dynamicMergeTwo";

export default {
  name: "methodTwo",
  mixins: [dynamicMerge, dynamicMergeTwo],
  computed: {
    // tableData() {
    //   // 格式化接口返回的表格数据，每一项，对象转数组
    //   let formatTableData = []
    //   this.originTableData2.map(item => {
    //     formatTableData.push(Object.values(item))
    //   })
    //   console.log("formatTableData", formatTableData)
    //   return formatTableData
    // }
  },
  mounted() {
    this.getSpanArr(this.originTableData1, 'subName', 'spanArr1');


  },
  data() {
    return {
      num: 0,
      spanArr: {
        spanArr1: []
      },

      originTableData1: [
        {
          subName: '小类1',
          freq: '频段1',
          itemName: '设备号1',
          pillarNo: '位置1',
          totalValue: '100',
          dataValue: '2',
          dataPerc: '1%',
          startDatetime: '2020-04-13 00:00:00',
          endDatetime: '2020-04-14 00:00:00'
        },
        {
          subName: '小类1',
          freq: '频段1',
          itemName: '设备号1',
          pillarNo: '位置1',
          totalValue: '100',
          dataValue: '5',
          dataPerc: '1%',
          startDatetime: '2020-04-13 00:00:00',
          endDatetime: '2020-04-14 00:00:00'
        },
        {
          subName: '小类1',
          freq: '频段2',
          itemName: '设备号1',
          pillarNo: '位置1',
          totalValue: '100',
          dataValue: '6',
          dataPerc: '1%',
          startDatetime: '2020-04-13 00:00:00',
          endDatetime: '2020-04-14 00:00:00'
        },
        {
          subName: '小类1',
          freq: '频段2',
          itemName: '设备号1',
          pillarNo: '位置1',
          totalValue: '100',
          dataValue: '9',
          dataPerc: '1%',
          startDatetime: '2020-04-13 00:00:00',
          endDatetime: '2020-04-14 00:00:00'
        },
        {
          subName: '小类2',
          freq: '频段2',
          itemName: '设备号1',
          pillarNo: '位置1',
          totalValue: '100',
          dataValue: '9',
          dataPerc: '1%',
          startDatetime: '2020-04-13 00:00:00',
          endDatetime: '2020-04-14 00:00:00'
        }
      ],
      originTableData2: [
        {system_type: "ios", app_version: "213", wx_version: "8.0.9", pv: 1223108, uv: 9},
        {system_type: "ios", app_version: "213", wx_version: "8.0.9", pv: 1223108, uv: 9},
        {system_type: "ios", app_version: "234", wx_version: "8.0.7", pv: 9, uv: 2},
        {system_type: "ios", app_version: "324", wx_version: "8.0.7", pv: 3, uv: 1},
        {system_type: "ios", app_version: "3245", wx_version: "8.0.6", pv: 27, uv: 1},
        {system_type: "Android", app_version: "32423", wx_version: "8.0.3", pv: 7922385, uv: 20073},
        {system_type: "Android", app_version: "1.12.36+1", wx_version: "8.0.2", pv: 265324, uv: 1225},
        {system_type: "Android", app_version: "1.12.3423+1", wx_version: "7.0.22", pv: 394779, uv: 1132},
        {system_type: "Android", app_version: "1.12.344", wx_version: "7.0.22", pv: 170, uv: 35},
        {system_type: "Android", app_version: "1.12.2238+1", wx_version: "7.0.22", pv: 94, uv: 21}
      ],


      columns1: [
        {prop: 'subName', label: '产品小类', width: '100'},
        {prop: 'freq', label: '频段', width: '80'},
        {prop: 'itemName', label: '设备号'},
        {prop: 'pillarNo', label: '位置', width: '100'},
        {prop: 'totalValue', label: '测试总数', width: '80'},
        {prop: 'dataValue', label: '故障数', width: '80'},
        {prop: 'dataPerc', label: '故障率', width: '80'},
        {prop: 'startDatetime', label: '统计开始时间', width: '160'},
        {prop: 'endDatetime', label: '统计结束时间', width: '160'}
      ],
      columns2: [
        {prop: '0', label: 'system_type', width: '150'},
        {prop: '1', label: 'app_version', width: '150'},
        {prop: '2', label: 'wx_version', width: '150'},
        {prop: '3', label: 'pv', width: '150'},
        {prop: '4', label: 'uv',},
      ],
    }

  },
  methods: {
    objectSpanMethod({row, column, rowIndex, columnIndex}) {
      let rowLength = this.originTableData2.length;
      let colLength = this.columns2.length;

      let myMappings = this.mergedMap(rowLength, colLength);

      return myMappings[rowIndex][columnIndex]
    },


    exportExcel() {
      let workbook = XLSX.utils.book_new();
      const table = this.$refs.table;
      const worksheet = XLSX.utils.table_to_sheet(table);
      XLSX.utils.book_append_sheet(workbook, worksheet, 'sheet名称');
      XLSX.writeFile(workbook, '表格名称1.xlsx')
    },

    cellMerge({row, column, rowIndex, columnIndex}) {
      if (columnIndex === 0) {
        const _row = this.spanArr.spanArr1[rowIndex]
        const _col = _row > 0 ? 1 : 0
        return {
          rowspan: _row,
          colspan: _col
        }
      }
    }
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