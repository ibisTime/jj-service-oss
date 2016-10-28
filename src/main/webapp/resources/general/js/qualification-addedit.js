$(function() {
	var code = getQueryString('code');
	var view = getQueryString('v');
	var router = '/general/qualification';
	
	var fields = [{
		title: '资质类型',
		field: 'type',
		type: 'select',
		formatter: Dict.getNameForList('qua_kind'),
		key: 'qua_kind'
	}, {
		title: '资质名称',
		field: 'name',
		maxlength: 30,
		readonly: !!view
	}, {
		title: '公司简介',
		field: 'description',
		type: 'textarea',
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