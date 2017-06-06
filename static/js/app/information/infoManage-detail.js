$(function() {
    var code = getQueryString('code');
    var view = getQueryString('v');


    var fields = [{
        title: '标题',
        field: 'title',
        maxlength: 60,
        required: true,
        readonly: !!view,
    }, {
        title: '类型',
        field: 'type',
        type: 'select',
        data: { '1': '公告', '2': '新闻' },
        required: true,
        readonly: !!view,
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
        title: '内容',
        field: 'content',
        type: 'textarea',
        required: true,
        readonly: !!view,
    }, {
        title: '备注',
        field: 'remark',
        maxlength: 30,
        readonly: !!view,
    }];

    var options = {
        fields: fields,
        code: code,
        detailCode: '612007',
        view: view,
    };
    if (view) {

        options.buttons = [{
            title: "返回",
            handler: function() {
                goBack();
            }
        }];
    };


    buildDetail(options);




});