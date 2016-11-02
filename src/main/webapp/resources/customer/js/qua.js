$(function(){
	showPermissionControl();
	
	var router = '/customer/qua';
	
	var columns = [{
		title: '拥有资质列表',
		type: 'title',
	},{
		field: 'type',
		title: '资质',
		formatter : Dict.getNameForList('serve_type'),
		type: 'select',
		key: 'serve_type',
	},{
		field: 'name',
		title: '资质名称',
	}, {
		title: '报价区间',
		formatter: function(value, record) { 
			  return record.quoteMin + '~' + record.quoteMax;
			},
	}, {
		field: 'status',
		title: '状态',
		type: 'select',
		data: {'0':'待审核','1':'审核通过','2':'审核不通过'},		
	},{
		field: 'approveUser',
		title: '审核人',
	},{
		field : 'approveDatetime',
		title : '更新时间',
		formatter: dateTimeFormat
    }];
	buildList(router, columns);
})