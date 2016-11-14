$(function() {
	
	var code = getQueryString('code');
	var view = getQueryString('v');
	var router = '/service/demand';
	
	var fields = [{
		title: '手机号',
		field: 'mobile',
		readonly: true
	},{
		title: '需求名称',
		field: 'name',
		required: true,
		readonly: true
	}, {
		title: '意向企业',
		field: 'expCompanyName',
		readonly: true,
		type: 'm2o',
		url: $('#basePath').val() + '/general/company_addedit.htm',
		codeField: 'expCompany',
		defaultValue: 'All'
	}, {
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