$(function(){
	showPermissionControl();
	
	var router = '/customer';
	
	var columns = [{
		field : '',
		title : '',	
		checkbox : true
	}, {
		field : 'mobile',
		title : '手机号',
		search: true
	}, {
		field: 'updateDatetime',
		title: '注册时间',
		formatter: dateTimeFormat,
	}, {
		field: 'status',
		title: '状态',
		type: 'select',
		formatter: Dict.getNameForList('user_status'),
		key: 'user_status'
	}];
	buildList(router, columns, {
		pageRouter: '/customer/customer'
	});
})