<template>
  <div class="element">
<!--    <h1>{{this.$route.query.name}}</h1>-->
    <h1>方法一</h1>
    <el-button type="text" @click="exportExcel()">导出</el-button>
    <div ref="tableData" style="visibility: hidden">
      <el-table
          ref="tableData1"
          :span-method="cellMerge"
          :data="sysAppVersion"
          border
          style="width: 100%;margin-bottom:40px ">
        <el-table-column
            prop="system_type"
            label="系统版本"
            width="180">
        </el-table-column>
        <el-table-column
            prop="app_version"
            label="app版本"
            width="180">
        </el-table-column>
        <el-table-column
            prop="pv"
            label="pv">
        </el-table-column>
        <el-table-column
            prop="uv"
            label="uv">
        </el-table-column>
      </el-table>

    </div>


<!--    <el-table-->
<!--        :span-method="cellMerge1"-->
<!--        :data="tableData1"-->
<!--        border-->
<!--        style="width: 100%;margin-bottom:40px ">-->
<!--      <el-table-column-->
<!--          prop="a"-->
<!--          label="日期"-->
<!--          width="180">-->
<!--      </el-table-column>-->
<!--      <el-table-column-->
<!--          prop="b"-->
<!--          label="姓名"-->
<!--          width="180">-->
<!--      </el-table-column>-->
<!--      <el-table-column-->
<!--          prop="c"-->
<!--          label="地址">-->
<!--      </el-table-column>-->
<!--    </el-table>-->
  </div>
</template>

<script>


import XLSX from 'xlsx'
import dynamicMerge from '../mixin/dynamicMerge'

export default {
  name: "methodOne",
  mixins: [dynamicMerge],
  mounted() {

    this.getSpanArr(this.sysAppVersion, 'system_type', 'spanArr1');
    this.getSpanArr(this.tableData1, 'a', 'spanArr2');

    console.log(this.tableData1);


    console.log("可以打印表身", this.$refs.tableData1.$refs.bodyWrapper);
    console.log("绑定在table", this.$refs.tableData1);
    console.log("绑定在div", this.$refs.tableData);
    console.log(document.getElementById("tb"));
    console.log("规则数组",this.spanArr.spanArr1)
  },
  data() {
    return {
      a:1,
      tableData1: [
        {a: '111', b: '1', c: '1'},
        {a: '111', b: '1', c: '2'},
        {a: '111', b: '2', c: '3'},
        {a: '111', b: '4', c: '4'},
        {a: '111', b: '2', c: '5'},
        {a: '2222', b: '1', c: '6'},
        {a: '2222', b: '1', c: '7'},
        {a: '111', b: '2222', c: '3333'},
        {a: '111', b: '2222', c: '3333'},
        {a: '222', b: '334'},
        {a: '333'}
      ],

      sysAppVersion: [
        {system_type: "ios", app_version: "1.17.4+31", pv: 1223108, uv: 3456},
        {system_type: "ios", app_version: "2.0.7+35", pv: 506, uv: 9},
        {system_type: "ios", app_version: "1.13.4+28", pv: 9, uv: 2},
        {system_type: "ios", app_version: "1.5.2+15", pv: 3, uv: 1},
        {system_type: "ios", app_version: "2.1.0+36", pv: 27, uv: 1},
        {system_type: "Android", app_version: "1.17.3+31", pv: 265324, uv: 1225},
        {system_type: "Android", app_version: "2.0.5+35", pv: 394779, uv: 1132},
        {system_type: "Android", app_version: "1.13.2+26", pv: 170, uv: 35},
        {system_type: "Android", app_version: "1.11.4+22", pv: 94, uv: 21},
        {system_type: "Android", app_version: '1.17.2+30', pv: 35, uv: 9},
        {system_type: "Android", app_version: '2.0.2', pv: 388, uv: 6},
        {system_type: "Android", app_version: '1.8.3', pv: 76, uv: 6},
        {system_type: "Android", app_version: '1.8.3', pv: 76, uv: 6},
        {system_type: "Android", app_version: '1.8.3', pv: 76, uv: 6},
        {system_type: "Android", app_version: '11.08.2019', pv: 76, uv: 6},
        {system_type: "Android", app_version: '01.10.2019', pv: 76, uv: 6},
      ],
      data1: [
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "HUAWEI",
          "appVersion": "1.9.5+905",
          "uv": "2064",
          "pv": "20291"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "Apple",
          "appVersion": "1.9.5+905",
          "uv": "1464",
          "pv": "30997"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "OPPO",
          "appVersion": "1.9.5+905",
          "uv": "627",
          "pv": "7978"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "HONOR",
          "appVersion": "1.9.5+905",
          "uv": "561",
          "pv": "5031"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "vivo",
          "appVersion": "1.9.5+905",
          "uv": "267",
          "pv": "3621"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "vivo",
          "appVersion": "1.9.2+902",
          "uv": "247",
          "pv": "2092"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "Xiaomi",
          "appVersion": "1.9.5+905",
          "uv": "184",
          "pv": "2247"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "Redmi",
          "appVersion": "1.9.5+905",
          "uv": "151",
          "pv": "2012"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "Apple",
          "appVersion": "1.9.3+903",
          "uv": "89",
          "pv": "1294"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "HUAWEI",
          "appVersion": "1.9.3+903",
          "uv": "65",
          "pv": "370"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "vivo",
          "appVersion": "1.9.3+903",
          "uv": "49",
          "pv": "794"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "Apple",
          "appVersion": "1.8.9+809",
          "uv": "41",
          "pv": "585"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "vivo",
          "appVersion": "1.9.4+904",
          "uv": "39",
          "pv": "435"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "samsung",
          "appVersion": "1.9.5+905",
          "uv": "31",
          "pv": "625"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "OnePlus",
          "appVersion": "1.9.5+905",
          "uv": "30",
          "pv": "422"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "xiaomi",
          "appVersion": "1.9.5+905",
          "uv": "29",
          "pv": "241"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "OPPO",
          "appVersion": "1.9.3+903",
          "uv": "25",
          "pv": "208"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "Apple",
          "appVersion": "1.9.1+822",
          "uv": "25",
          "pv": "348"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "HUAWEI",
          "appVersion": "1.9.1+822",
          "uv": "25",
          "pv": "254"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "HONOR",
          "appVersion": "1.9.3+903",
          "uv": "24",
          "pv": "305"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "Redmi",
          "appVersion": "1.9.3+903",
          "uv": "22",
          "pv": "265"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "Xiaomi",
          "appVersion": "1.9.3+903",
          "uv": "21",
          "pv": "281"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "Apple",
          "appVersion": "1.9.2+902",
          "uv": "20",
          "pv": "525"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "HUAWEI",
          "appVersion": "1.9.4+904",
          "uv": "16",
          "pv": "273"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "vivo",
          "appVersion": "1.8.9+809",
          "uv": "16",
          "pv": "193"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "Apple",
          "appVersion": "1.7.20+720",
          "uv": "14",
          "pv": "151"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "OPPO",
          "appVersion": "1.8.9+809",
          "uv": "13",
          "pv": "191"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "Apple",
          "appVersion": "1.9.0+810",
          "uv": "11",
          "pv": "98"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "HUAWEI",
          "appVersion": "1.8.9+809",
          "uv": "8",
          "pv": "32"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "vivo",
          "appVersion": "1.9.1+822",
          "uv": "8",
          "pv": "168"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "HUAWEI",
          "appVersion": "1.9.2+902",
          "uv": "8",
          "pv": "105"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "HUAWEI",
          "appVersion": "1.5.9+509",
          "uv": "7",
          "pv": "21"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "Redmi",
          "appVersion": "1.9.4+904",
          "uv": "7",
          "pv": "96"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "OPPO",
          "appVersion": "1.9.4+904",
          "uv": "7",
          "pv": "115"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "Xiaomi",
          "appVersion": "1.9.1+822",
          "uv": "7",
          "pv": "34"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "HONOR",
          "appVersion": "1.9.4+904",
          "uv": "6",
          "pv": "164"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "HUAWEI",
          "appVersion": "1.6.3+603",
          "uv": "6",
          "pv": "30"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "HONOR",
          "appVersion": "1.9.1+822",
          "uv": "6",
          "pv": "62"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "OPPO",
          "appVersion": "1.9.1+822",
          "uv": "6",
          "pv": "46"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "Redmi",
          "appVersion": "1.8.9+809",
          "uv": "5",
          "pv": "33"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "Xiaomi",
          "appVersion": "1.9.4+904",
          "uv": "5",
          "pv": "110"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "Xiaomi",
          "appVersion": "1.9.2+902",
          "uv": "5",
          "pv": "17"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "samsung",
          "appVersion": "1.9.3+903",
          "uv": "5",
          "pv": "24"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "Redmi",
          "appVersion": "1.9.1+822",
          "uv": "4",
          "pv": "6"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "HUAWEI",
          "appVersion": "1.8.5+805",
          "uv": "4",
          "pv": "28"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "OPPO",
          "appVersion": "1.9.2+902",
          "uv": "4",
          "pv": "77"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "xiaomi",
          "appVersion": "1.9.3+903",
          "uv": "4",
          "pv": "23"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "Apple",
          "appVersion": "1.5.6+506",
          "uv": "4",
          "pv": "14"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "HUAWEI",
          "appVersion": "1.9.0+810",
          "uv": "3",
          "pv": "3"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "vivo",
          "appVersion": "1.6.3+603",
          "uv": "3",
          "pv": "40"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "OnePlus",
          "appVersion": "1.9.3+903",
          "uv": "3",
          "pv": "11"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "samsung",
          "appVersion": "1.8.9+809",
          "uv": "3",
          "pv": "12"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "samsung",
          "appVersion": "1.9.4+904",
          "uv": "3",
          "pv": "64"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "vivo",
          "appVersion": "1.5.9+509",
          "uv": "3",
          "pv": "12"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "samsung",
          "appVersion": "1.9.1+822",
          "uv": "3",
          "pv": "13"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "HONOR",
          "appVersion": "1.8.9+809",
          "uv": "3",
          "pv": "24"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "OPPO",
          "appVersion": "1.7.20+720",
          "uv": "3",
          "pv": "70"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "OPPO",
          "appVersion": "1.7.3+703",
          "uv": "2",
          "pv": "39"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "OPPO",
          "appVersion": "1.5.9+509",
          "uv": "2",
          "pv": "6"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "OPPO",
          "appVersion": "1.6.3+603",
          "uv": "2",
          "pv": "7"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "samsung",
          "appVersion": "1.9.2+902",
          "uv": "2",
          "pv": "10"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "Xiaomi",
          "appVersion": "1.8.9+809",
          "uv": "2",
          "pv": "16"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "Apple",
          "appVersion": "1.5.10+510",
          "uv": "2",
          "pv": "199"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "HONOR",
          "appVersion": "1.9.0+810",
          "uv": "2",
          "pv": "2"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "Redmi",
          "appVersion": "1.6.3+603",
          "uv": "2",
          "pv": "35"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "HUAWEI",
          "appVersion": "1.7.20+720",
          "uv": "2",
          "pv": "6"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "HONOR",
          "appVersion": "1.9.2+902",
          "uv": "2",
          "pv": "19"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "samsung",
          "appVersion": "1.7.20+720",
          "uv": "2",
          "pv": "30"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "Redmi",
          "appVersion": "1.9.2+902",
          "uv": "2",
          "pv": "26"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "samsung",
          "appVersion": "1.6.3+603",
          "uv": "2",
          "pv": "37"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "Xiaomi",
          "appVersion": "1.6.3+603",
          "uv": "1",
          "pv": "2"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "HONOR",
          "appVersion": "1.7.20+720",
          "uv": "1",
          "pv": "1"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "Apple",
          "appVersion": "1.9.4+904",
          "uv": "1",
          "pv": "1"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "Xiaomi",
          "appVersion": "1.5.9+509",
          "uv": "1",
          "pv": "1"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "Apple",
          "appVersion": "1.7.3+703",
          "uv": "1",
          "pv": "3"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "OPPO",
          "appVersion": "1.8.5+805",
          "uv": "1",
          "pv": "2"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "HUAWEI",
          "appVersion": "1.5.6+506",
          "uv": "1",
          "pv": "1"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "Xiaomi",
          "appVersion": "1.5.6+506",
          "uv": "1",
          "pv": "16"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "OnePlus",
          "appVersion": "1.9.1+822",
          "uv": "1",
          "pv": "2"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "OnePlus",
          "appVersion": "1.9.4+904",
          "uv": "1",
          "pv": "1"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "samsung",
          "appVersion": "1.5.6+506",
          "uv": "1",
          "pv": "2"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "vivo",
          "appVersion": "1.5.6+506",
          "uv": "1",
          "pv": "2"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "xiaomi",
          "appVersion": "1.9.2+902",
          "uv": "1",
          "pv": "8"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "HONOR",
          "appVersion": "1.5.9+509",
          "uv": "1",
          "pv": "15"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "samsung",
          "appVersion": "1.5.9+509",
          "uv": "1",
          "pv": "5"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "HONOR",
          "appVersion": "1.6.3+603",
          "uv": "1",
          "pv": "21"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "xiaomi",
          "appVersion": "1.9.0+810",
          "uv": "1",
          "pv": "3"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "HUAWEI",
          "appVersion": "1.7.3+703",
          "uv": "1",
          "pv": "19"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "xiaomi",
          "appVersion": "1.9.1+822",
          "uv": "1",
          "pv": "2"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "OnePlus",
          "appVersion": "1.9.2+902",
          "uv": "1",
          "pv": "1"
        },
        {
          "appId": "flutter-mobile-vendor-0403",
          "phoneType": "samsung",
          "appVersion": "1.8.5+805",
          "uv": "1",
          "pv": "1"
        }
      ],


      spanArr: {
        spanArr1: [],
        spanArr2: []
      }

    }
  },
  methods: {

    cellMerge({row, column, rowIndex, columnIndex}) {
      if (columnIndex === 0) {
        const _row = this.spanArr.spanArr1[rowIndex]
        const _col = _row > 0 ? 1 : 0
        console.log("合并规则", _row, _col)
        return {
          rowspan: _row,
          colspan: _col
        }
      }
    },
    cellMerge1({row, column, rowIndex, columnIndex}) {
      if (columnIndex === 0) {
        const _row = this.spanArr.spanArr2[rowIndex]
        const _col = _row > 0 ? 1 : 0
        // console.log("shuju", _row, _col)
        return {
          rowspan: _row,
          colspan: _col
        }
      }
    },


    exportExcel() {
      let workbook = XLSX.utils.book_new();
      const table = this.$refs.tableData;
      const worksheet = XLSX.utils.table_to_sheet(table,{type:'array',raw:true});





      XLSX.utils.book_append_sheet(workbook, worksheet, 'sheet名称');
      XLSX.writeFile(workbook, '表格名称1.xlsx')

      // let ws = XLSX.utils.json_to_sheet([
      //   {a: '111', b: '1', c: '1'},
      //   {a: '111', b: '1', c: '2'},
      //   {a: '111', b: '2', c: '3'},
      //   {a: '111', b: '4', c: '4'},
      //   {a: '111', b: '2', c: '5'},
      //   {a: '2222', b: '1', c: '6'},
      //   {a: '2222', b: '1', c: '7'},
      //   {a: '111', b: '2222', c: '3333'},
      //   {a: '111', b: '2222', c: '3333'},
      //   {a: '333'}
      // ], {header:["a","b","c"], skipHeader:true});
      //
      // XLSX.utils.book_append_sheet(workbook,ws,'sheet名称');
      // XLSX.writeFile(workbook,'1111.xlsx');

    }


  },
}
</script>

<style scoped>
.element {
  width: 1200px;
  /*height: 1000px;*/
  margin: 30px auto 0;
}
</style>