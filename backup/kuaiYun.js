function computedCols(data) {
    var titleList = data[0];
    var dataCols = [
        {
            "field": "0",
            "title": titleList[0]
        }, {
            "field": "1",
            "title": titleList[1]
        }, {
            "field": "15",
            "title": titleList[15],
            editable: {
                type: 'text',
                title: titleList[15],
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
            "field": "16",
            "title": titleList[16],
            formatter: function (value, row, index) {
                return new Decimal(value || 0);
            }
        }, {
            "field": "17",
            "title": titleList[17],
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

            /* 找到区间价格 */
            var nextValue = Number(row[ridx("P")]).toFixed(2);
            var fixedPrice = 0;
            var economicPrice = 0;
            if (betweenEqual(nextValue, [0, 150])) {
                fixedPrice = row[ridx("D")];
                economicPrice = row[ridx("J")];
            } else if (betweenEqual(nextValue, [151, 300])) {
                fixedPrice = row[ridx("E")];
                economicPrice = row[ridx("K")];
            } else if (betweenEqual(nextValue, [301, 500])) {
                fixedPrice = row[ridx("F")];
                economicPrice = row[ridx("L")];
            } else if (betweenEqual(nextValue, [501, 1000])) {
                fixedPrice = row[ridx("G")];
                economicPrice = row[ridx("M")];
            } else if (greaterThanOrEqualTo(nextValue, 1001)) {
                fixedPrice = row[ridx("H")];
                economicPrice = row[ridx("N")];
            }

            /* 定日达成本价格： P3*定日达单价+P3*O3 （如果P3的数值在D2的范围内 就用P3*D3+P3*O3）*/
            var Q3 = mul(nextValue, add(fixedPrice, row[ridx("O")]));
            /* 经济快运成本价格： P3*经济快运单价+P3*O3 （如果P3的数值在J2的范围内 就用P3*J3+P3*O3）*/
            var R3 = mul(nextValue, add(economicPrice, row[ridx("O")]));

            /* 最低费与实际费比较 */
            Q3 = greaterThan(Q3, row[ridx('C')]) ? Q3 : row[ridx('C')];
            R3 = greaterThan(R3, row[ridx('I')]) ? R3 : row[ridx('I')];

            /* 更新定日达成本价格显示 */
            $($el).parent().next().text(Q3);

            /* 更新经济快运成本价格显示 */
            $($el).parent().next().next().text(R3);
        }
    });
}

var dataCols = computedCols(data);
var dataSource = data.slice(2);

initTable(dataCols, dataSource);
