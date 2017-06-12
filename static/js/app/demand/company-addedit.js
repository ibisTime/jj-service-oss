$(function() {
    var code = getQueryString('code');
    var isBranch = getQueryString('b');
    if (isBranch) {
        var cmp = getCompany(getUserId());
        if (cmp) {
            code = cmp.code;
        }
    }
    var view = getQueryString('v');

    var fields = [{
        title: '类别',
        field: 'type',
        readonly: !!view,
        type: 'select',
        data: { '1': '公司', '2': '个体户' }
    }, {
        title: '全称',
        field: 'name',
        required: true,
        maxlength: 30,
        readonly: !!view
    }, {
        title: '工商营业执照号',
        field: 'gsyyzzh',
        required: true,
        readonly: !!view,
        maxlength: 30,
        type: 'img'
    }, {
        title: '企业图标',
        field: 'logo',
        required: true,
        readonly: !!view,
        maxlength: 30,
        type: 'img'
    }, {
        title: '联系人',
        field: 'contacts',
        readonly: !!view
    }, {
        title: '联系人电话',
        field: 'mobile',
        maxlength: 30,
        readonly: !!view
    }, {
        title: '联系人邮箱',
        field: 'email',
        maxlength: 30,
        readonly: !!view
    }, {
        title: '联系人qq',
        field: 'qq',
        maxlength: 30,
        readonly: !!view
    }, {
        title: '规模',
        field: 'scale',
        required: true,
        readonly: !!view,
        type: 'select',
        key: 'comp_scale'
    }, {
        placeholder: '详细地址（如街道、门牌号等）',
        field: 'address',
        required: true,
        maxlength: 100,
        hidden: !!view
    }, {
        title: '地址',
        field: 'province1',
        hidden: !view,
        readonly: true,
        formatter: function(v, r) {
            var res = $.unique([r.province, r.city, r.area]).reverse();
            return res.join(' ') + ' ' + (r.address || '');
        }
    }, {
        title: '广告语',
        field: 'slogan',
        required: true,
        readonly: !!view,
        maxlength: 30
    }, {
        title: '简介',
        field: 'description',
        required: true,
        type: 'textarea',
        readonly: !!view
    }];

    buildDetail({
        fields: fields,
        code: code,
        view: view,
        detailCode: '612062'
    });
});