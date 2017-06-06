$(function() {

    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'title',
        title: '标题',
        search: true
    }, {
        field: 'type',
        title: '类型',
        type: 'select',
        data: { '1': '公告', '2': '新闻' },
        search: true,
    }, {
        title: '发送方',
        field: "sendPlatform",
        maxlength: 255
    }, {
        title: '摘要',
        field: "summary",
        maxlength: 255,
        type: "textarea",
        normalArea: true,
        required: true,
    }, {
        field: 'updater',
        title: '发布人'
    }, {
        title: "状态",
        field: 'status',
        type: "select",
        data: { '0': '草稿', '1': '已发布', '2': '已下架' }
    }, {
        field: 'updateDatetime',
        title: '发布时间',
        formatter: dateTimeFormat,
    }, {
        field: 'remark',
        title: '备注'
    }];
    buildList({
        columns: columns,
        pageCode: '612005',
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
        if (selRecords[0].status != 0) {
            toastr.warning("该资讯不能被发布");
            return;
        }
        confirm("确认发布该资讯？").then(function() {
            reqApi({
                code: '612002',
                json: { "code": selRecords[0].code }
            }).then(function() {
                toastr.info("操作成功");
                $('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
            });
        });
    });
    $('#downBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if (selRecords[0].status != 1) {
            toastr.warning("该资讯还未发布,不能下架");
            return;
        }
        confirm("确认撤下该资讯？").then(function() {
            reqApi({
                code: '612003',
                json: { "code": selRecords[0].code }
            }).then(function() {
                toastr.info("操作成功");
                $('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
            });
        });
    });
    $('#edit2Btn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if (selRecords[0].status == '1') {
            toastr.warning("该资讯发布中，不能修改");
            return;
        }
        window.location.href = 'infoManage_addedit.html?code=' + selRecords[0].code;

    });
    $('#detail2Btn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = 'infoManage_detail.html?v=1&code=' + selRecords[0].code;

    });
});