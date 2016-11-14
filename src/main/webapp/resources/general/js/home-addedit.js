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
		type: 'hidden',
		field: 'type',
		value: '2'
	}, {
		type: 'hidden',
		field: 'status',
		value: '1'
    },{
    	title: '显示顺序',
    	field: 'orderNo',
    	readonly: !!view,
    	required: true,
    	'Z+': true,
    	maxlength: 4
    }, {
    	title: '所在位置',
    	field: 'location',
    	readonly: !!view,
    	type: 'select',
    	data: {'1':'首页','2':'人才首页','3':'服务首页','4':'登录页面'},
    	required: true,
    }, {
		title: '图片',
		field: 'pic',
		type: 'img',
		readonly: !!view,
		required: true
	}, {
		title: '备注',
		field: 'remark',
		maxlength: 255,
		readonly: !!view
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