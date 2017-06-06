$(function() {



    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'type',
        title: '资质类型',
        search: true,
        formatter: Dict.getNameForList('qua_kind'),
        type: 'select',
        key: 'qua_kind'
    }, {
        field: 'name',
        title: '资质名称',
    }, {
        field: 'description',
        title: '资质简介',
    }, {
        field: 'updateDatetime',
        title: '更新时间',
        formatter: dateTimeFormat
    }];

    buildList({
        columns: columns,
        pageCode: '612015',
        searchParams: {
            companyCode: OSS.company
        }
    })


});