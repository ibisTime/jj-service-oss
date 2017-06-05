$(function() {

    var code = getQueryString('code');
    var view = !!getQueryString('v');

    var fields = [{
        title: '名称',
        field: 'name',
        readonly: true
    }, {
        title: '所属企业',
        field: 'company-name',
        readonly: true,
        type: 'm2o',
        // url: $('#basePath').val() + '/general/company_addedit.htm',
        // codeField: 'companyCode'
    }, {
        title: '所属资质',
        field: 'qualityName',
        readonly: true,
        type: 'm2o',
        // url: $('#basePath').val() + '/general/qualification_addedit.htm',
        // codeField: 'qualityCode'
    }, {
        title: '报价区间',
        field: 'quoteMin',
        readonly: true,
        formatter: function(v, r) {
            return moneyFormat(r.quoteMin) + ' ~ ' + moneyFormat(r.quoteMax);
        }
    }, {
        title: '简介',
        field: 'description',
        readonly: true
    }];

    buildDetail({
        fields: fields,
        code: code,
        view: view,
        detailCode: ' ',
        editCode: ' '
    });


});