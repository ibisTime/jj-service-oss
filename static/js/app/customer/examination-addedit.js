$(function() {

    var code = getQueryString('code');
    var view = getQueryString('v');
    var isDetail = !!getQueryString('detail');

    var approveNoteField = {
        title: '审核意见',
        field: 'approveNote',
        maxlength: 255,
        required: true,
        readonly: false
    };
    var payList = [approveNoteField]
    var buttons = [{
        title: '通过',
        handler: function() {
            if ($('#jsForm').valid()) {
                var data = $('#jsForm').serializeObject();
                data.approveResult = '1';
                data.approveUser = sessionStorage.getItem('userName');
                data.code = code;
                reqApi({
                    code: '802701',
                    json: data
                }).done(function(data) {
                    sucDetail();
                });
            }
        }
    }, {
        title: '不通过',
        handler: function() {
            if ($('#jsForm').valid()) {
                var data = $('#jsForm').serializeObject();
                data.approveResult = '0';
                data.approveUser = sessionStorage.getItem('userName');
                data.code = code;
                reqApi({
                    code: '802701',
                    json: data
                }).done(function(data) {
                    sucDetail();
                });
            }
        }
    }, {
        title: '返回',
        handler: function() {
            goBack();
        }
    }];
    if (isDetail) {
        approveNoteField = {
            title: '审核说明',
            field: 'approveNote',
            maxlength: 250
        };

        buttons = "";
        payList = [{
            field: 'approveUser',
            title: '审核人'
        }, {
            field: 'payDatetime',
            title: '审核日期',
            formatter: dateTimeFormat
        }, approveNoteField]
    }
    var fields = [{
        title: '申请企业',
        field: 'company-name',
        readonly: true,
        type: 'm2o',
        listCode: '',
        url: $('#basePath').val() + '/general/company_addedit.htm',
        codeField: 'companyCode'
    }, {
        title: '资质',
        field: 'certificate-name',
        readonly: true,
        type: 'm2o',
        url: $('#basePath').val() + '/general/qualification_addedit.htm',
        codeField: 'certificateCode'
    }, {
        title: '报价区间',
        field: 'remark',
        readonly: true,
        formatter: function(v, r) {
            return r.company.remark;
        }
    }];
    fields = fields.concat(payList)

    var options = {
        fields: fields,
        code: code,
        detailCode: '612077',
        view: true,
        buttons: buttons
    };

    buildDetail(options);
});