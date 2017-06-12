$(function() {

    var code = getQueryString('code');
    var view = getQueryString('v');


    var fields = [{
        title: '手机号码',
        field: 'mobile',
        required: true,
        readonly: !!view
    }, {
        title: '注册时间',
        field: 'updateDatetime',
        required: true,
        formatter: dateTimeFormat,
        readonly: !!view
    }, {
        field: 'status',
        title: '状态',
        type: 'select',
        key: 'user_status',
        readonly: !!view
    }];

    buildDetail({
        fields: fields,
        code: { userId: code },
        view: view,
        detailCode: '805056',
    });
});