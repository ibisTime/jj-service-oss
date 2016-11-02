$(function() {
	//按钮权限判断
	showPermissionControl();
	
	var router = '/general/home';
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	},{
		field : 'name',
		title : '名字',
		serach: true,
	},{
		title: '类型',
		field: 'type',
		type: 'select',
		data: {'1':'菜单','2':'banner','3':'模块','4':'引流','5':'启动图'},
		serach: true,
	},{
    	field : 'status',
		title : '状态',
		search: true,
		type: 'select',
		data: {'0':'不显示','1':'显示'},
    },{
		field: 'orderNo',
		title: '顺序'
	},{
		field: 'remark',
		title: '备注'
	}];
	buildList(router, columns);
	
});

