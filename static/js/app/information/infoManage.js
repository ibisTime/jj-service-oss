$(function() {
    //按钮权限判断
    showPermissionControl();

    var router = '/general/news';
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
        field: 'updater',
        title: '发布人'
    }, {
        field: 'updateDatetime',
        title: '发布时间',
        formatter: dateTimeFormat,
    }, {
        field: 'remark',
        title: '备注'
    }];
    buildList(router, columns);

    $('#rockBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            alert("请选择记录");
            return;
        }
        var url = $("#basePath").val() + router + '/cancel';
        var data = { code: selRecords[0].code };
        ajaxPost(url, data).then(function(res) {
            if (res.success) {
                alert('操作成功');
                $('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
            } else {
                alert(res.msg);
            }
        });
    });
});