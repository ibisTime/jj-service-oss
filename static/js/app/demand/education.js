$(function() {


    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'name',
        title: '服务名称',
    }, {
        field: 'qualifyCode',
        title: '所属资质',
        listCode: "612016",
        search: true,
        type: 'select',
        keyName: 'code',
        valueName: 'name',
        searchName: 'name',
        visible: false
    }, {
        title: "所属资质",
        field: "qualityName",
    }, {
        field: 'companyName',
        title: '所属企业',
        search: true,
        formatter: function(v, r) {
            return r.company.name;
        }
    }, {
        field: 'pubisher',
        title: '联系人',
        formatter: function(v, r) {
            return r.company.corporation;
        }
    }, {
        title: '联系电话',
        field: 'mobile',
        formatter: function(v, r) {
            return r.company.mobile;
        }
    }, {
        title: '价格区间',
        formatter: function(value, record) {
            return moneyFormat(record.quoteMin) + ' ~ ' + moneyFormat(record.quoteMax);
        }
    }, {
        field: 'status',
        title: '状态',
        type: 'select',
        data: { '0': '违规', '1': '正常' }
    }, {
        field: 'dealNote',
        title: '违规提示'
    }, {
        field: 'location',
        title: '热门',
        type: 'select',
        search: true,
        data: { '0': '普通', '1': '热门' }
    }, {
        field: 'publishDatetime',
        title: '更新时间',
        formatter: dateTimeFormat
    }];
    buildList({
        pageCode: "612096",
        columns: columns,
        searchParams: {

        }
    });


    $('#illegalBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "illegalEducation.html?code=" + selRecords[0].code + "&name=" + encodeURI(encodeURI(selRecords[0].name));
    });

    $('#hotBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "hotEducation.html?code=" + selRecords[0].code + "&name=" + encodeURI(encodeURI(selRecords[0].name));
    });
});