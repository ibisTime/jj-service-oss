$(function() {

    var code = getQueryString('code');
    var view = getQueryString('v');


    var fields = [{
            title: '所属公司',
            field: 'companyName',
            required: true,
            readonly: true
        },{
            field: 'name',
            title: '服务名称',
        }, 
        // {
        //     title: '意向企业',
        //     field: 'expCompanyName',
        //     readonly: true,
        //     type: 'm2o',
        //     url: $('#basePath').val() + '/general/company_addedit.htm',
        //     codeField: 'expCompany',
        //     defaultValue: 'All'
        // },
        {
            title: "培训课程",
            field: "course",
            readonly: true,
        }, {
            title: '价格区间',
            required: true,
            formatter: function(value, record) {
                return moneyFormat(record.quoteMin) + '~' + moneyFormat(record.quoteMax);
            },
            readonly: true,
        }, {
            title: '讲师总人数',
            field: 'lectorNum',
            readonly: true,
            hidden: true
        }, {
            title: '月均培训场次',
            field: 'mtrainTimes',
            readonly: true,
        },
        {
            title: '月均培训人数',
            field: 'mtrainNum',
            readonly: true,
        }, {
            title: '3位核心讲师简历1',
            field: 'resume1',
            readonly: true,
            link: true
        }, {
            title: '3位核心讲师简历2',
            field: 'resume2',
            readonly: true,
            link: true
        }, {
            title: '3位核心讲师简历3',
            field: 'resume3',
            readonly: true,
            link: true
        },
        // {
        //     title: "发布时间",
        //     field: "publishDatetime",
        //     formatter: dateTimeFormat,
        //     readonly: true,
        // }, 
        // {
        //     title: "发布人",
        //     field: 'publisher'
        // }, 
        {
            title: "详情描述",
            field: "description",
            type: "textarea",
            readonly: true,
        }
    ];

    buildDetail({
        fields: fields,
        code: code,
        view: view,
        detailCode: '612097'
    });
});