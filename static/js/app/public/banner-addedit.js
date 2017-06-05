$(function() {
    var code = getQueryString('code');
    var view = getQueryString('v');

    var fields = [{
        field: "status",
        required: 'true',
        value: 1,
        hidden: true
    }, {
        field: "companyCode",
        hidden: true,
        value: sessionStorage.getItem('systemCode')
    }, {
        field: "type",
        value: 2,
        required: 'true',
        hidden: true
    }, {
        field: "belong",
        title: '属于',
        value: 1,
        required: 'true',
        hidden: true
    }, {
        field: "parentCode",
        value: 0,
        required: 'true',
        hidden: true
    }, {
        field: "contentType",
        required: 'true',
        value: 1,
        hidden: true
    }, {
        field: "isCompanyEdit",
        required: 'true',
        value: 0,
        hidden: true
    }, {
        title: '名称',
        field: 'name',
        required: true,
        maxlength: 255,
        readonly: !!view,
    }, {
        title: '显示顺序',
        field: 'orderNo',
        readonly: !!view,
        required: true,
        'Z+': true,
        maxlength: 4
    }, {
        title: '所在位置',
        field: 'location',
        readonly: !!view,
        type: 'select',
        data: { '1': '首页', '2': '人才首页', '3': '服务首页', '4': '登录页面' },
        required: true,
    }, {
        title: '图片',
        field: 'pic',
        type: 'img',
        readonly: !!view,
        required: true
    }, {
        title: '备注',
        field: 'remark',
        maxlength: 255,
        readonly: !!view
    }];

    var options = {};
    if (view) {
        options.buttons = [{
            'title': '返回',
            handler: function() {
                goBack();
            }
        }];
    }
    buildDetail({
        fields: fields,
        code: code,
        view: view,
        addCode: "806040",
        detailCode: '806053',
        editCode: '806042'
    });
});