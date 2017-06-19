$(function() {

    var code = getQueryString('code');
    var view = getQueryString('v');


    var fields = [{
        title: '所属企业',
        field: 'companyName',
        readonly: true,
        // type: 'm2o',
        // url: $('#basePath').val() + 'company_addedit.html',
        // codeField: 'companyCode'
    }, {
        field: 'qualifyCode',
        title: '所属资质',
        listCode: "612016",
        search: true,
        type: 'select',
        keyName: 'code',
        valueName: 'name',
        searchName: 'name',
        readonly: true,
    }, {
        title: '价格区间',
        required: true,
        formatter: function(value, record) {
            return moneyFormat(record.quoteMin) + '~' + moneyFormat(record.quoteMax);
        },
        readonly: true,
    }, {
        title: '拥有棚影数量',
        field: 'pyNum',
        readonly: true
    }, {
        title: '拥有摄影师数量',
        field: 'sysNum',
        readonly: true
    }, {
        title: '是否接受定制需求',
        field: 'isDz',
        type: 'select',
        data: { '0': '否', '1': '是' },
        readonly: true
    }, {
        title: '擅长拍摄类目',
        field: 'scpslm',
        readonly: true
    }, {
        title: '代表作品',
        field: 'works',
        readonly: true,
        type: 'img'
    }, {
        title: '广告图',
        field: 'advPic',
        readonly: true,
        type: 'img'
    }, {
        title: '缩略图',
        field: 'pic',
        readonly: true,
        type: 'img'
    }, {
        title: '详情描述',
        field: 'description',
        readonly: true,
        type: 'textarea',
    }];

    buildDetail({
        fields: fields,
        code: code,
        view: view,
        detailCode: '612087'
    });
});