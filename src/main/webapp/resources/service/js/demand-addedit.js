$(function() {
	
	var code = getQueryString('code');
	var view = getQueryString('v');
	var router = '/service/demand';
	
	var fields = [{
		title: '需求名称',
		field: 'name',
		required: true,
		readonly: true,
	}, {
		title: '需求类型',
		field: 'type',
		required: true,
		type: 'select',
		readonly: true,
		key: 'qua_kind'
	}, {
		title: '意向企业',
		required: true,
		field: 'expCompany',
		type: 'select',
		readonly: true,
		url: $('#basePath').val() + '/general/company/list',
		keyName: 'code',
		valueName: 'name',
	},{
		title: '紧急程度',
		field: 'urgentLevel',
		type: 'select',
		readonly: true,
		key: 'urgent_level',
		required: true,
	},{
		title: '需求描述',
		field: 'description',
		type: 'textarea',
		readonly: true,
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