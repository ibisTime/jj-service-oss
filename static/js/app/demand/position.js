$(function() {


    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'name',
        title: '名称',
        search: true,
    }, {
        field: 'kind',
        title: '类别',
        type: 'select',
        key: 'position_kind',
        formatter: Dict.getNameForList('position_kind'),
        search: true
    }, {
        field: 'companyName',
        title: '所属企业',
        search: true
    }, {
        field: 'publisher',
        title: '联系人',
        formatter: function(v, r) {
            return r.company.contacts;
        }
    }, {
        field: 'mobile',
        title: '手机号',
        formatter: function(v, r) {
            return r.company.mobile;
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
        data: { '0': '否', '1': '是' }
    }, {
        field: 'publishDatetime',
        title: '更新时间',
        formatter: dateTimeFormat
    }];
    buildList({
        columns: columns,
        pageCode: '612160',
        searchParams: {}
    });

    $('#illegalBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "illegalPosition.html?code=" + selRecords[0].code + "&name=" + encodeURI(encodeURI(selRecords[0].name));
    });

    $('#hotBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "hotPosition.htm?code=" + selRecords[0].code + "&name=" + encodeURI(encodeURI(selRecords[0].name));
    });
});