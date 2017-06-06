$(function() {


    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'name',
        title: '名称',
        search: true
    }, {
        field: 'corporation',
        title: '公司法人'
    }, {
        field: 'mobile',
        title: '联系人电话'
    }, {
        field: 'location',
        title: 'UI位置',
        type: 'select',
        search: true,
        data: { '0': '普通', '1': '热门' }
    }, {
        title: '更新时间',
        field: 'updateDatetime',
        formatter: dateTimeFormat,
    }];
    buildList({
        columns: columns,
        pageCode: '612060',
        searchParams: {
            companyCode: OSS.company
        }
    });
    $('#hotBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "hotCompany.html?code=" + selRecords[0].code;
    });
})