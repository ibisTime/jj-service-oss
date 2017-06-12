$(function() {

    var code = getQueryString('code');
    var view = getQueryString('v');
    var cmpcertiStatus = {
        "1": "待审核",
        '2': "审核通过",
        "3": "审核未通过"
    }
    var compScale = {
        "1": "0-20人",
        "2": " 20 - 50 人",
        "3": "50 - 200 人",
        "4": "200 - 500 人",
        "5": "500 人以上"
    }

    var fields = [{
            title: '企业名称',
            field: 'name',
            readonly: true
        }, {
            title: '工商营业执照号',
            field: 'gsyyzzh',
            required: true,
            readonly: true,
            maxlength: 30,
            type: 'img'
        },
        {
            title: '企业图标',
            field: 'logo',
            required: true,
            readonly: true,
            maxlength: 30,
            type: 'img'
        }, {
            title: '联系人',
            field: 'corporation',
            readonly: true
        }, {
            title: '联系人电话',
            field: 'mobile',
            maxlength: 30,
            readonly: true
        }, {
            title: '联系人邮箱',
            field: 'email',
            maxlength: 30,
            readonly: true
        }, {
            title: '联系人qq号码',
            field: 'qq',
            maxlength: 30,
            readonly: true
        }, {
            title: '规模',
            field: 'scale',
            required: true,
            readonly: true,
            type: 'select',
            key: 'comp_scale'
        }, {
            placeholder: '详细地址（如街道、门牌号等）',
            field: 'address',
            required: true,
            maxlength: 100,
            hidden: true
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
            title: '简介',
            field: 'description',
            required: true,
            type: 'textarea',
            readonly: true,

        }, {
            title: "资质",
            type: "title"
        },
        //  {
        //     title: "公司资质",
        //     type: 'o2m',
        //     field: "wfd",
        //     readonly: true,
        //     columns: [{
        //         field: 'realName',
        //         title: '所属资质'
        //     }, {
        //         field: 'name',
        //         title: '资质名称',
        //         readonly: true
        //     }, {
        //         field: 'idKind',
        //         title: '报价区间',
        //         formatter: function(v, data) {

        //         }
        //     }, {
        //         field: 'idNo',
        //         title: '状态'
        //     }, {
        //         field: 'mobile',
        //         title: '审核人'
        //     }, {
        //         field: 'mobile',
        //         title: '审核时间'
        //     }, {
        //         field: 'mobile',
        //         title: '操作'
        //     }, ]
        // }
        {
            field: 'qualifyName',
            title: '资质名称',
            formatter: function(v, data) {
                return data.oriData.qualifyName
            },
            readonly: true
        },
        {
            field: 'status',
            title: '状态',
            type: 'select',
            formatter: function(v, data) {
                return cmpcertiStatus[data.oriData.status];
            },
            // key: 'cmpcerti_status',

        }, {
            title: "审核人",
            field: "approver",
            formatter: function(v, data) {
                return data.oriData.approver
            },
        }, {
            title: "审核说明",
            field: "approveNote",
            formatter: function(v, data) {
                return data.oriData.approveNote
            },
        },
        // {
        //     title: "审核时间",
        //     field: "approveDatetime",
        //     formatter: function(v, data) {
        //         return dateTimeFormat[data.oriData.approveDatetime];
        //     },
        // }
    ]


    var options = {
        fields: fields,
        code: code,
        detailCode: '612077',
        view: true,
        buttons: buttons,
        dataType: "company"
    };
    var buttons = [{
        title: '返回',
        handler: function() {
            goBack();
        }
    }];
    buildDetail(options);
});