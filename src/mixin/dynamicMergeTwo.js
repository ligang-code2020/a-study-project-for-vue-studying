export default {
    data() {
        return {
        }
    },

    computed: {
        tableData() {
            // 格式化接口返回的表格数据，每一项，对象转数组
            let formatTableData = []
            this.originTableData2.map(item => {
                formatTableData.push(Object.values(item))
            })
            return formatTableData
        }
    },
    methods: {
        handleData(originTableData){
            // 格式化接口返回的表格数据，每一项，对象转数组
            let formatTableData = []
            originTableData.map(item => {
                formatTableData.push(Object.values(item))
            })
            return formatTableData
        },

        originMap(rowLength, colLength) {
            // 初始化一个5X9的二维数组，每一项的值均为[1,1]
            const rows = rowLength;
            let arr = new Array()
            for (let i = 0; i < rows; i++) {
                arr[i] = new Array()
                for (let j = 0; j < colLength; j++) {
                    arr[i][j] = [1, 1]
                }
            }
            return arr
        },
        mergedMap(rowLength, colLength) {
            /**
             * 动态生成myMappings
             * --------------------------------步骤1------------------------------------
             * 合并第0列的单元格时，从表格最后一行遍历到第一行，修改originMap的初始值
             * 如果tab[n][0] === tab[n-1][0]，则第n-1行第0列的X坐标 += 第n行第0列的X坐标
             * 再将第n行第0列的X坐标和Y坐标，均赋值为[0, 0]
             * [0, 0]表示该单元格不显示，因为被合并了
             * --------------------------------步骤2------------------------------------
             * 合并第1列的单元格时，需考虑第0列上下两行的X坐标的值是否相等
             * 只有tab[n][0] === tab[n-1][0]时, 继续以步骤1的方法遍历，修改originMap的初始值
             */
            const tab = this.tableData
            const map = this.originMap(rowLength, colLength)
            const rows = rowLength - 1
            // 合并第0列
            for (let r = rows; r > 0; r--) {
                if (tab[r][0] === tab[r - 1][0]) {
                    map[r - 1][0][0] += map[r][0][0]
                    map[r][0] = [0, 0]
                }
            }
            // 合并第1列，与第0列的值有关
            for (let r = rows; r > 0; r--) {
                if (tab[r][1] === tab[r - 1][1] && tab[r][0] === tab[r - 1][0]) {
                    map[r - 1][1][0] += map[r][1][0]
                    map[r][1] = [0, 0]
                }
            }
            // 合并第2列
            for (let r = rows; r > 0; r--) {
                if (tab[r][2] === tab[r - 1][2] && tab[r][1] === tab[r - 1][1] && tab[r][0] === tab[r - 1][0]) {
                    map[r - 1][2][0] += map[r][2][0];
                    map[r][2] = [0, 0];
                }
            }

            // 合并第3列
            // for (let r = rows; r > 0; r--) {
            //     if (tab[r][3] === tab[r - 1][3] && tab[r][2] === tab[r - 1][2] && tab[r][1] === tab[r - 1][1] && tab[r][0] === tab[r - 1][0]) {
            //         map[r - 1][3][0] += map[r][3][0];
            //         map[r][3] = [0, 0];
            //     }
            // }


            return map
        },
    }

}