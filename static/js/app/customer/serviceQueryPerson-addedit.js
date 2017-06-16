$(function() {

    var code = getQueryString('code');
    var view = !!getQueryString('v');
    var compScale = {
        "1": "0-20人",
        "2": " 20 - 50 人",
        "3": "50 - 200 人",
        "4": "200 - 500 人",
        "5": "500 人以上"
    }

    var fields = [{
            title: '真实名称',
            field: 'name',
            readonly: true
        }, {
            title: '身份证照片',
            field: 'idNo',
            required: true,
            readonly: true,
            maxlength: 30,
            type: 'img'
        },{
            title: '个体户图标',
            field: 'logo',
            required: true,
            readonly: true,
            type: 'img'
        },{
            title: '广告图',
            field: 'advPic',
            required: true,
            readonly: true,
            type: 'img'
        },{
            title:"广告语",
            field:'slogan',
            readonly:true
        }, {
            title: '缩略图',
            field: 'Pic',
            required: true,
            readonly: true,
            type: 'img'
        },{
            title: '联系人',
            field: 'corporation',
            readonly: true
        }, {
            title: '联系人电话',
            field: 'mobile',
            maxlength: 30,
            readonly: true
        },{
            title:"注册资本",
            field:"registeredCapital",
            readonly: true
        }, {
            title:"成立年限",
            field:"regtime",
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

        },
    {
        title: '所属资质',
        field: 'qualifyType',
        readonly: true,
        listCode: "612016",
        type: 'select',
        keyName: 'code',
        valueName: 'name',
        searchName: 'name'
    },{
        title: '报价区间',
        field: 'priceRange',
        readonly: true
    }, {
        title:"资质状态",
        field:"status",
        type:"select",
        key:'cmpcerti_status', 
        readonly:true
    }];

    buildDetail({
        fields: fields,
        code: code,
        view: view,
        detailCode: '612062',
        // editCode: ' '
    });
    $("#subBtn").remove();

});