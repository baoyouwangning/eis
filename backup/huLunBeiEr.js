function computedCols(data) {
    var titleList = data[0];
    var dataCols = [
        {
            "field": "0",
            "title": titleList[0]
        }, {
            "field": "9",
            "title": titleList[9],
            editable: {
                type: 'text',
                title: titleList[9],
                validate: function (v) {
                    if (isNaN(v)) {
                        return '请输入数字～'
                    }

                    return false;
                }
            }
        }, {
            "field": "10",
            "title": titleList[10],
            formatter: function (value, row, index) {
                return new Decimal(value);
            }
        }, {
            "field": "15",
            "title": titleList[15],
            formatter: function (value, row, index) {
                return new Decimal(value);
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
            row[ridx("J")] = Number(row[ridx("J")]).toFixed(2);

            /*  每票基础费用 H2=B2+C2+D2 */
            var H2 = add(row[ridx("B")], row[ridx("C")], row[ridx("D")]);

            /*  续重 I2=E2+F2+G2+0.3 */
            var I2 = add(row[ridx("E")], row[ridx("F")], row[ridx("G")], 0.3);

            /*  汽车成本价格 K2=(I2*J2)+H2 */
            var K2 = add(mul(I2, row[ridx("J")]), H2);

            /* 计算首重 N2=H2+ */
            var N2 = add(H2, row[ridx("L")]);

            /* 计算续重 O2=E2+F2+M2+0.3 */
            var O2 = add(row[ridx("E")], row[ridx("F")], row[ridx("M")], 0.3);

            /* 空运成本价格 P2=N2+O2*J2 */
            var P2 = add(N2, mul(O2, row[ridx("J")]));

            /* 更新汽车成本显示 */
            $($el).parent().next().text(K2);

            /* 更新空运成本显示 */
            $($el).parent().next().next().text(P2);
        }
    });
}

var dataCols = computedCols(data);
var dataSource = data.slice(1);

initTable(dataCols, dataSource);
