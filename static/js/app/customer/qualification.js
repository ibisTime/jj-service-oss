$(function() {



    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'type',
        title: '资质类型',
        search: true,
        formatter: Dict.getNameForList('qua_kind'),
        type: 'select',
        key: 'qua_kind'
    }, {
        field: 'name',
        title: '资质名称',
    }, {
        field: 'updateDatetime',
        title: '更新时间',
        formatter: dateTimeFormat
    }];

    buildList({
        columns: columns,
        pageCode: '612015',
        // deleteCode: ' ',
        searchParams: {
            companyCode: OSS.company
        }
    })

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