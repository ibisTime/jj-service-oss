$(function(){
	showPermissionControl();
	
	var router = '/customer/demandQuery';
	
	var columns = [{
		field : '',
		title : '',	
		checkbox : true
	}, {
		field : 'mobile',
		title : '手机号',
		search: true
	}, {
		field: 'publishDatetime',
		title: '注册时间',
		formatter: dateTimeFormat,
	}, {
		field: 'status',
		title: '状态',
		type: 'select',
		data: {'1':'正常','0':'违规'},
	}];
	buildList(router, columns);
})