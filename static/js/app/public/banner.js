$(function() {

    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        title: 'banner名称',
        field: 'name',
        search: true
    }, {
        title: '位置',
        field: 'location',
        type: 'select',
        search: true,
        data: { '1': '首页', '2': '人才首页', '3': '服务首页', '4': '登录页面' },

    }, {
        title: '顺序',
        field: 'orderNo',

    }, {
        title: '备注',
        field: 'remark',
    }];
    buildList({
        router: 'banner',
        columns: columns,
        pageCode: '806050',
        deleteCode: '806041',
        searchParams: {
            companyCode: OSS.company,
            type: 2
        }
    });



});