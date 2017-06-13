$(function() {

    var code = getQueryString('code');
    var view = getQueryString('v');


    var fields = [{
            title: '意向企业',
            field: 'expCompany',
            readonly: true
        }, {
            title: '需求人',
            field: 'publisher',
            readonly: true
        }, {
            title: '联系方式',
            field: 'mobile',
            readonly: true
        }, {
            title: '意向名称',
            field: 'name',
            required: true,
            readonly: true
        }, {
            title: '意向类型',
            field: 'qualityCode',
            type: "select",
            listCode: "612016",
            search: true,
            keyName: 'code',
            valueName: 'name',
            readonly: true
        }, {
            title: '意向时间',
            field: 'publishDatetime',
            formatter: dateTimeFormat,
            required: true,
            readonly: true
        }, {
            title: '意向状态',
            field: 'status',
            type: 'select',
            data: { '0': '违规', '1': '正常' }
        },
        // {
        //     title: '意向企业',
        //     field: 'expCompanyName',
        //     readonly: true,
        //     type: 'm2o',
        //     url: $('#basePath').val() + 'company_addedit.html',
        //     codeField: 'expCompany',
        //     defaultValue: 'All'
        // },
        {
            title: '紧急程度',
            field: 'urgentLevel',
            type: 'select',
            readonly: true,
            key: 'urgent_level',
            required: true,
        }, {
            title: '需求描述',
            field: 'description',
            type: 'textarea',
            readonly: true,
        }
    ];

    buildDetail({
        fields: fields,
        code: code,
        view: view,
        detailCode: '612196'
    });
});