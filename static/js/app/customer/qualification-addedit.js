$(function() {
    var code = getQueryString('code');
    var view = getQueryString('v');


    var fields = [{
        title: '资质类型',
        field: 'type',
        type: 'select',
        formatter: Dict.getNameForList('qua_kind'),
        key: 'qua_kind',
        readonly: !!view
    }, {
        title: '资质名称',
        field: 'name',
        maxlength: 30,
        readonly: !!view
    }, {
        title: '资质简介',
        field: 'description',
        type: 'textarea',
        readonly: !!view
    }];


    buildDetail({
        fields: fields,
        code: code,
        view: view,
        detailCode: '612017',
        editCode: '612012'
    });
});