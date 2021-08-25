export default {
    data() {
        return {
            spanArr:{
            }
        }
    },
    methods: {
        groupBy(data, params) {
            const groups = {}
            data.forEach(v => {
                const group = JSON.stringify(v[params])
                groups[group] = groups[group] || []
                groups[group].push(v)
            })
            return Object.values(groups)
        },


        getSpanArr(data, params, spanKey) {
            // 接收重构数组
            let arr = []

            // 设置索引
            let pos = 0

            // 控制合并的数组
            this.spanArr[spanKey] = []

            // arr 处理
            this.groupBy(data, params).map(v => (arr = arr.concat(v)))

            // this.tableData = arr
            arr.map(res => {
                data.shift()
                data.push(res)
            })

            // spanArr 处理
            const reData = arr.map(v => v[params])
            reData.reduce((old, cur, i) => {
                if (i === 0) {
                    this.spanArr[spanKey].push(1)
                    pos = 0
                } else {
                    if (cur === old) {
                        this.spanArr[spanKey][pos] += 1
                        this.spanArr[spanKey].push(0)
                    } else {
                        this.spanArr[spanKey].push(1)
                        pos = i
                    }
                }
                return cur
            }, {})
        }
    }
}