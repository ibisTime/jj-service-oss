$(function() {

    var code = getQueryString('code');
    var view = getQueryString('v');


    var fields = [{
        title: '所属企业',
        field: 'companyName',
        readonly: true,
        type: 'm2o',
        url: $('#basePath').val() + 'company_addedit.html',
        codeField: 'companyCode'
    }, {
        title: '职位名称',
        field: 'name',
        required: true,
        readonly: true,
    }, {
        title: '职位类别',
        field: 'kind',
        required: true,
        type: 'select',
        readonly: true,
        key: 'position_kind'
    }, {
        title: '工作地点',
        required: true,
        readonly: true,
        formatter: function(v, r) {
            return r.province + ' ' + r.city;
        }
    }, {
        title: '工作经验',
        field: 'experience',
        readonly: true,
        type: 'select',
        data: { '1': '1年内', '2': '1-3年', '3': '3-5年', '4': '5年以上' }
    }, {
        title: '学历要求',
        field: 'education',
        type: 'select',
        readonly: true,
        key: 'edu_kind',
    }, {
        title: '工作性质',
        field: 'type',
        type: 'select',
        readonly: true,
        key: 'work_type'
    }, {
        title: '招聘人数',
        readonly: true,
        field: 'jobNum',
        maxlength: 11,
    }, {
        title: '职位月薪',
        field: 'msalary',
        readonly: true,
        maxlength: 255,
    }, {
        title: '职位描述',
        field: 'description',
        readonly: true,
        type: 'textarea',
    }];

    buildDetail({
        fields: fields,
        code: code,
        view: view,
        detailCode: '612161'
    });
});