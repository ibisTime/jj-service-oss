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
        maxlength: 255,
        required: true,
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

    var codeEdit = code ? "612001" : "612000";
    options.buttons = [{
        title: '保存',
        handler: function() {
            if ($('#jsForm').valid()) {
                var data = $('#jsForm').serializeObject();
                data['code'] = code;
                data['approver'] = sessionStorage.getItem('userName');
                data["isPublish"] = "0";
                reqApi({
                    code: codeEdit,
                    json: data
                }).done(function() {
                    toastr.info('操作成功！')
                    setTimeout(function() {
                    window.location.href = "./information.html"
                }, 1000);
                });
            }
        }
    }, {
        title: '直接发布',
        handler: function() {
            if ($('#jsForm').valid()) {
                var data = $('#jsForm').serializeObject();
                data['code'] = code;
                data['approver'] = sessionStorage.getItem('userName');
                data["isPublish"] = "1";
                reqApi({
                    code: codeEdit,
                    json: data
                }).done(function() {
                    toastr.info('操作成功！')
                    setTimeout(function() {
                    window.location.href = "./information.html"
                }, 1000);
                });
            }
        }
    }];

    buildDetail(options);




});