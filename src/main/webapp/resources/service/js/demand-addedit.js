$(function() {
	
	var code = getQueryString('code');
	var view = getQueryString('v');
	var router = '/service/demand';
	
	var fields = [{
		title: '需求名称',
		field: 'name',
		required: true,
		maxlength: 30
	}, {
		title: '需求类型',
		field: 'kind',
		required: true,
		type: 'select',
		key: 'position_kind'
	}, {
		//需要加一下从数据库查出有哪些公司，做一个下拉框
		title: '意向企业',
		required: true,
		field: 'exp_company',
	},{
		title: '紧急程度',
		field: 'urgent_level',
		type: 'select',
		key: 'urgent_level',
		required: true,
	},{
		title: '需求描述',
		field: 'description',
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