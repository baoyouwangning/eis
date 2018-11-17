// 定义一些公用方法
function ridx(char) {
    return char.charCodeAt(0) - 'A'.charCodeAt(0);
}

function add() {
    var res = 0;
    for (var i = 0; i < arguments.length; i++) {
        res = Decimal.add(res, arguments[i]);
    }
    return res;
}

function mul(args) {
    var res = 1;
    for (var i = 0; i < arguments.length; i++) {
        res = Decimal.mul(res, arguments[i]);
    }
    return res;
}

// 呼伦贝尔双11价格单(3).xlsx 展示计算页
function showComputePage(data) {

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
        // $.fn.editable.defaults.mode = 'inline';

        $("#eis-table").bootstrapTable({
            toolbar: "#toolbar",
            idField: "0",
            pagination: true,
            showRefresh: true,
            search: true,
            clickToSelect: true,
            // url: '/api/data',
            queryParams: function (param) {
                return {};
            },
            data: dataSource,
            columns: dataCols,
            onEditableSave: function (field, row, oldValue, $el) {
                // debugger;
                console.log(field, row, oldValue, $el);

                /* 开始计算
                 *
                 * */
                // 每票基础费用 H2=B2+C2+D2
                var H2 = add(row[ridx("B")], row[ridx("C")], row[ridx("D")]);

                // 续重 I2=E2+F2+G2+0.3
                var I2 = add(row[ridx("E")], row[ridx("F")], row[ridx("G")], 0.3);

                // 汽车成本价格 K2=(I2*J2)+H2
                var K2 = add(mul(I2, row[ridx("J")]), H2);

                // 计算首重 N2=H2+L2
                var N2 = add(H2, row[ridx("L")]);

                // 计算续重 O2=E2+F2+M2+0.3
                var O2 = add(row[ridx("E")], row[ridx("F")], row[ridx("M")], 0.3);

                // 空运成本价格 P2=N2+O2*J2
                var P2 = add(N2, mul(O2, row[ridx("J")]));

                // 更新汽车成本显示
                $($el).parent().next().text(K2);

                // 更新空运成本显示
                $($el).parent().next().next().text(P2);
            }
        });
    }

    var dataCols = computedCols(data);
    var dataSource = data.slice(1);

    initTable(dataCols, dataSource);
}

// 快运计算 展示计算页
function showComputePage(data) {

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
        // $.fn.editable.defaults.mode = 'inline';

        $("#eis-table").bootstrapTable({
            toolbar: "#toolbar",
            idField: "0",
            pagination: true,
            showRefresh: true,
            search: true,
            clickToSelect: true,
            // url: '/api/data',
            queryParams: function (param) {
                return {};
            },
            data: dataSource,
            columns: dataCols,
            onEditableSave: function (field, row, oldValue, $el) {
                // debugger;
                console.log(field, row, oldValue, $el);

                /* 开始计算
                 *
                 * */
                // 每票基础费用 H2=B2+C2+D2
                var H2 = add(row[ridx("B")], row[ridx("C")], row[ridx("D")]);

                // 续重 I2=E2+F2+G2+0.3
                var I2 = add(row[ridx("E")], row[ridx("F")], row[ridx("G")], 0.3);

                // 汽车成本价格 K2=(I2*J2)+H2
                var K2 = add(mul(I2, row[ridx("J")]), H2);

                // 计算首重 N2=H2+L2
                var N2 = add(H2, row[ridx("L")]);

                // 计算续重 O2=E2+F2+M2+0.3
                var O2 = add(row[ridx("E")], row[ridx("F")], row[ridx("M")], 0.3);

                // 空运成本价格 P2=N2+O2*J2
                var P2 = add(N2, mul(O2, row[ridx("J")]));

                // 更新汽车成本显示
                $($el).parent().next().text(K2);

                // 更新空运成本显示
                $($el).parent().next().next().text(P2);
            }
        });
    }

    var dataCols = computedCols(data);
    var dataSource = data.slice(1);

    initTable(dataCols, dataSource);
}
