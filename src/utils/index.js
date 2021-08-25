// 导出excel
export function export2Excel(columns, list) {
    require.ensure([], () => {
        const {export_json_to_excel} = require('../utils/exporToExcel/Export2Excel');
        let tHeader = []
        let filterVal = []
        if (!columns) {
            return;
        }
        columns.forEach(item => {
            tHeader.push(item.title)
            filterVal.push(item.key)
        })
        const data = list.map(v => filterVal.map(j => v[j]))
        export_json_to_excel(tHeader, data, '数据列表');
    })
}
