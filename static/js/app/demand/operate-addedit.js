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
        title: '提供服务',
        field: 'tgfw',
        readonly: true,
        type: 'select',
        multiple: true,
        key: 'dp_tgfw'
    }, {
        title: '收费模式',
        field: 'feeMode',
        readonly: true,
        type: 'select',
        key: 'fee_mode'
    }, {
        title: '付款周期',
        field: 'payCycle',
        readonly: true,
        type: 'select',
        key: 'pay_cycle'
    }, {
        title: '擅长运营类目',
        field: 'scyylm',
        readonly: true,
        hidden: true
    }, {
        title: '成功案例展示',
        field: 'sucCase',
        readonly: true,
        link: true
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
        detailCode: '612117'
    });
});