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
    	title: '所在位置',
    	field: 'location',
    	type: 'select',
    	data: {'1':'首页','2':'人才首页','3':'服务首页','4':'登录页面'},
    	search: true
    }, {
		field: 'orderNo',
		title: '顺序'
	},{
		field: 'remark',
		title: '备注'
	}];
	buildList(router, columns);
	
});

