$(function() {
    showPermissionControl();

    var router = '/general/company';

    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'name',
        title: '名称',
        search: true
    }, {
        field: 'contacts',
        title: '联系人'
    }, {
        field: 'mobile',
        title: '联系人电话'
    }, {
        field: 'isHot',
        title: '热门',
        type: 'select',
        search: true,
        data: { '0': '否', '1': '是' }
    }, {
        title: '更新时间',
        field: 'updateDatetime',
        formatter: dateTimeFormat,
    }];
    buildList({
        columns: columns,
        pageCode: ' ',
        deleteCode: ' ',
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