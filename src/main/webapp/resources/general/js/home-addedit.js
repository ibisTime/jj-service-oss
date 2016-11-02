$(function() {
	var code = getQueryString('code');
	var view = getQueryString('v');
	var router = '/general/home';
	
	var fields = [{
		title: '名称',
		field: 'name',
		required: true,
		maxlength: 255,
		readonly: !!view,
	}, {
		title: '类型',
		field: 'type',
		required: true,
		readonly: !!view,
		type: 'select',
		data: {'1':'菜单','2':'banner','3':'模块','4':'引流','5':'启动图'},
	}, {
    	field : 'status',
		title : '状态',
		search: true,
		readonly: !!view,
		type: 'select',
		data: {'0':'不显示','1':'显示'},
		required: true,
    },{
    	title: '显示顺序',
    	field: 'orderNo',
    	readonly: !!view,
    	type: 'select',
    	data: {'1':'1','2':'2','3':'3'},
    	required: true,
    }, {
    	title: '所在位置',
    	field: 'location',
    	readonly: !!view,
    	type: 'select',
    	data: {'1':'web顶级菜单','2':'微信顶级菜单','3':'公司简介子菜单','4':'web顶级菜单的子菜单'},
    	required: true,
    }, {
		title: '图片',
		field: 'pic',
		type: 'img',
		readonly: !!view,
	}, {
		title: '备注',
		field: 'remark',
		maxlength: 255,
		type: 'textarea',
		readonly: !!view,
	}];
	
	var options = {};
	if (view) {
		options.buttons = [{
			'title': '返回',
			handler: function() {
				goBack();
			}
		}];
	}	
	buildDetail(router, fields, code, options);
});