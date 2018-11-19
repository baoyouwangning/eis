function computedCols(data) {
    var titleList = data[0];
    var dataCols = [
        {
            "field": "0",
            "title": titleList[0]
        }, {
            "field": "6",
            "title": titleList[6]
        }, {
            "field": "7",
            "title": titleList[7],
            editable: {
                type: 'text',
                title: titleList[7],
                validate: function (v) {
                    if (isNaN(v)) {
                        return '请输入数字～'
                    }

                    return false;
                }
            },
            formatter: function (value, row, index) {
                return new Decimal(value || 0);
            }
        }, {
            "field": "8",
            "title": titleList[8],
            formatter: function (value, row, index) {
                return new Decimal(value || 0);
            }
        }
    ];

    return dataCols;
}

function initTable(dataCols, dataSource) {
    /* $.fn.editable.defaults.mode = 'inline'; */

    $("#eis-table").bootstrapTable({
        toolbar: "#toolbar",
        idField: "0",
        pagination: true,
        showRefresh: true,
        search: true,
        clickToSelect: true,
        data: dataSource,
        columns: dataCols,
        onEditableSave: function (field, row, oldValue, $el) {
            console.log(field, row, oldValue, $el);

            /* 数据修正 */
            row[ridx("H")] = Number(row[ridx("H")]).toFixed(2);

            /* 计算成本价格 I2=(B2+C2+D2+E2+F2)*H2 */
            var I2 = mul(add(row[ridx("B")], row[ridx("C")], row[ridx("D")], row[ridx("E")], row[ridx("F")]), row[ridx("H")]);

            /* 更新汽车成本显示 */
            $($el).parent().next().text(I2);
        }
    });
}

var dataCols = computedCols(data);
var dataSource = data.slice(1);

initTable(dataCols, dataSource);
