$(function() {

    var code = getQueryString('code');
    var view = getQueryString('v');


    var fields = [{
        title: '服务名称',
        field: 'name',
        required: true,
        readonly: true,
    }, {
        title: '所属企业',
        field: 'company-name',
        required: true,
        readonly: true
    }, {
        title: '价格区间',
        required: true,
        formatter: function(value, record) {
            return moneyFormat(record.quoteMin) + '~' + moneyFormat(record.quoteMax);
        },
        readonly: true,
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
        afterSet: function(v, r) {
            if (v == 2) {
                $('#servePhoto-pyNum').parent().show();
                $('#servePhoto-sysNum').parent().show();
                $('#servePhoto-isDz').parent().show();
                $('#servePhoto-scpslm').parent().show();
                $('#servePhoto-works').parent().show();
            } else if (v == 1) {
                $('#serveTrain-lectorNum').parent().show();
                $('#serveTrain-mtrainTimes').parent().show();
                $('#serveTrain-mtrainNum').parent().show();
                $('#serveTrain-resume1').parent().show();
                $('#serveTrain-resume2').parent().show();
                $('#serveTrain-resume3').parent().show();
                $('#serveTrain-course').parent().show();
            } else if (v == 4) {
                $('#serveShop-tgfw').parent().show();
                $('#serveShop-feeMode').parent().show();
                $('#serveShop-payCycle').parent().show();
                $('#serveShop-scyylm').parent().show();
                $('#serveShop-sucCase').parent().show();
            } else if (v == 3) {
                $('#serveArt-designNum').parent().show();
                $('#serveArt-sclm').parent().show();
                $('#serveArt1').show();
                $('#serveArt-homeDays').parent().show().css("display", "inline-block");
                $('#serveArt-homePrice').parent().show().css("display", "inline-block");
                $('#serveArt-detailDays').parent().show().css("display", "inline-block");
                $('#serveArt-detailPrice').parent().show().css("display", "inline-block");
                $('#serveArt-bannerDays').parent().show().css("display", "inline-block");
                $('#serveArt-bannerPrice').parent().show().css("display", "inline-block");
                $('#serveArt-allDays').parent().show().css("display", "inline-block");
                $('#serveArt-allPrice').parent().show().css("display", "inline-block");
                $('#serveArt-works').parent().show();
            } else if (v == 5) {
                $('#serveKfwb-kfNum').parent().show();
                $('#serveKfwb-mtradeAmount').parent().show();
                $('#serveKfwb-business').parent().show();
                $('#serveKfwb-feeMode').parent().show();
            } else if (v == 6) {
                $('#serveCp-ckNum').parent().show();
                $('#serveCp-ckArea').parent().show();
                $('#serveCp-goodsKind').parent().show();
                $('#serveCp-dsendNum').parent().show();
            } else if (v == 8) {
                $('#serveCyy-bgArea').parent().show();
                $('#serveCyy-availBgArea').parent().show();
                $('#serveCyy-ccArea').parent().show();
                $('#serveCyy-availCcArea').parent().show();
                $('#serveCyy-zzfw').parent().show();
                $('#serveCyy-introduce').parent().show();
                $('#serveCyy-yhPolicy').parent().show();
                $('#serveCyy-pic1').parent().show();
                $('#serveCyy-pic2').parent().show();
            }
        }
    }, {
        title: '拥有棚影数量',
        field: 'servePhoto-pyNum',
        readonly: true,
        hidden: true
    }, {
        title: '拥有摄影师数量',
        field: 'servePhoto-sysNum',
        readonly: true,
        hidden: true
    }, {
        title: '是否接受定制需求',
        field: 'servePhoto-isDz',
        type: 'select',
        data: { '0': '否', '1': '是' },
        readonly: true,
        hidden: true
    }, {
        title: '擅长拍摄类目',
        field: 'servePhoto-scpslm',
        readonly: true,
        hidden: true
    }, {
        title: '上传代表作品',
        field: 'servePhoto-works',
        readonly: true,
        type: 'img',
        hidden: true
    }, {
        title: '讲师总人数',
        field: 'serveTrain-lectorNum',
        readonly: true,
        hidden: true
    }, {
        title: '月均培训场次',
        field: 'serveTrain-mtrainTimes',
        readonly: true,
        hidden: true
    }, {
        title: '月均培训人数',
        field: 'serveTrain-mtrainNum',
        readonly: true,
        hidden: true
    }, {
        title: '3位核心讲师简历1',
        field: 'serveTrain-resume1',
        readonly: true,
        hidden: true,
         type:"img"
    }, {
        title: '3位核心讲师简历2',
        field: 'serveTrain-resume2',
        readonly: true,
        hidden: true,
        type:"img"
    }, {
        title: '3位核心讲师简历3',
        field: 'serveTrain-resume3',
        readonly: true,
        hidden: true,
       type:"img"
    }, {
        title: '培训课程上传',
        field: 'serveTrain-course',
        readonly: true,
        hidden: true,
        link: true
    }, {
        title: '提供服务',
        field: 'serveShop-tgfw',
        readonly: true,
        hidden: true,
        type: 'select',
        multiple: true,
        key: 'dp_tgfw'
    }, {
        title: '收费模式',
        field: 'serveShop-feeMode',
        readonly: true,
        hidden: true,
        type: 'select',
        key: 'fee_mode'
    }, {
        title: '付款周期',
        field: 'serveShop-payCycle',
        readonly: true,
        hidden: true,
        type: 'select',
        key: 'pay_cycle'
    }, {
        title: '擅长运营类目',
        field: 'serveShop-scyylm',
        readonly: true,
        hidden: true
    }, {
        title: '成功案例展示',
        field: 'serveShop-sucCase',
        readonly: true,
        hidden: true,
        type:'img'
        // link: true
    }, {
        title: '设计师总人数',
        field: 'serveArt-designNum',
        readonly: true,
        hidden: true
    }, {
        title: '擅长类目',
        field: 'serveArt-sclm',
        readonly: true,
        hidden: true
    }, {
        title: '设计实效/报价',
        hidden: true,
        type: 'title',
        field: 'serveArt1'

    }, {
        title: '首页',
        field: 'serveArt-homeDays',
        readonly: true,
        hidden: true,
        width: '25%'
    }, {
        title: '报价',
        field: 'serveArt-homePrice',
        readonly: true,
        hidden: true,
        formatter: moneyFormat,
        width: '75%'
    }, {
        title: '详情页',
        field: 'serveArt-detailDays',
        readonly: true,
        hidden: true,
        width: '25%'
    }, {
        title: '报价',
        field: 'serveArt-detailPrice',
        readonly: true,
        hidden: true,
        formatter: moneyFormat,
        width: '75%'
    }, {
        title: '海报图',
        field: 'serveArt-bannerDays',
        readonly: true,
        hidden: true,
        width: '25%'
    }, {
        title: '报价',
        field: 'serveArt-bannerPrice',
        readonly: true,
        hidden: true,
        formatter: moneyFormat,
        width: '75%'
    }, {
        title: '全店设计',
        field: 'serveArt-allDays',
        readonly: true,
        hidden: true,
        width: '25%'
    }, {
        title: '报价',
        field: 'serveArt-allPrice',
        readonly: true,
        hidden: true,
        formatter: moneyFormat,
        width: '75%'
    }, {
        title: '设计作品案例',
        field: 'serveArt-works',
        readonly: true,
        hidden: true,
        link: true
    }, {
        title: '客服团队人数',
        field: 'serveKfwb-kfNum',
        readonly: true,
        hidden: true
    }, {
        title: '线上月均交易额',
        field: 'serveKfwb-mtradeAmount',
        readonly: true,
        hidden: true,
        amount: true
    }, {
        title: '客服业务',
        field: 'serveKfwb-business',
        readonly: true,
        hidden: true,
        type: 'select',
        key: 'kfyw',
        multiple: true
    }, {
        title: '收费模式',
        field: 'serveKfwb-feeMode',
        readonly: true,
        hidden: true,
        type: 'select',
        key: 'fee_mode'
    }, {
        title: '仓库个数',
        field: 'serveCp-ckNum',
        readonly: true,
        hidden: true
    }, {
        title: '仓库总面积（m²）',
        field: 'serveCp-ckArea',
        readonly: true,
        hidden: true
    }, {
        title: '支持货品种类',
        field: 'serveCp-goodsKind',
        readonly: true,
        hidden: true,
        type: 'select',
        key: 'hpzl',
        multiple: true
    }, {
        title: '日平均发货能力（单）',
        field: 'serveCp-dsendNum',
        readonly: true,
        hidden: true
    }, {
        title: '办公总面积（m²）',
        field: 'serveCyy-bgArea',
        readonly: true,
        hidden: true
    }, {
        title: '办公剩余可用面积（m²）',
        field: 'serveCyy-availBgArea',
        readonly: true,
        hidden: true
    }, {
        title: '仓储总面积（m²）',
        field: 'serveCyy-ccArea',
        readonly: true,
        hidden: true
    }, {
        title: '仓储剩余可用面积（m²）',
        field: 'serveCyy-availCcArea',
        readonly: true,
        hidden: true
    }, {
        title: '增值服务',
        field: 'serveCyy-zzfw',
        readonly: true,
        hidden: true,
        type: 'select',
        key: 'zzfw',
        multiple: true
    }, {
        title: '产业园详细介绍',
        field: 'serveCyy-introduce',
        readonly: true,
        hidden: true
    }, {
        title: '优惠政策',
        field: 'serveCyy-yhPolicy',
        readonly: true,
        hidden: true
    }, {
        title: '产业园照片1',
        field: 'serveCyy-pic1',
        readonly: true,
        hidden: true,
        type: 'img'
    }, {
        title: '产业园照片2',
        field: 'serveCyy-pic2',
        readonly: true,
        hidden: true,
        type: 'img'
    }, {
        title: '详情描述',
        field: 'description',
        type: 'textarea',
        readonly: true
    }];
    buildDetail({
        fields: fields,
        code: code,
        view: view,
        detailCode: "612141"
    })


});